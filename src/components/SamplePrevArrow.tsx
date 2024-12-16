import { ArrowLeft } from "./icon";

interface SamplePrevArrowProps {
  className?: string;
  type?: "week" | "gift" | "default";
  onClick?: () => void;
}
const SamplePrevArrow = (props: SamplePrevArrowProps) => {
  const { className, type, onClick } = props;
  if (type === "week") {
    return (
      <div
        className={` absolute bg-white z-[100] -left-16 top-1/2 h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
      >
        <ArrowLeft />
      </div>
    );
  } else if (type === "gift") {
    return (
      <div
        className={`absolute bg-white z-[100] -left-36 top-1/2  h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
        onClick={onClick}
      >
        <ArrowLeft />
      </div>
    );
  }
  return (
    <div
      className={`absolute bg-white z-[100] left-10 top-1/2  h-[44px] w-[44px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

export default SamplePrevArrow;
