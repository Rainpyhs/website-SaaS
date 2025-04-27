"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Montserrat ({
    weight : "600",
    subsets : ["latin"]
})

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth()
    return (
        <nav className="p-4 bg-transparent flex items-center justify-center">
            <Link
            href = "/"
            className="flex items-center">
                <div className="relative h-8 w-8 mr-4 ">

                </div>
            </Link>
        </nav>
    )
}