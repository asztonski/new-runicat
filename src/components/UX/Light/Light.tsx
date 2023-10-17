"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export const Light = () => {
  const { mousePosition } = useContext(AppContext);

  return (
    <div
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: '.74s cubic-bezier(0,.8,.5,.92)'
      }}
      className={"bg-primary w-[650px] h-[500px] absolute inset-0 blur-[100px]"}
    />
  );
};
