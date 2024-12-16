import React from "react";

interface StepCardProps {
  stepNumber: number;
  description: string;
  imageUrl: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  description,
  imageUrl,
}) => {
  return (
    <div className="w-[952px] h-[200px] pl-[54px] pr-[118px] py-5 bg-white rounded-xl shadow justify-start items-center gap-[15px] inline-flex">
      <img
        className="w-[174px] h-40"
        src={imageUrl}
        alt={`Step ${stepNumber}`}
      />
      <div>
        <span className="text-[#494949] text-xl font-bold font-['Roboto']">
          Bước {stepNumber}: <br />
        </span>
        <span className="text-[#494949] text-xl font-normal font-['Roboto']">
          {description}
        </span>
      </div>
    </div>
  );
};
export default StepCard;
