import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 shadow">
      <div className="mx-auto text-center flex container items-center">
        <div className="w-[342px] h-[170.55px] flex flex-col items-start gap-5">
          <img
            className="h-[62.55px] mx-auto"
            src="https://i.imgur.com/h46IfHV.png"
            alt="Greenfinity logo"
          />
          <p className="text-sm mb-4 text-center italic">
            Xuất hiện vào năm 2023, chúng tôi mang đến một giải pháp bảo vệ môi
            trường tốt nhất. Chúng tôi mong rằng Trái Đất trong tương lai sẽ trở
            nên xanh - sạch - đẹp.
          </p>
        </div>

        <div className="w-[952px] h-[84px] flex flex-col items-center gap-8">
          <div className="flex gap-8">
            <div className="flex-col gap-4">
              <div className="text-[#494949] text-[22px] font-bold">
                Trạm GreeZ
              </div>
            </div>
            <div className="flex-col gap-4">
              <div className="text-[#494949] text-[22px] font-bold">
                Thế giới tái sinh
              </div>
            </div>
            <div className="flex-col gap-4">
              <div className="text-[#494949] text-[22px] font-bold">
                Thang đóng góp
              </div>
            </div>
            <div className="flex-col gap-5">
              <div className="text-[#494949] text-[22px] font-bold">Bản đồ</div>
            </div>
            <div className="flex-col gap-5">
              <div className="text-[#494949] text-[22px] font-bold">
                MINI GAME
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-col gap-4">
              <div className="text-[#494949] text-[22px] font-bold">
                Cửa hàng
              </div>
            </div>
            <div className="flex-col gap-4">
              <div className="text-[#494949] text-[22px] font-bold">
                Câu chuyện
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-[#929292] text-base font-normal font-['Roboto']">
            Copyright © by Alta Plastics and Unigons Vietnam Limited. All rights
            reserved.
          </div>
          <div className="flex justify-center space-x-4">
            <img src="https://i.imgur.com/cAsoOTc.png" alt="" className="" />

            <a href="#" className="text-gray-500 hover:text-gray-700">
              <img src="https://i.imgur.com/9lrdalc.png" alt="" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <img src="https://i.imgur.com/WPL81Fp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
