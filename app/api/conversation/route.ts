import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"
import { OpenAI } from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY!,
    baseURL : "https://openrouter.ai/api/v1"
})

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const body = await req.json();  
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        if (!openai) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }
        if (!messages) {
            return new NextResponse("Messages is required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "openai/gpt-3.5-turbo",
            messages
        });

        return NextResponse.json(response.choices[0].message);

    } catch (error: any) {
        console.error("[CONVERSATION_ERROR]", error);

        // Tangani error quota OpenAI
        if (error?.status === 429 || error?.code === 'insufficient_quota') {
            return new NextResponse("OpenAI Quota Exceeded. Cek billing akun kamu.", { status: 429 });
        }

        return new NextResponse("Internal error", { status: 500 });
    }
}
