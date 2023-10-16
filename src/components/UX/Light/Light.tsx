'use client'
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"

export const Light = () => {
    const context = useContext(AppContext) as PageContextType;

    return (
        <div style={{ transform: `translate(${context.mousePosition.x}px, ${context.mousePosition.y}px)` }} className={'bg-primary w-[650px] h-[500px] absolute inset-0 blur-[100px]'} />
    )
}
