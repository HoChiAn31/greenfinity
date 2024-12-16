import { Button, ConfigProvider, Space } from "antd";
import { FC } from "react";
import Slider from "react-slick";

import Carousel from "../../components/Carousel";
import Banner from "../../components/Banner";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        height: "32px",
        width: "32px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const WorldPage: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <section>
        <Banner label="QUÀ TẶNG" />
      </section>
      <section className="max-w-5xl mx-auto ">
        <Slider {...settings} className="slick-world">
          <div>
            <div className="flex items-center ">
              <div>
                <img
                  src="https://i.imgur.com/JfxRj4s.png"
                  alt=""
                  height={245}
                  width={569}
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
          <div>
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
          <div>
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
      </section>

      <Banner label="QUÀ TẶNG" />

      <section className=" max-w-3xl mx-auto  ">
        <div className="flex items-center gap-4">
          <img
            src="https://i.imgur.com/7JkY9KX.png"
            alt=""
            height={303}
            width={438}
          />
          <div>
            <div className="opacity-80 text-[#006e62] text-4xl font-bold  leading-[48px] pb-3">
              Tái chế cùng
              <br />
              Cộng đồng
              <span className="text-[#15bdd6] text-4xl font-black  leading-[54px]">
                {" "}
                GreeZ
              </span>
            </div>

            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#009383",
                },
              }}
            >
              <Button type="primary" className="px-10 py-5 ">
                <p className="text-white text-lg font-semibold ">Xem thể lệ</p>
              </Button>
            </ConfigProvider>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="relative w-[955px] h-[86px] mx-auto mt-20">
          <img
            className="w-[955px] h-[86px]"
            src="https://i.imgur.com/YV0tBks.png"
            alt="banner"
          />
          <p className="absolute top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#009383] text-3xl font-extrabold uppercase">
            Thương hiệu kết hợp
          </p>
        </div>
        <div className="flex items-center justify-center my-10">
          <img src="https://i.imgur.com/4yeTEe8.png" alt="aquafina" />
        </div>
        <div className="text-center text-[#009383] text-[40px] font-bold  uppercase leading-[48px]">
          Đối tác
        </div>
        <div className="flex items-center justify-center pt-5 pb-12">
          <div className="flex w-[955px] h-[86px] justify-between ">
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_plastic_927cf3d817.png&w=640&q=75"
              alt="partner1"
            />
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_media_72db15f6d0.png&w=828&q=75"
              alt="partner2"
            />

            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_software_e2d595ff18.png&w=828&q=75"
              alt="partner3"
            />
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_unigons_ed2a93cde4.png&w=828&q=75"
              alt="partner4"
            />
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fdatas_logo_new_05_f0fc34dcc8.png&w=640&q=75"
              alt="partner5"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldPage;
