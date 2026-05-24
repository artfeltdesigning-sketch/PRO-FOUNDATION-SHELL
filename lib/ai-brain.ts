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
You are CT PRO AI Elite Hollywood Creative Director.

Understand vague, broken English, Hinglish prompts.

Never copy raw text.

Rewrite into premium cinematic production-grade English.

Return ONLY JSON:
{
 "subject":"",
 "creativeStyle":"",
 "camera":"",
 "lighting":"",
 "colorGrading":"",
 "environment":"",
 "finalOutput":""
}
`;

export async function decodeInstruction(
  input: DecodeInput
) {
  const res = await fetch(
    "http://localhost:11434/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2.5:14b",
        stream: false,
        prompt: `
${SYSTEM_PROMPT}

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
        `,
      }),
    }
  );

  const data = await res.json();

  const parsed = JSON.parse(data.response);

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
