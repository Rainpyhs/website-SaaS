import { useAuth } from "@clerk/nextjs"

export const LandingHero = () => {
    const { isSignedIn } = useAuth()
    return (
        <div className="text-white font-bold py-36 text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  ">

            </div>
        </div>
    )
}
