import { ArrowLeft } from "./icon";

interface SampleNextArrowProps {
  className?: string;
  type?: "week" | "gift" | "default";
  onClick?: () => void;
}

const SampleNextArrow = (props: SampleNextArrowProps) => {
  const { className, type, onClick } = props;
  if (type === "week") {
    return (
      <div
        className={`absolute bg-white z-[100] -right-16 top-1/2  h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
      >
        <ArrowLeft className="rotate-180" />
      </div>
    );
  } else if (type === "gift") {
    return (
      <div
        className={`absolute bg-white z-[100] -right-36 top-1/2  h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
      >
        <ArrowLeft className="rotate-180" />
      </div>
    );
  }
  return (
    <div
      className={` absolute bg-white z-[100] right-10  top-1/2  h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ArrowLeft className="rotate-180" />
    </div>
  );
};

export default SampleNextArrow;
