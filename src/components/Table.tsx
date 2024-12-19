import { FC } from "react";
import Status from "./Status";
import { Coin } from "./icon";

interface TableProps {
  type?: string;
}
const Table: FC<TableProps> = ({ type }) => {
  if (type === "history-Greecoin") {
    return (
      <div className="my-10">
        <div className="bg-primary-500 rounded-t-xl py-4 px-8 flex items-center justify-between">
          <div className="text-white text-2xl font-bold font-['Roboto']">
            THÁNG 11/2023
          </div>
          <div className="flex items-center gap-1">
            <p className="text-white text-xl font-medium ">+5000 | 3000</p>
            <Coin />
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-b-xl">
          <table className="w-full text-left border-spacing-y-2 border-separate ">
            <thead>
              <tr className="bg-[#E6F5F3] text-primary-500 ">
                <th className="p-2 rounded-l-lg">Thời gian</th>
                <th className="p-2">Giao dịch</th>
                <th className="p-2 text-right">Hoạt động</th>
                <th className="p-2 rounded-r-lg text-right">Số dư GreeCoin</th>
              </tr>
            </thead>
            <tbody className=" ">
              <tr className="bg-[#F6F6F680] text-[#666666]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Nạp tiền</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">+500</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">500</p>
                    <Coin />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F6F6F680] text-[#666666]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">-100</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">100</p>
                    <Coin />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F6F6F680] text-[#666666]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Nhận quyên góp</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">25</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">25</p>
                    <Coin />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F6F6F680] text-[#666666]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Bán sản phẩm</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">-100</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">100</p>
                    <Coin />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F6F6F680] text-[#666666]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">+500</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">500</p>
                    <Coin />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#F6F6F680] text-[#666666] ">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Đấu giá</td>
                <td className="p-2 text-right ">
                  <div className="flex items-center justify-end gap-1 ">
                    <p className="">+25</p>
                    <Coin />
                  </div>
                </td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <p className="">25</p>
                    <Coin />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="my-10">
        <div className="bg-primary-500 rounded-t-xl py-4 px-8 flex items-center justify-between">
          <div className="text-white text-2xl font-bold font-['Roboto']">
            THÁNG 11/2023
          </div>
          <div className="flex items-center gap-1">
            <p className="text-white text-xl font-medium ">+5000</p>
            <Coin />
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-b-xl">
          <table className="w-full text-left border-spacing-y-2 border-separate ">
            <thead>
              <tr className="bg-[#E6F5F3] text-primary-500 ">
                <th className="p-2 rounded-l-lg">Thời gian</th>
                <th className="p-2">Nội dung quyên góp</th>
                <th className="p-2 text-center">Trạng thái</th>
                <th className="p-2 rounded-r-lg text-right">
                  Số GreeCoin đã quyên góp
                </th>
              </tr>
            </thead>
            <tbody className=" ">
              <tr className="bg-[#F6F6F680]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Giải cứu thanh long ruột đỏ</td>
                <td className="p-2 text-center">
                  <Status type="success" />
                </td>
                <td className="p-2 text-right">50</td>
              </tr>
              <tr className="bg-[#F6F6F680]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-center">
                  <Status type="fail" />
                </td>
                <td className="p-2 text-right">500</td>
              </tr>
              <tr className="bg-[#F6F6F680]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-center">
                  <Status type="success" />
                </td>
                <td className="p-2 text-right">500</td>
              </tr>
              <tr className="bg-[#F6F6F680]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-center">
                  <Status type="success" />
                </td>
                <td className="p-2 text-right">500</td>
              </tr>
              <tr className="bg-[#F6F6F680]">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-center">
                  <Status type="success" />
                </td>
                <td className="p-2 text-right">500</td>
              </tr>
              <tr className="bg-[#F6F6F680] ">
                <td className="p-2">20:00 - 21/12/2023</td>
                <td className="p-2">Quyên góp đầm sen</td>
                <td className="p-2 text-center">
                  <Status type="fail" />
                </td>
                <td className="p-2 text-right">500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
