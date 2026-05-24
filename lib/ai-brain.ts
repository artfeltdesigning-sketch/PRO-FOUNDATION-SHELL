import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

type DecodeInput = {
  userInput: string;
  mode: "image" | "motion";
  style: string;
  lut: string;
  lighting: string;
  camera: string;
  environment: string;
  ratio: string;
  hasReference: boolean;
};

const SYSTEM_PROMPT = `
You are CT PRO AI — Elite Hollywood Creative Director Intelligence.

MISSION:
Transform ANY vague user idea into premium cinematic AI generation prompts.

Users may write:
- broken English
- Hinglish
- short keywords
- random cinematic ideas
- incomplete thoughts
- reference image instructions

YOUR JOB:
- understand real meaning
- infer missing details
- creatively expand weak prompts
- rewrite into premium production-grade English
- think like a Hollywood poster designer / Netflix creative director / luxury ad filmmaker

STRICT RULES:
- NEVER copy raw user wording directly
- NEVER create boring generic prompts
- ALWAYS improve creatively
- ALWAYS infer cinematic storytelling
- ALWAYS add premium realism

INTERPRETATION RULES:
If user mentions:
Marvel → superhero blockbuster cinematic energy
Hollywood → theatrical premium realism
Netflix → moody streaming-grade visuals
Poster → theatrical composition
Thumbnail → high attention composition
Luxury → premium textures + polished realism
Mass → elevated hero energy
Gang → ensemble cinematic composition
Action → dynamic movement + tension
Reference image → preserve subject identity

RETURN ONLY VALID JSON:
{
  "subject": "",
  "creativeStyle": "",
  "camera": "",
  "lighting": "",
  "colorGrading": "",
  "environment": "",
  "finalOutput": ""
}
`;

export async function decodeInstruction(input: DecodeInput) {
  if (!input.userInput?.trim()) {
    return "";
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 1.1,
      response_format: {
        type: "json_object",
      },
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `
User Request:
${input.userInput}

Generation Mode:
${input.mode}

Selected User Settings:
Style: ${input.style}
Camera: ${input.camera}
Lighting: ${input.lighting}
Color LUT: ${input.lut}
Environment: ${input.environment}
Aspect Ratio: ${input.ratio}
Reference Image: ${input.hasReference}

Interpret the user request intelligently and return premium cinematic JSON.
          `,
        },
      ],
    });

    const raw =
      completion.choices?.[0]?.message?.content || "{}";

    const parsed = JSON.parse(raw);

    return `
FINAL READY ${
      input.mode === "motion" ? "MOTION" : "IMAGE"
    } PROMPT

AI CREATIVE DIRECTOR INTELLIGENCE

User intent has been professionally interpreted into premium cinematic English production language.

SUBJECT
${parsed.subject || "Premium cinematic subject composition"}

CREATIVE STYLE
${parsed.creativeStyle || input.style}

${
  input.mode === "motion"
    ? `MOTION CAMERA
${parsed.camera || input.camera}`
    : `CAMERA
${parsed.camera || input.camera}`
}

LIGHTING
${parsed.lighting || input.lighting}

COLOR GRADING / LUT
${parsed.colorGrading || input.lut}

ENVIRONMENT ENGINE
${parsed.environment || input.environment}

ASPECT RATIO
${input.ratio}

REFERENCE
${
  input.hasReference
    ? "Reference image attached. Preserve visual identity and composition context."
    : "No reference attached."
}

FINAL OUTPUT
${
  parsed.finalOutput ||
  "Create a premium ultra realistic cinematic output with blockbuster visual storytelling, luxury textures, realistic lighting, production-grade realism, and zero cheap AI artifacts."
}
`;
  } catch (error) {
    console.error("AI Brain Error:", error);

    return `
FINAL READY ${
      input.mode === "motion" ? "MOTION" : "IMAGE"
    } PROMPT

AI CREATIVE DIRECTOR INTELLIGENCE

SUBJECT
Create a premium cinematic ${
      input.mode === "motion" ? "motion sequence" : "image"
    } featuring ${input.userInput}

CREATIVE STYLE
${input.style}

CAMERA
${input.camera}

LIGHTING
${input.lighting}

COLOR GRADING / LUT
${input.lut}

ENVIRONMENT ENGINE
${input.environment}

ASPECT RATIO
${input.ratio}

REFERENCE
${
  input.hasReference
    ? "Reference image attached."
    : "No reference attached."
}

FINAL OUTPUT
Create premium cinematic production-quality output.
`;
  }
}
