type DecodeInput = {
  userInput: string;
  mode: "image" | "motion";
  style: string;
  lut: string;
  lighting: string;
  camera: string;
  chips: string[];
  hasReference: boolean;
};

function cleanInput(text: string) {
  return text.trim();
}

function buildEnvironment(
  chips: string[]
) {
  if (!chips.length)
    return "premium cinematic environment";

  return chips.join(", ");
}

export function decodeInstruction({
  userInput,
  mode,
  style,
  lut,
  lighting,
  camera,
  chips,
  hasReference
}: DecodeInput) {
  const prompt =
    cleanInput(userInput);

  if (!prompt) {
    return "Please enter a creative brief.";
  }

  const environment =
    buildEnvironment(chips);

  if (mode === "image") {
    return `
FINAL READY IMAGE PROMPT:

AI CREATIVE DIRECTOR INTELLIGENCE:
User intent has been professionally interpreted and transformed into premium English production language.

SUBJECT:
${prompt}

STYLE:
${style}

CAMERA:
${camera}

LIGHTING:
${lighting}

COLOR GRADING / LUT:
${lut}

ENVIRONMENT:
${environment}

REFERENCE:
${
  hasReference
    ? "Reference image attached. Preserve composition inspiration while enhancing professionally."
    : "No reference image attached."
}

FINAL OUTPUT:
Create an ultra realistic premium cinematic still image with production-grade composition, realistic textures, professional lighting, blockbuster visual storytelling, premium commercial quality, zero cheap AI artifacts, hyper detailed realism.
`;
  }

  return `
FINAL READY MOTION PROMPT:

AI CREATIVE DIRECTOR INTELLIGENCE:
User motion intent has been professionally decoded into premium English cinematic production language.

SUBJECT:
${prompt}

STYLE:
${style}

CAMERA MOVEMENT:
${camera}

LIGHTING:
${lighting}

COLOR GRADING / LUT:
${lut}

ENVIRONMENT:
${environment}

REFERENCE:
${
  hasReference
    ? "Reference image attached. Use it as visual motion inspiration."
    : "No reference image attached."
}

MOTION DIRECTIVES:
buttery smooth cinematic motion,
realistic movement physics,
natural acceleration and deceleration,
high-end commercial motion pacing,
stable professional camera choreography,
realistic cinematic motion blur,
human natural body mechanics,
premium cinematic scene transitions

FINAL OUTPUT:
Create an ultra realistic premium cinematic motion sequence with blockbuster realism, realistic motion physics, commercial film quality, cinematic storytelling, zero cheap AI artifacts.
`;
}
