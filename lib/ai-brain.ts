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

function normalizePrompt(
  input: string
) {
  return input
    .replace(/muhje/gi, "")
    .replace(/muje/gi, "")
    .replace(/chahiye/gi, "")
    .replace(/chaiye/gi, "")
    .replace(/ek/gi, "a")
    .replace(/ladki/gi, "beautiful woman")
    .replace(/aadmi/gi, "man")
    .trim();
}

export function decodeInstruction(
  input: DecodeInput
) {
  const subject =
    normalizePrompt(
      input.userInput
    );

  if (
    !subject.trim()
  ) {
    return "";
  }

  if (
    input.mode ===
    "motion"
  ) {
    return `
FINAL READY MOTION PROMPT

AI CREATIVE DIRECTOR INTELLIGENCE

User motion intent has been professionally interpreted into premium cinematic English production language.

SUBJECT
Create a cinematic premium motion sequence featuring ${subject}.

CREATIVE STYLE
${input.style}

MOTION CAMERA
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
Create a premium cinematic motion sequence with realistic camera movement, smooth choreography, luxury commercial quality, production-grade motion realism, zero cheap AI artifacts.
`;
  }

  return `
FINAL READY IMAGE PROMPT

AI CREATIVE DIRECTOR INTELLIGENCE

User intent has been professionally interpreted into premium cinematic English production language.

SUBJECT
Create an ultra realistic premium cinematic image featuring ${subject}.

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
Create a premium ultra realistic cinematic still image with blockbuster visual storytelling, commercial realism, luxury textures, realistic lighting, and zero cheap AI artifacts.
`;
}
