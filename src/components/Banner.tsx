import React from "react";

interface BannerProps {
  label: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const Banner: React.FC<BannerProps> = ({ label, size = "3xl" }) => {
  return (
    <div className="relative w-[955px] h-[86px] mx-auto my-10">
      <img
        className="w-[955px] h-[86px]"
        src="https://i.imgur.com/YV0tBks.png"
        alt="banner"
      />
      <p
        className={`absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#009383] text-${size} font-extrabold uppercase`}
      >
        {label}
      </p>
    </div>
  );
};

export default Banner;
