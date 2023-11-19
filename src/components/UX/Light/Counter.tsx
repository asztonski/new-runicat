'use client'
import { useContext } from "react"
import { AppContext } from "@/context/AppContext"

export const Counter = () => {

    const { step } = useContext(AppContext);


    return (
        <div className={"hidden lg:flex mt-12 items-center gap-4"}>
            <span className={`text-[19px]`}>{`0${step}`}</span>
            <div className={`w-40 h-[5px] bg-slate-800 relative after:absolute after:contents-[''] after:bg-white after:h-full after:left-0 after:m-auto after:ease-in after:duration-75 ${ step === 2 ? 'after:w-2/3' : step === 3 ? 'after:w-full' : 'after:w-1/3'}`} />
            <span className={`text-[19px]`}>03</span>
        </div>
    )
}