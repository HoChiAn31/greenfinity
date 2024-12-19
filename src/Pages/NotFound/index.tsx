import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center">
        <div>
          <div className="text-[#009383] text-[64px] font-extrabold font-['Roboto'] leading-[108px]">
            404 Error.
          </div>
          <div className="text-[#373737] text-2xl font-bold font-['Roboto']">
            We couldn’t connect to this page.
          </div>
          <div className="py-2 w-[505px] text-[#373737] text-base font-normal font-['Roboto'] leading-normal">
            Looks like something is disconnected. The page you requested was not
            found, but there are several ways to get you back on the right
            track. You can go back to the previous page , or visit our home
            page.
          </div>
          <button
            onClick={handleGoHome}
            className="w-[210px] mt-4 h-12 px-6 py-2.5 bg-[#15bdd6] rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <div className="text-white text-lg font-bold ">Về trang chủ</div>
          </button>
        </div>
        <img src="https://i.imgur.com/pT5kk4H.png" alt="404" />
      </div>
    </div>
  );
};

export default NotFound;
