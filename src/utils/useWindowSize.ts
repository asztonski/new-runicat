import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
}

export const useWindowSize = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const windowSize: WindowSize = {
        width: window.innerWidth,
      };

      const isDesktop = windowSize.width > 800;

      setIsDesktop(isDesktop);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
};
