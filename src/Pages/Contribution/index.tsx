const ContributionPage = () => {
  return (
    <div className="mb-10">
      <section className="">
        {/* banner */}
        <div className="flex items-center justify-center  ">
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
        <div className="flex items-center justify-center my-10">
          <img
            src="https://i.imgur.com/zUSfaK6.png"
            alt=""
            className="w-[787px] h-[545px]"
          />
        </div>
        <div className="text-center text-[#009383] text-[28px] font-extrabold uppercase ">
          Hành động nhỏ từ mỗi người, để bảo vệ hành tinh của chúng ta <br />
          Hãy tham gia xếp hạng bảo vệ môi trường ngay hôm nay !
        </div>
      </section>
    </div>
  );
};

export default ContributionPage;
