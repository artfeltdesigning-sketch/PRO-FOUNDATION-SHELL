type DecodeInput = {
  userInput: string;
  mode: "image" | "motion";
  style: string;
  lut: string;
  lighting: string;
  camera: string;
  environment: string;
  hasReference: boolean;
};

function normalizePrompt(
  input: string
) {
  const cleaned =
    input
      .replace(/muhje/gi, "I want")
      .replace(/muje/gi, "I want")
      .replace(/chaiye/gi, "need")
      .replace(/chahiye/gi, "need")
      .replace(/ek/gi, "a")
      .replace(/women/gi, "beautiful woman")
      .replace(/ladki/gi, "beautiful woman")
      .replace(/aadmi/gi, "man")
      .replace(/ghar/gi, "luxury home")
      .replace(/villa/gi, "luxury villa")
      .replace(/building/gi, "premium architecture")
      .replace(/balcony/gi, "luxury balcony")
      .replace(/coffee/gi, "coffee cup")
      .trim();

  return cleaned;
}

function imageOutput(
  input: DecodeInput
) {
  const subject =
    normalizePrompt(
      input.userInput
    );

  return `
FINAL READY IMAGE PROMPT

AI Creative Director Intelligence

User intent has been professionally interpreted and converted into premium English cinematic production language.

Subject
Create a premium ultra realistic scene featuring ${subject}.

Creative Style
${input.style}

Camera
${input.camera}

Lighting
${input.lighting}

Color Grading / LUT
${input.lut}

Environment Engine
${input.environment}

Reference
${
  input.hasReference
    ? "Reference image attached. Preserve composition inspiration while enhancing cinematic quality."
    : "No reference reference attached."
}

Final Production Direction
Create an ultra realistic cinematic still image with premium composition, realistic textures, luxury commercial quality, natural realism, production-grade visual storytelling, high-end professional image aesthetics, zero cheap AI artifacts.
`;
}

function motionOutput(
  input: DecodeInput
) {
  const subject =
    normalizePrompt(
      input.userInput
    );

  return `
FINAL READY MOTION PROMPT

AI Creative Director Intelligence

User motion intent has been professionally interpreted into cinematic English production language.

Subject
Create a premium cinematic motion sequence featuring ${subject}.

Creative Style
${input.style}

Motion Camera Direction
${input.camera}

Lighting
${input.lighting}

Color Grading / LUT
${input.lut}

Environment Engine
${input.environment}

Reference
${
  input.hasReference
    ? "Reference image attached for motion inspiration."
    : "No reference attached."
}

Motion Direction
Buttery smooth cinematic motion
Natural acceleration and deceleration
Professional gimbal quality movement
Luxury commercial pacing
Realistic motion physics
Natural cinematic motion blur
Premium scene choreography
Production-grade motion realism

Final Production Direction
Create an ultra realistic premium cinematic motion sequence with blockbuster realism, smooth camera choreography, realistic physics, luxury film-grade storytelling, zero cheap AI artifacts.
`;
}

export function decodeInstruction(
  input: DecodeInput
) {
  if (
    !input.userInput.trim()
  ) {
    return "Please enter a creative brief.";
  }

  if (
    input.mode ===
    "motion"
  ) {
    return motionOutput(
      input
    );
  }

  return imageOutput(input);
}
