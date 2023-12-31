export const HomeRune = () => {
  return (
    <>
      {/* Mobile */}
      <svg
        className={
          "absolute lg:hidden inset-0 m-auto w-full h-auto z-[-1]"
        }
        viewBox="0 0 350 696"
        width="350"
        height="696"
      >
        <path
          className="w-full"
          d="M0.006,0.192H349.994V695.808H0.006V0.192ZM260.215,231.627l-67.337,60.708V210.924h-34.76v81.411L90.781,231.627,67.4,257.314l90.72,81.793V481.932h34.76V339.1l90.528-81.83Zm0,4-69.337,61.708V212.924h-30.76v84.411L90.781,234.627,70.4,257.314l89.72,80.793V479.932h30.76V338.1l88.528-80.83Z"
        />
      </svg>
      {/* Desktop */}
      <svg
        className={
          "absolute lg:block hidden inset-0 m-auto w-full max-w-[1920px] z-[-1]"
        }
        width="1600"
        height="720"
        viewBox="0 0 1600 720"
      >
        <path
          className="z-10 absolute inset-0 m-auto w-full h-full"
          d="M1760,835H160V115H1760V835ZM825.89,292.31h0l-37.148,40.955L932.865,463.68V691.406h55.221V463.673L1131.9,333.2l-36.842-40.89L988.087,389.105V259.3H932.865V389.105L825.89,292.31Z"
          transform="translate(-160 -115)"
        />
      </svg>
    </>
  );
};
