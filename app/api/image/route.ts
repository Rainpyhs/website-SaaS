import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { prompt } = body;

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1", 
            {
                inputs: prompt,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                responseType: "arraybuffer",
            }
    );

        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const imageUrl = `data:image/png;base64,${base64}`;

        return NextResponse.json([{ url: imageUrl }]);
    } catch (error) {
    console.log("Error generating image:", error);
    return new NextResponse("Error generating image", { status: 500 });
    }
}
