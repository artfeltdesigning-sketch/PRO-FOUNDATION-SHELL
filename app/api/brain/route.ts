import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

const SYSTEM_PROMPT = `
You are CT PRO AI — Elite Hollywood Creative Director Intelligence.

MISSION:
Transform vague, broken English, Hinglish, short cinematic ideas, and incomplete user prompts into premium production-grade cinematic prompts.

STRICT RULES:
- Never copy raw user text directly
- Understand actual intent
- Expand creatively
- Infer missing cinematic details
- Rewrite into premium English
- Think like Hollywood blockbuster poster designer + Netflix creative director + luxury ad filmmaker

INTERPRETATION RULES:
Marvel = epic superhero blockbuster
Hollywood = theatrical realism
Netflix = moody premium visuals
Poster = theatrical composition
Thumbnail = high attention composition
Luxury = premium commercial realism
Mass = elevated hero energy
Gang = ensemble composition
Action = cinematic tension
Reference image = preserve identity

Return ONLY JSON:
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

export async function POST(req: Request) {
  try {
    const input = await req.json();

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
User Input:
${input.userInput}

Mode:
${input.mode}

Style:
${input.style}

Camera:
${input.camera}

Lighting:
${input.lighting}

LUT:
${input.lut}

Environment:
${input.environment}

Reference:
${input.hasReference}
          `,
        },
      ],
    });

    const parsed = JSON.parse(
      completion.choices?.[0]?.message?.content || "{}"
    );

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI Brain Failed",
      },
      {
        status: 500,
      }
    );
  }
}
