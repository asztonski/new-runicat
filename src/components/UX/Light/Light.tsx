"use client";
import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/utils/useMousePosition";

export const Light = () => {
  const { mouseX, mouseY } = useMousePosition();
  const lightRef = useRef(null);

  useEffect(() => {
    if (lightRef.current) {
      lightRef.current.style.transform = `translate(${mouseX / 10}%, ${
        mouseY / 10
      }%)`;
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={lightRef}
      className={
        "bg-primary w-[650px] h-[500px] duration-[0.4s] ease-[cubic-bezier(0,.8,.5,.92);] absolute m-auto md:m-[unset] inset-0 blur-[100px]"
      }
    />
  );
};
