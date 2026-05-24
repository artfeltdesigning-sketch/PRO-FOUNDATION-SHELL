import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
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
You are CT PRO AI Elite Creative Director.

Your job:
Understand ANY user prompt dynamically.

Rules:
- Interpret vague prompts
- Decode Hinglish
- Rewrite into premium cinematic English
- Infer missing visual details
- Never copy raw text directly
- Expand creatively

Return ONLY JSON.
`;

export async function decodeInstruction(
  input: DecodeInput
) {
  const completion =
    await client.chat.completions.create({
      model: "gpt-4o",
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
User Input:
${input.userInput}

Mode:
${input.mode}

Settings:
style=${input.style}
lighting=${input.lighting}
camera=${input.camera}
lut=${input.lut}
environment=${input.environment}
reference=${input.hasReference}

Return:
{
  "subject":"",
  "creativeStyle":"",
  "camera":"",
  "lighting":"",
  "colorGrading":"",
  "environment":"",
  "finalOutput":""
}
          `,
        },
      ],
    });

  const parsed = JSON.parse(
    completion.choices[0].message.content || "{}"
  );

  return `
FINAL READY ${
    input.mode === "motion"
      ? "MOTION"
      : "IMAGE"
  } PROMPT

AI CREATIVE DIRECTOR INTELLIGENCE

SUBJECT
${parsed.subject}

CREATIVE STYLE
${parsed.creativeStyle}

CAMERA
${parsed.camera}

LIGHTING
${parsed.lighting}

COLOR GRADING / LUT
${parsed.colorGrading}

ENVIRONMENT ENGINE
${parsed.environment}

ASPECT RATIO
${input.ratio}

REFERENCE
${
  input.hasReference
    ? "Reference image attached."
    : "No reference attached."
}

FINAL OUTPUT
${parsed.finalOutput}
`;
}
