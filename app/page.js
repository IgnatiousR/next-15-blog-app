'use client'

import Image from "next/image";
import { useState } from "react";
import Card from "@/components/card";

export default function Home() {
    const [isVisible, setIsVisible] = useState(true)
    const [names, setNames] = useState(['Jake', 'Tim', 'Jon'])
    const cards = isVisible && names.map((name,index) => <Card key={index}>{name}</Card>)
    const handleClick = () => {
        //alert('Hello!')
        setIsVisible(!isVisible)
    }
    const handleAdd=()=>{
        setNames([...names, 'New User'])
    }
    const handleDel=()=>{
        setNames(names.slice(0, -1))
    }

    return (
        <>
            <div className="p-20 space-y-4">
                <div>Hello User</div>
                {cards}

                <div className="flex space-x-2">
                    <button onClick={handleClick} className="border p-2 rounded-md cursor-pointer hover:bg-white/25">
                        {isVisible?'Hide':'Show'}
                    </button>
                    <button onClick={handleAdd} className="border p-2 rounded-md cursor-pointer hover:bg-white/25">
                        Add
                    </button>
                    <button onClick={handleDel} className="border p-2 rounded-md cursor-pointer hover:bg-white/25">
                        Del
                    </button>
                </div>

            </div>
        </>
    );
}