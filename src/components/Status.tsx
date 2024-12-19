import { FC } from "react";

interface StatusProps {
  type: "success" | "fail" | "";
}
const Status: FC<StatusProps> = ({ type }) => {
  if (type === "success") {
    return (
      <div className="h-7 px-2 py-1 bg-[#e3ffe0] rounded-3xl border border-[#33cd26] justify-center items-center gap-2.5 inline-flex">
        <div className="py-0.5 justify-center items-center gap-1 flex overflow-hidden">
          <div className="w-[5px] h-[5px] bg-[#33cd26] rounded-full" />
          <div className="flex-col justify-center items-start inline-flex">
            <div className="text-[#33cd26] text-sm font-medium">Thành công</div>
          </div>
        </div>
      </div>
    );
  } else if (type === "fail") {
    return (
      <div className="h-7 px-2 py-1 bg-[#fff4e0] rounded-3xl border border-[#fdb600] justify-center items-center gap-2.5 inline-flex">
        <div className="py-0.5 justify-center items-center gap-1 flex overflow-hidden">
          <div className="w-[5px] h-[5px] bg-[#fdb600] rounded-full" />
          <div className="flex-col justify-center items-start inline-flex">
            <div className="text-[#fdb600] text-sm font-medium ">
              Không thành công
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Status</div>;
};
export default Status;
