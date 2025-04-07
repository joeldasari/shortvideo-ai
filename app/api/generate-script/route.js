import { chatSession } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log(prompt);
    const result = await chatSession.sendMessage(prompt);
    console.log(result);
    return NextResponse.json({
      VideoScript: JSON.parse(result.response.text()),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
