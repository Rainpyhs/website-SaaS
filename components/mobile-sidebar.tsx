"use client"

import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

import { 
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle

} from "@/components/ui/sheet"

import  Sidebar  from "@/components/sidebar"
import { useEffect, useState } from "react"



const MobileSidebar = () =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant = "ghost" size ="icon" className = "md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side = "left" className ="p-0">
                <Sidebar isSheet/>
            </SheetContent>
        </Sheet>
        
    )
}

export default MobileSidebar;

