import { Coin } from "../../components/icon";
import Table from "../../components/Table";

const DonationHistoryPage = () => {
  return (
    <div>
      <div className="max-w-[1071px] mx-auto">
        <div className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
          Quyên góp của tôi
        </div>
        <Table />
        <Table />
        <Table />
      </div>
    </div>
  );
};

export default DonationHistoryPage;
