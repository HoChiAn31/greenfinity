import Table from "../../components/Table";

function GreecoinHistoryPage() {
  return (
    <div>
      <div className="max-w-[1071px] mx-auto">
        <div className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
          Lịch sử Greecoin
        </div>
        <Table type="history-Greecoin" />
        <Table type="history-Greecoin" />
        <Table type="history-Greecoin" />
      </div>
    </div>
  );
}

export default GreecoinHistoryPage;
