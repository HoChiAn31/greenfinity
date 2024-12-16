import { FC, useState } from "react";
import { Link } from "react-router-dom";
import SwitchLanguage from "../components/SwitchLanguage";
import { Button, Image } from "antd";
import NavigationLink from "../components/NavigationLink";
import { ArrowDown, Cart, Coin, SubNavBar } from "../components/icon";

const Header: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [countCart, setCountCart] = useState<number>(2);
  return (
    <div className="fixed top-4 z-[9999] w-full">
      <div className="w-[95%] mx-auto flex items-center ">
        {/* Left Section */}
        <div className="flex items-center">
          <img
            src="https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fheader_left.png&w=64&q=100"
            alt="Left decoration"
            className="h-[74px]"
          />
        </div>

        {/* Middle Section */}
        <div className="flex flex-1 h-[74px] justify-between border-b-[5px] bg-white border-b-[#e0e0e0] relative items-center">
          {/* Logo */}
          <Link
            to="/"
            className="h-[82%] ml-8 -translate-y-[24%] select-none z-50"
          >
            <img
              src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_f33c229500.png&w=750&q=75"
              alt="Logo"
              className="h-[88px] w-[330px]"
            />
          </Link>
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            {/* <NavigationLink to={`/`} content="TRANG CHỦ" style="nav" /> */}
            <NavigationLink to={`/station`} content="TRẠM GREEZ" style="nav" />
            <NavigationLink
              to={`/world`}
              content="THẾ GIỚI TÁI SINH"
              style="nav"
            />
            <NavigationLink
              to={`/contribution`}
              content="THANG ĐÓNG GÓP"
              style="nav"
            />
            <NavigationLink to={`/map`} content="BẢN ĐỒ" style="nav" />
            <NavigationLink to={`/minigame`} content="MINI GAME" style="nav" />
          </nav>
          {/* Button */}
          <div className="flex items-center gap-3 mr-4">
            {!isLogin ? (
              <>
                <SwitchLanguage />
                <NavigationLink
                  to="/login"
                  style="button"
                  content={
                    <p className="text-base font-bold font-['Inter']">
                      Đăng nhập
                    </p>
                  }
                  iconLeft={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                  }
                />
              </>
            ) : (
              <>
                <div className=" relative">
                  <Cart />
                  <div className=" absolute top-0 -right-1 bg-red-500 h-3 w-3 rounded-full flex justify-center items-center">
                    <p className="text-xs text-white font-bold">{countCart}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c568/c92c/ef974240c2e2adb22ca78f595db9527f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpUOPP5g-eXC2YmBCv~LdnJgJQ2ERo4mFj7rMQdWCVZ~FJlSr-wOdZD6QyelVTb1jkc85C3QJVekThIzjeBkxx~KczGGf~CdvRjGleoKvDkaknbskWPqoLENKz28VG2rWFp7Ywbp4Kybn-y-FJ2IgVo3WleyYIXk~gtS9Y54ZoxRTupb8wPe2NvDEhM2W9PFJQ32DJGsqEd8pllb4JkMv~OKlI4mChyySJpJjBjk76vv0tpdyh0lnwDbxBy~0HFaVn8GZNryKKsBkhR9ZjpO31u21wwNfKEYX5~fpzzF15sYHx~4Hs8JOD5lvZMXcZiQ2H-M1xEZtD4gNYPV3u-TOw__"
                    className=" h-11 w-11 rounded-full border-2 border-primary-500"
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-[#009383] text-xl font-semibold leading-normal">
                        Tuyết Anh
                      </p>
                      <ArrowDown />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-[#494949] text-base font-medium ">
                        250
                      </p>
                      <Coin />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center -ml-1">
          <img
            src="https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fheader_left.png&w=64&q=100"
            alt="Right decoration"
            className="h-[74px] scale-x-[-1]"
          />
        </div>
      </div>

      {/* Background image section */}
      <div className="w-[90%] mx-auto">
        <div className=" ">
          <div className="relative flex items-center justify-center -mt-[13px]">
            <SubNavBar />
            <div className="absolute top-6 flex items-center gap-8">
              <p className="text-[#494949] text-base font-bold uppercase">
                Cửa hàng
              </p>
              <p className="text-[#494949] text-base font-bold uppercase">
                Câu chuyện
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
