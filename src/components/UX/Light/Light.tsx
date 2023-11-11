"use client";
import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/utils/useMousePosition";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export const Light = () => {
  const { mouseX, mouseY } = useMousePosition();
  const { isDesktop } = useContext(AppContext);
  const lightRef = useRef(null);

  console.log(isDesktop)

  useEffect(() => {
    if (isDesktop) {
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={lightRef}
      className={"bg-primary w-[650px] h-[500px] absolute m-auto md:m-[unset] inset-0 blur-[100px]"}
    />
  );
};
