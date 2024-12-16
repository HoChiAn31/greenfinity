import { FC } from "react";

const MapPage: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
        BẢN ĐỒ
      </h3>
      <div className="flex items-center justify-center">
        <div className="h-[68px] px-6 bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-[40px] font-bold font-['Roboto'] uppercase leading-[48px]">
            ĐỊA ĐIỂM ĐẶT RECYCLE DEPOT
          </div>
        </div>
      </div>
      <div className="border border-primary-500 rounded-3xl">1</div>
    </div>
  );
};

export default MapPage;
