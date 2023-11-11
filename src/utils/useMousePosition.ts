import { useState, useEffect } from "react";

type MousePosition = {
  mouseX: number;
  mouseY: number;
}

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ mouseX: e.clientX, mouseY: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};