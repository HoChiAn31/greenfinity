import { Button, ConfigProvider, Pagination } from "antd";
import Slider from "react-slick";
import NavigationLink from "../../components/NavigationLink";
import Banner from "../../components/Banner";
import { useState } from "react";
import RankingBoard from "../../Layouts/RankingBoard";
import {
  settingGifts,
  settingHomes,
  settingWeeks,
} from "../../constants/sliderSetting";

const HomePage = () => {
  const weeks = [
    "Tuần 8 - 09/2023",
    "Tuần 9 - 09/2023",
    "Tuần 10 - 09/2023",
    "Tuần 11 - 09/2023",
    "Tuần 12 - 09/2023",
    "Tuần 13 - 09/2023",
    "Tuần 14 - 09/2023",
    "Tuần 15 - 09/2023",
  ];
  const [selectedWeek, setSelectedWeek] = useState("Tuần 12 - 09/2023");

  return (
    <div>
      <Slider {...settingHomes} className="slick-home">
        <div>
          <div
            className="flex items-center min-h-screen"
            style={{
              backgroundImage:
                "url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_1_64d7ef1ca5.png&w=1920&q=75')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col items-start text-left transform translate-x-[36%]  max-w-[720px]">
              <div className="text-white text-5xl font-extrabold  uppercase leading-[56px]">
                Hãy hành động hôm nay, kiến tạo trái đất mai sau
              </div>
              <div className="w-[600px] text-white text-sm font-normal  leading-[24px] pb-5">
                Rác thải trở thành nguồn tài nguyên tái chế nếu bạn biết cách sử
                dụng đúng cách. Để làm được điều này, chúng ta cần phải có quy
                trình thu gom – vận chuyển – xử lý rác thải khoa học. Do đó, bạn
                cần phân loại rác thành các loại: Rác hữu cơ, rác vô cơ và rác
                tái chế riêng biệt.
              </div>

              <NavigationLink
                content={
                  <p className="text-white text-lg font-semibold">
                    Tìm hiểu thêm
                  </p>
                }
                style="button"
                to="/station"
                className="border-white border"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            className="flex items-center min-h-screen"
            style={{
              backgroundImage:
                "url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_2_60bc5b48cb.png&w=1920&q=75')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col items-start text-center  ">
              <div className="text-white text-5xl font-extrabold uppercase leading-[56px]">
                Một thế giới sạch <br /> vạn tâm hồn trong xanh.
              </div>
              <div className="w-[600px] text-white text-sm font-normal  leading-[24px] pb-5">
                Hiện nay, môi trường đang bị ô nhiễm ngày càng nhiều là một
                trong những vấn đề quan trọng và cần có những biện pháp xử lý
                kịp thời không chỉ ở Việt Nam mà còn ở trên toàn thế giới
              </div>

              <div className="flex items-center justify-center w-full">
                <NavigationLink
                  content={
                    <p className="text-white text-lg font-semibold">
                      Tìm hiểu thêm
                    </p>
                  }
                  style="button"
                  to="/station"
                  className="border-white border"
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div
            className="flex items-center min-h-screen"
            style={{
              backgroundImage:
                "url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_3_19c75452c4.png&w=1920&q=75')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col items-start  text-left  -translate-x-[24%]  ">
              <div className="text-white text-5xl font-extrabold uppercase leading-[56px]">
                Phân loại rác thải
                <br />
                Tiết kiệm xử lý.
              </div>
              <div className="w-[600px] text-white text-sm font-normal  leading-[24px] pb-5">
                Rác thải trở thành nguồn tài nguyên tái chế nếu bạn biết cách sử
                dụng đúng cách. Để làm được điều này, chúng ta cần phải có quy
                trình thu gom – vận chuyển – xử lý rác thải khoa học. Do đó, bạn
                cần phân loại rác thành các loại: Rác hữu cơ, rác vô cơ và rác
                tái chế riêng biệt.
              </div>

              <NavigationLink
                content={
                  <p className="text-white text-lg font-semibold">
                    Tìm hiểu thêm
                  </p>
                }
                style="button"
                to="/station"
                className="border-white border"
              />
            </div>
          </div>
        </div>
      </Slider>

      <section className="">
        <Banner label="Tổng số chai/lon thu được" />

        <div className="max-w-[1200px] mx-auto flex items-center gap-8">
          {/* item  */}
          <div className="flex items-center">
            <img
              src="https://s.net.vn/hcle"
              alt=""
              className="w-[200px] h-[350px] origin-top-left rotate-[16.50deg] z-[80] -mr-40 -mt-4"
            />
            <div className="relative w-[508px] h-[220px] bg-primary-400 flex justify-center items-center border-[6px] border-white rounded-3xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <img
                src="https://greenfinity.world/assets/images/bg_leaves_left.png"
                alt=""
                className=" absolute bottom-0 left-0"
              />
              <img
                src="https://greenfinity.world/assets/images/bg_leaves_right.png"
                alt=""
                className=" absolute bottom-0 right-0 h-[60%]"
              />
              <div className="h-28 flex-col justify-center items-center  inline-flex z-50">
                <div className="text-white text-[87px] font-bold leading-[104.40px]">
                  200.000
                </div>
                <div className="text-white text-[37px] font-bold leading-[44.40px]">
                  Chai nhựa
                </div>
              </div>
            </div>
          </div>
          {/* item  */}
          <div className="flex items-center">
            <img
              src="https://s.net.vn/a239"
              alt=""
              className="w-[300px] h-[280px] origin-top-left rotate-[16.50deg] z-[80] -mr-52 -mt-[76px]"
            />
            <div className="relative w-[508px] h-[220px] bg-primary-400 flex justify-center items-center border-[6px] border-white rounded-3xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <img
                src="https://greenfinity.world/assets/images/bg_leaves_left.png"
                alt=""
                className=" absolute bottom-0 left-0"
              />
              <img
                src="https://greenfinity.world/assets/images/bg_leaves_right.png"
                alt=""
                className=" absolute bottom-0 right-0 h-[60%]"
              />
              <div className="h-28 flex-col justify-center items-center  inline-flex z-50">
                <div className="text-white text-[87px] font-bold leading-[104.40px]">
                  200.000
                </div>
                <div className="text-white text-[37px] font-bold leading-[44.40px]">
                  Lon nhôm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        {/* banner */}
        <div className="flex items-center justify-center mt-32 my-20">
          <div className="flex items-center ">
            <div className="relative  flex items-center justify-center">
              <img src="https://imgur.com/klYPWWr.png" alt="" />
              <div className="absolute z-50 top-0  -mt-2 ">
                <img
                  src="https://i.imgur.com/CD2CMgt.png"
                  alt=""
                  className="  "
                />
                <div className="w-[320px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl font-extrabold uppercase leading-[43.20px] z-[100]">
                  Đóng góp tuần
                </div>
              </div>
            </div>
            <div className="relative  flex items-center justify-center">
              <img src="https://imgur.com/klYPWWr.png" alt="" />
              <div className="w-[320px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary-500 text-3xl font-extrabold uppercase leading-[43.20px] z-[100]">
                Đóng góp tích lũy
              </div>
            </div>
          </div>
        </div>
        {/* week */}
        <div className="w-1/2 mx-auto my-10">
          <Slider {...settingWeeks}>
            {weeks.map((week, index) => (
              <div
                key={index}
                onClick={() => setSelectedWeek(week)}
                className="max-w-36"
              >
                <div
                  className={`py-2 mx-1 text-sm border-2 rounded-lg text-center cursor-pointer font-bold  ${
                    selectedWeek === week
                      ? "bg-primary-500 text-white border-primary-500"
                      : "bg-white text-primary-500 border-primary-500"
                  }`}
                >
                  {week}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Ranking board */}
      <RankingBoard />
      {/* Login */}
      <section className="flex flex-col justify-center items-center">
        <div className="text-center text-[#15bdd6] text-[26px] font-semibold font-['Roboto'] leading-loose">
          Vui lòng đăng nhập để xem hạng của bạn
        </div>
        <NavigationLink
          to="/login"
          style="button"
          content={<p className="text-base font-bold  ">Đăng nhập</p>}
          bgColor="bg-[#15bdd6]"
        />
      </section>
      {/* Banner */}
      <section className="">
        <Banner label="Quà tặng" />
        <div className="my-20 max-w-[800px] mx-auto">
          <Slider {...settingGifts} className="slick-gift">
            <div className="my-14">
              <div className="flex items-center ">
                <div>
                  <img
                    src="https://i.imgur.com/JfxRj4s.png"
                    alt=""
                    height={326}
                    width={518}
                  />
                </div>
                <div>
                  <div className="opacity-80 text-[#006e62] text-[40px] font-bold  leading-[48px] ">
                    Voucher mua sắm <br /> Siêu thị Co.opmart
                  </div>
                  <p className="text-[#13250e] text-xl  font-bold  leading-relaxed">
                    Sản phẩm được làm từ 20 chai nhựa rỗng
                  </p>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#009383",
                      },
                    }}
                  >
                    <Button type="primary" className="px-10 py-5 ">
                      <p className="text-white text-lg font-semibold   ">
                        Đổi quà
                      </p>
                    </Button>
                  </ConfigProvider>
                </div>
              </div>
            </div>
            <div className="my-14">
              <div className="flex items-center ">
                <div>
                  <img src="https://i.imgur.com/JfxRj4s.png" alt="" />
                </div>
                <div>
                  <div className="opacity-80 text-[#006e62] text-[40px] font-bold font-['Roboto'] leading-[48px] w-[60%]">
                    Voucher mua sắm Siêu thị Co.opmart
                  </div>
                  <p className="text-[#13250e] text-xl font-bold  leading-relaxed">
                    Sản phẩm được làm từ 20 chai nhựa rỗng
                  </p>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#009383",
                      },
                    }}
                  >
                    <Button type="primary" className="px-10 py-5 ">
                      <p className="text-white text-lg font-semibold   ">
                        Đổi quà
                      </p>
                    </Button>
                  </ConfigProvider>
                </div>
              </div>
            </div>
            <div className="my-14">
              <div className="flex items-center ">
                <div>
                  <img src="https://i.imgur.com/JfxRj4s.png" alt="" />
                </div>
                <div>
                  <div className="opacity-80 text-[#006e62] text-[40px] font-bold font-['Roboto'] leading-[48px] w-[60%]">
                    Voucher mua sắm Siêu thị Co.opmart
                  </div>
                  <p className="text-[#13250e] text-[21.31px] font-bold font-['Roboto'] leading-relaxed">
                    Sản phẩm được làm từ 20 chai nhựa rỗng
                  </p>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#009383",
                      },
                    }}
                  >
                    <Button type="primary" className="px-10 py-5 ">
                      <p className="text-white text-lg font-semibold   ">
                        Đổi quà
                      </p>
                    </Button>
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
