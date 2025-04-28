'use client'

import { useAuth } from "@clerk/nextjs"
import { Typewriter } from "react-simple-typewriter"
import Link from "next/link"
import { Button } from "./ui/button"

export const LandingHero = () => {
    const { isSignedIn } = useAuth()
    return (
        <div className="text-white font-bold py-36 text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Best AI Tool For</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <Typewriter
                        words={[
                            "Chatbot.",
                            "Photo Generation.",
                            "Music Generation.",
                            "Video Generation.",
                        ]}
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
            </div>

            <div className="text-sm md:text-xl font-light text-zinc-400 mt-6">
                Create content using AI 10x Faster
            </div>

            <div className="mt-8 mb-4">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button className="rounded-full md:text-lg p-4 md:p-6 font-semibold bg-purple-600" variant="ghost">
                        Start Generating For Free
                    </Button>
                </Link>
            </div>

            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                No Credit Card Required
            </div>
        </div>
    )
}
