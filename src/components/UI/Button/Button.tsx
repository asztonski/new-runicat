import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={`text-primary border-primary border-[1px] py-5 px-7 uppercase font-roboto font-light tracking-[3.5px] w-max hover:shadow-primary hover:shadow-[0_0_22px] duration-[0.74s] ease-[ease] transition-[box-shadow]`}>
      {children}
    </button>
  );
};
