import { Button, ConfigProvider, Pagination, PaginationProps } from "antd";
import {
  Arrange,
  ArrowRightFromBracket,
  ClockClockwise,
  Coin,
  Edit,
  HandCoin,
  ToteSimple,
} from "../../components/icon";
import { useState } from "react";
import ItemVoucher from "../../components/ItemVoucher";
import NavigationLink from "../../components/NavigationLink";

const ProfilePage = () => {
  const [active, setActive] = useState<string>("wardrobe");
  const [wardrobe, setWardrobe] = useState(true);
  const handleSwitch = (value: string) => {
    setActive(value);
  };
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };
  return (
    <div>
      <section className="max-w-5xl mx-auto grid grid-cols-2 gap-8 ">
        <div className="">
          <img
            src="https://greenfinity.world/assets/images/avatar/bigMale1.png"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="">
            <div className=" text-[#009383] text-7xl font-bold leading-[85.67px]">
              Tuyết Anh
            </div>

            <div className="py-3">
              <NavigationLink
                iconLeft={<Edit />}
                style="button"
                content=" Chỉnh sửa thông tin"
                to="/editProfile"
                variant="outline"
              />
            </div>

            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-[442px] text-[#373737] text-base font-normal leading-tight">
                Tôi là người ham đọc sách, thích học hỏi và hướng ngoại. Tôi
                thích làm việc trong môi trường nghiêm túc và có thể phát triển
                sự nghiệp.
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 flex">
            <div>
              <p className="text-[#006e62] text-xl font-normal leading-normal">
                Thứ hạng hiện tại:{" "}
                <span className="text-[#ff0000] text-xl font-semibold leading-normal">
                  26
                </span>
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <p className="text-[#006e62] text-xl font-normal leading-normal">
                  Gree coin hiện có:{" "}
                </p>
                <div className="text-[#ff0000] text-xl font-semibold leading-normal flex items-center gap-1">
                  <p>5000</p> <Coin />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#006e62] text-xl font-normal leading-normal">
                Điểm đã chi tiêu tuần này:{" "}
                <span className="text-[#ff0000] text-xl font-semibold leading-normal">
                  0
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className=" space-y-3 my-3">
              <div className="grid grid-cols-2 gap-2 w-full">
                <NavigationLink
                  iconLeft={<HandCoin />}
                  content="Lịch sử quyên góp"
                  to="/donationHistoryPage"
                  style="button"
                />

                <NavigationLink
                  iconLeft={<ClockClockwise />}
                  content="Lịch sử tích điểm"
                  to="/greecoinHistory"
                  style="button"
                />
              </div>
              <NavigationLink
                iconLeft={<ToteSimple />}
                content="Lịch sản phẩm của bạn"
                to="/donationHistoryPage"
                style="button"
                className="justify-center"
              />
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#009383",
                  },
                }}
              >
                <Button
                  icon={<ArrowRightFromBracket />}
                  className="bg-transparent border-primary-500 text-primary-500 font-bold p-5 rounded-lg w-full"
                  variant="outlined"
                >
                  Đăng xuất
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="text-center text-[#15bdd6] text-2xl font-normal italic underline leading-[28.80px] tracking-tight">
          Thể lệ chương trình
        </div>
        <div className="max-w-[800px] mx-auto grid grid-cols-2 gap-4 my-5">
          <div className="flex items-center justify-center">
            <img src="https://i.imgur.com/9bhcE74.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="https://i.imgur.com/L8XiKAk.png" alt="" />
          </div>
        </div>
      </section>
      <section className="max-w-[1314px] mx-auto my-24">
        <div className=" relative flex items-center justify-center">
          <div className=" absolute top-0 -translate-y-1/2 text-center flex  justify-center items-center z-20 bg-primary-500 p-1 rounded-full gap-4 ">
            <button
              className={` font-bold rounded-full px-3 py-2  ${
                active === "wardrobe"
                  ? "bg-white text-primary-500"
                  : "text-white hover:opacity-80 "
              }`}
              onClick={() => handleSwitch("wardrobe")}
            >
              Tủ đồ của tôi
            </button>

            <button
              onClick={() => handleSwitch("voucher")}
              className={`rounded-full px-3 py-2 font-bold  cursor-pointer ${
                active === "voucher"
                  ? "bg-white text-primary-500"
                  : "text-white hover:opacity-80 "
              }`}
            >
              Voucher của tôi
            </button>
          </div>
          <div className="border-x border-primary-500 border-t h-28 w-[500px] rounded-t-3xl"></div>
        </div>
        {/*  */}
        <div className="mb-10">
          {active === "wardrobe" && (
            <div className="max-w-[1314px] mx-auto ">
              {wardrobe ? (
                <div className="border border-primary-500 w-full p-6 rounded-3xl ">
                  <div className="flex justify-end">
                    <div className="bg-primary-500 p-2 rounded-md w-10 flex items-center justify-center cursor-pointer hover:opacity-80">
                      <Arrange />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 py-6 gap-4">
                    <ItemVoucher type="voucherHunting" />
                    <ItemVoucher type="voucherHunting" />
                    <ItemVoucher type="voucherHunting" />
                    <ItemVoucher type="voucherHunting" />
                    <ItemVoucher type="voucherHunting" />
                    <ItemVoucher type="voucherHunting" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Pagination defaultCurrent={1} total={380} />
                  </div>
                </div>
              ) : (
                <div className="border border-primary-500 w-full p-6 rounded-3xl min-h-[300px] flex justify-center items-center">
                  <div className="h-[79px] flex-col justify-start items-center gap-2 inline-flex">
                    <div className="text-center text-[#33a99c] text-4xl font-bold">
                      Tủ đồ của bạn hiện đang trống
                    </div>
                    <div className="text-center text-[#6d6d6d] text-[22px] font-medium">
                      Vui lòng mua sắm để cập nhật tủ đồ của bạn
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {active === "voucher" && (
            <div className="max-w-[1314px] mx-auto ">
              <div className="border border-primary-500 w-full p-6 rounded-3xl flex justify-center items-center min-h-[300px]">
                <div className="h-[79px] flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-[#33a99c] text-4xl font-bold ">
                    Bạn đang chưa có voucher nào!
                  </div>
                  <div className="text-center text-[#6d6d6d] text-[22px] font-medium ">
                    Vui lòng tích điểm để đổi Voucher.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
