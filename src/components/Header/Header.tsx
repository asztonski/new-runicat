import React from "react";

export const Header = () => {
  return (
    <header>
      <div className={"flex gap-4 items-center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="32"
          viewBox="0 0 36 32"
        >
          <path
            d="M50,63.778l3.09-6.1L53.6,46l7.2,3.556H75.2L82.4,46l.519,11.894L86,63.778,68,78Zm18,.26A7.04,7.04,0,0,0,68,54,7.039,7.039,0,0,0,68,64.038Zm3.621-.216a7.146,7.146,0,0,0,7.189-7.1A7.145,7.145,0,0,0,71.621,63.822Zm-7.226,0a7.146,7.146,0,0,0-7.19-7.1A7.146,7.146,0,0,0,64.4,63.822Z"
            transform="translate(-50 -46)"
            fill="rgb(59, 255, 225)"
          />
        </svg>
        <h1 className={"tracking-[12px] text-[27px]"}>
          runicat<sup className={"text-grey text-[12px]"}>beta</sup>
        </h1>
      </div>
    </header>
  );
};
