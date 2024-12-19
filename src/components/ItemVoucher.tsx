import { FC } from "react";
import { Coin } from "./icon";

interface ItemVoucherProps {
  type?: string;
}
const ItemVoucher: FC<ItemVoucherProps> = ({ type }) => {
  if (type === "voucherHunting") {
    return (
      <div className="bg-white p-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl">
        <div className="bg-primary-100 flex items-center justify-center rounded-xl py-5 relative">
          <img src="https://i.imgur.com/kUXtA9i.png" alt="voucher" />
          <div className="bg-[#15bdd6] flex items-center px-2 py-1 gap-1 min-w-[100px] absolute right-2 top-2 rounded-md">
            <Coin />
            <p className="text-white text-[15px] font-semibold leading-[18px]">
              50 điểm
            </p>
          </div>
        </div>
        <div className="bg-white border border-primary-500 rounded-xl mx-[1%] -mt-2 px-3 mb-2 relative">
          <div className="w-[338px] h-[132px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-[#006e62] text-[21px] font-semibold ">
              Voucher MoMo cash 30.000đ
            </div>
            <div className="">
              <p>
                <span className="text-[#3f3f3f] text-[15px] font-semibold ">
                  Số lượng quà mỗi tuần:{" "}
                </span>
                <span className="text-[#3f3f3f] text-[15px] font-normal ">
                  05
                </span>
              </p>
              <p className="text-[#3f3f3f] text-[15px] font-normal ">
                <span className="text-[#3f3f3f] text-[15px] font-semibold ">
                  Cách thức đổi quà:{" "}
                </span>
                Trao cho (05) người có Điểm Chi Tiêu cao tiếp theo Giải ba.
              </p>
              <p className="text-[#3f3f3f] text-[15px] font-semibold ">
                Giá trị quà tặng(+VAT):{" "}
                <span className="text-[#3f3f3f] text-[15px] font-normal ">
                  800.000 đồng/voucher
                </span>
              </p>
            </div>
          </div>
          <div className="h-10 px-8 py-6 bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex w-full  mb-4">
            <div className="text-center text-white text-lg font-semibold leading-snug">
              Đổi Voucher
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white p-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl">
      <div className="bg-primary-100 flex items-center justify-center rounded-xl py-5">
        <img src="https://i.imgur.com/kUXtA9i.png" alt="voucher" />
      </div>
      <div className="bg-white border border-primary-500 rounded-xl mx-[1%] -mt-2 px-3 mb-2">
        <div className="w-[338px] h-[132px] flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-[#006e62] text-[21px] font-semibold ">
            Voucher MoMo cash 30.000đ
          </div>
          <div className="self-stretch">
            <p>
              <span className="text-[#3f3f3f] text-[15px] font-semibold ">
                Số lượng quà mỗi tuần:{" "}
              </span>
              <span className="text-[#3f3f3f] text-[15px] font-normal ">
                05
              </span>
            </p>
            <p className="text-[#3f3f3f] text-[15px] font-normal ">
              <span className="text-[#3f3f3f] text-[15px] font-semibold ">
                Cách thức đổi quà:{" "}
              </span>
              Trao cho (05) người có Điểm Chi Tiêu cao tiếp theo Giải ba.
            </p>
            <p className="text-[#3f3f3f] text-[15px] font-semibold ">
              Giá trị quà tặng(+VAT):{" "}
              <span className="text-[#3f3f3f] text-[15px] font-normal ">
                800.000 đồng/voucher
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemVoucher;
