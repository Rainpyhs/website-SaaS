
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { LandingNavbar } from "@/components/landing-navbar"
import { LandingHero } from "@/components/landing-hero"


const DashboardPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar/>
            <LandingHero/>
        </div>
        
    )
}
export default DashboardPage;