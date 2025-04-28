"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Haikal",
        avatar : "H",
        title : "Software Engineer",
        description : "This is the best application I've used"
    },
    {
        name: "Riyan",
        avatar : "R",
        title : "Software Engineer",
        description : "I'm really grateful founding this app"
    },
    {
        name: "Jono",
        avatar : "J",
        title : "Content Creator",
        description : "This app help me done all of my task"
    },
    {
        name: "Antonio",
        avatar : "A",
        title : "Software Engineer",
        description : "I've used this app for 6 month ago and still using it because it is very helpful "
    }
]
export const LandingContent = () => {
    return (
        <div className=" px-10 pb-20">
            <h2 className="text-center text-4xl font-extrabold text-white mb-10"
            >Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((index) =>(
                    <Card key = {index.description}
                    className="bg-[#192339] border-none text-white"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg ">
                                        {index.name}
                                    </p>
                                    <p className="text-zinc-400 ">
                                        {index.title}
                                    </p>
                                </div>

                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {index.description}
                            </CardContent>
                        </CardHeader>

                    </Card>
                ))}
            </div>
        </div>
    )
}