import { useState } from "react";
import NavigationLink from "../../components/NavigationLink";
import { Input, Typography } from "antd";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isOtp, setIsOtp] = useState<boolean>(false);
  const { setIsLogin } = useAuth();
  const navigation = useNavigate();
  const hanldeLogin = () => {
    setIsOtp(!isOtp);
  };
  const hanldeLoginOtp = () => {
    setIsLogin(true);
    setIsOtp(false);
    navigation("/");
  };
  return (
    <div className="flex items-center mt-5 mb-20">
      <div className="bg-white py-8 px-12 rounded-lg shadow-lg text-center relative max-w-lg mx-auto overflow-hidden">
        <>
          <div
            className="absolute top-0 -left-12 w-24 h-24 bg-no-repeat bg-contain rotate-180"
            style={{
              backgroundImage: "url(https://i.imgur.com/jGaTtgj.png)",
            }}
          ></div>
          <h1 className="text-3xl font-bold text-teal-600 mb-4 z-40">
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_green_32864f3821.png&w=1080&q=75"
              alt=""
            />
          </h1>
          {isOtp ? (
            <>
              <div className="my-10">
                <h2 className="text-lg font-semibold text-teal-600 mb-10">
                  NHẬP OTP
                </h2>
                <div className="text-[#494949] text-base font-medium font-['Inter'] leading-normal">
                  Một mã OTP vừa được gửi vào số 0978603870
                </div>
                <div className="flex justify-center space-x-2 ">
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                  <input
                    type="text"
                    className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
                  />
                </div>
                {/* <div className="text-[#ff0000]  text-sm font-normal font-['Inter'] leading-[21px]">
                Mã OTP không hợp lệ
              </div> */}
                <div>
                  <span className="text-[#494949] text-base font-normal font-['Inter'] leading-normal">
                    Thời gian còn lại:{" "}
                  </span>
                  <span className="text-[#009383] text-base font-normal font-['Inter'] leading-normal">
                    5 phút 00 giây
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 mt-24">
                Bạn chưa nhận được mã?{" "}
                <a href="#" className="text-teal-600">
                  Gửi lại mã
                </a>
              </p>
              <div className="z-50 relative">
                <button
                  className="bg-teal-600 text-white py-2 px-4 rounded w-full"
                  onClick={hanldeLoginOtp}
                >
                  Xác nhận
                </button>
              </div>
            </>
          ) : (
            <>
              <div className=" flex items-center justify-center gap-8">
                <NavigationLink
                  style="navLogin"
                  content="Đăng nhập"
                  to="/login"
                />
                <NavigationLink
                  style="navLogin"
                  content="Đăng ký"
                  to="/register"
                />
              </div>
              <div className="min-h-[220px] py-3">
                <div className="text-[#494949] text-sm text-left font-medium  leading-normal">
                  Số điện thoại:
                </div>
                <Input
                  className=" focus:outline-none"
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>
              <div className="z-50 relative">
                <button
                  className="bg-teal-600 text-white py-2 px-4 rounded w-full"
                  onClick={hanldeLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </>
          )}

          <div
            className="absolute bottom-2 -right-8 w-24 h-24 bg-no-repeat bg-contain "
            style={{
              backgroundImage: "url(https://i.imgur.com/jGaTtgj.png)",
            }}
          ></div>
        </>
      </div>
    </div>
  );
};

export default LoginPage;
