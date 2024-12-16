import { FC } from "react";
import StepCard from "../../components/StepCard";

const steps = [
  {
    stepNumber: 1,
    description:
      "Thu thập các loại lon và nhựa rỗng để bỏ vào cổng tái chế của máy",
    imageUrl: "https://i.imgur.com/vpEe4fP.png",
  },
  {
    stepNumber: 2,
    description: "Bấm “Bắt đầu” và đọc kỹ hướng dẫn của máy trên màn hình LCD",
    imageUrl:
      "https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fgreez_station_2_0d60d1864e.png&w=750&q=75",
  },
  {
    stepNumber: 3,
    description:
      "Bỏ chai rỗng hay lon rỗng vào cổng tái chế. Máy sẽ tự động nhận diện và đếm số lượng chai lon mà bạn đã bỏ vào.",
    imageUrl: "https://i.imgur.com/vpEe4fP.png",
  },
  {
    stepNumber: 4,
    description:
      "Máy sẽ hiện lên mã QR để bạn có thể tích điểm hay tải voucher về máy, theo đúng chiến dịch mà máy đang chạy.",
    imageUrl:
      "https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2FB4_139dace4a7.png&w=384&q=75",
  },
  {
    stepNumber: 5,
    description:
      "Sau khi bạn đã hoàn thành các bước thì hãy bấm “Kết thúc” máy sẽ đóng cổng tái chế lại.",
    imageUrl:
      "https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fgreez_station_5_2cb28bc6dc.png&w=750&q=75",
  },
];
const StationPage: FC = () => {
  return (
    <div>
      <div className=" max-w-[954px] mx-auto my-10">
        <section className="flex items-center gap-4">
          <div className="text-[#006e62] text-[40px] font-bold ">
            Quy trình vận hành của máy
          </div>
          <div className="h-14 px-2.5 bg-[#15bdd6] rounded-md justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-5xl font-bold font-['Roboto']">
              RECYCLE DEPOT
            </div>
          </div>
        </section>
        <section className="space-y-8 mt-10">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              description={step.description}
              imageUrl={step.imageUrl}
            />
          ))}
        </section>
        <section className="my-20">
          <div className="text-center text-[#333333] text-4xl font-bold ">
            Cùng khám phá
          </div>
          <div className="text-center text-[#009383] text-5xl font-bold ">
            “Hành trình tái chế và vòng đời của rác thải nhựa”
          </div>

          <div className="my-10">
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2FHTTC_2_150px_1d49f1b93a.png&w=1920&q=75"
              alt="procedure"
            />
          </div>
        </section>
        <div className=" text-center my-20">
          <div className=" text-[#373737] text-[38px] font-semibold leading-[45.60px]">
            Chúng ta hãy chung tay
          </div>
          <div className=" text-[#009383] text-[54.01px] font-extrabold leading-[64.81px]">
            “BẢO VỆ MÔI TRƯỜNG”
          </div>
          <div className=" ">
            <span className="text-[#373737] text-5xl font-semibold leading-[57.60px]">
              và nói
            </span>
            <span className="text-[#009383] text-[55px] font-black leading-[66px]">
              KHÔNG
            </span>
            <span className="text-[#373737] text-5xl font-semibold leading-[57.60px]">
              với rác thải
            </span>
            <span className="text-[#009383] text-[55px] font-black leading-[66px]">
              NHỰA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationPage;
