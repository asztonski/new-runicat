"use client";
import React, { useRef, useEffect, useState } from "react";
import { useMousePosition } from "@/utils/useMousePosition";

export const Light = () => {
  const { mouseX, mouseY } = useMousePosition();
  const [isDesktop, setIsDesktop] = useState(false);
  const lightRef = useRef(null);

  useEffect(() => {
    window.innerWidth > 1024 ? setIsDesktop(true) : setIsDesktop(false);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${mouseX / 10}%, ${
          mouseY / 10
        }%)`;
      } else {
        lightRef.current.style.transform = `translate(0)`
      }
    }
  }, [mouseX, mouseY]);

  return (
    <div
      ref={lightRef}
      className={
        "bg-primary w-full h-1/2 lg:w-[650px] lg:h-[500px] duration-[0.4s] ease-[cubic-bezier(0,.8,.5,.92);] absolute m-auto lg:m-[unset] inset-0 blur-[100px]"
      }
    />
  );
};
