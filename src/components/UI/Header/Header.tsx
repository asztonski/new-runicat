import React from "react";

export const Header = () => {
  return (
    <header className={"flex justify-between raleway uppercase"}>
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
        <h1 className={"tracking-[12px] text-[27px] flex items-center"}>
          runicat<sup className={"text-grey text-[12px]"}>beta</sup>
        </h1>
      </div>
      <div className={"flex gap-4"}>
        <a
          href="https://www.instagram.com/runicatofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="insta"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
          >
            <g id="insta" transform="translate(-1752 -35.06)">
              <rect
                id="Prostokąt_4_kopia"
                data-name="Prostokąt 4 kopia"
                width="25"
                height="25"
                transform="translate(1752.5 35.56)"
                stroke-width="1"
                stroke="rgb(59, 255, 225)"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></rect>
              <path
                id="Prostokąt_4_kopia_2"
                data-name="Prostokąt 4 kopia 2"
                d="M1760,48a5,5,0,1,1,5,5A5,5,0,0,1,1760,48Zm11-6.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,1771,41.5Z"
                fill="none"
                stroke="rgb(59, 255, 225)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Runicat"
        >
          <svg
            className="fb"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
          >
            <g id="f" transform="translate(-1793 -35.06)">
              <rect
                id="Prostokąt_4_kopia_3"
                data-name="Prostokąt 4 kopia 3"
                width="25"
                height="25"
                transform="translate(1793.5 35.56)"
                stroke-width="1"
                stroke="rgb(59, 255, 225)"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></rect>
              <path
                id="Kształt_4"
                data-name="Kształt 4"
                d="M1806.98,60V51h1.994l1-3h-2.992V45h2.992l1-4h-2.992a5.888,5.888,0,0,0-4.983,3v4.153H1801V51s1.288-.16,1.994-.16V60"
                fill="rgb(59, 255, 225)"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </header>
  );
};
