import { Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Banner from "../components/Banner";

interface UserRank {
  id: string;
  avatarPicture: string | null;
  name: string;
  nickName: string;
  userName: string;
  score: number;
  rank: number;
}

interface PageInfo {
  totalCount: number;
  pageSize: number;
  current: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

interface RankingData {
  pagedData: UserRank[];
  pageInfo: PageInfo;
}

const RankingBoard = () => {
  const [rankingData, setRankingData] = useState<UserRank[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalCount: 0,
    pageSize: 10,
    current: 1,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Lưu lại vị trí cuộn hiện tại
    const savedScrollPosition = window.scrollY;

    // Sau khi component render, phục hồi vị trí cuộn
    window.scrollTo(0, savedScrollPosition);
  }, []);
  useEffect(() => {
    const fetchRankingData = async () => {
      console.log(1);
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://greenfinity-api.altacloud.biz/api/Leaderboards/CollectingRank/Weekly?WeekId=70&current=${pageInfo.current}&total=0&totalPages=0&pageSize=10`
        );

        setRankingData(response.data.data.pagedData);
        setPageInfo(response.data.data.pageInfo);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, [pageInfo.current]);
  const handlePageChange = (page: number) => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      current: page,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" bg-teal-50 font-sans p-5 max-w-[1330px] mx-auto">
      <div className=" flex items-center gap-20 flex-wrap justify-center  ">
        {/* Cột bên trái */}
        <div className="">
          {rankingData
            .sort((a, b) => a.rank - b.rank) // Sắp xếp theo rank
            .slice(0, Math.ceil(rankingData.length / 2)) // Lấy 50% đầu tiên cho cột bên trái
            .map((user) => (
              //   <div
              //     key={user.id}
              //     className="relative w-[440px] bg-white rounded-lg shadow-lg p-4 flex items-center justify-between my-4 h-[60px] "
              //   >
              //     <div className="h-[60px] ml-1 -left-[40px] absolute top-1/2 transform -translate-y-1/2 border-y-[30px] border-y-transparent border-r-[40px] border-r-white"></div>
              //     <div className="flex items-center gap-6">
              //       <span className="rank-number text-xl font-semibold text-teal-600">
              //         {user.rank}
              //       </span>
              //       <div className=" overflow-hidden relative">
              //         <svg
              //           width="66"
              //           height="58"
              //           viewBox="0 0 83 76"
              //           fill="none"
              //           xmlns="http://www.w3.org/2000/svg"
              //         >
              //           <path
              //             d="M27.3667 0.872L55.831 0.928854C60.3096 0.935183 64.45 3.32565 66.6948 7.20105L80.9762 31.8235C83.221 35.6989 83.2341 40.466 81.0047 44.3274L66.8173 68.9006C64.588 72.762 60.4485 75.1419 55.9744 75.1279L27.51 75.071C23.0315 75.0647 18.891 72.6742 16.6463 68.7988L2.36487 44.1764C0.120101 40.301 0.106997 35.5339 2.33637 31.6725L16.5237 7.09929C18.7531 3.23789 22.8926 0.857995 27.3667 0.872Z"
              //             fill="#009383"
              //           />
              //         </svg>
              //         <div
              //           className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
              //           style={{
              //             clipPath:
              //               "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              //           }}
              //         >
              //           <img
              //             src={
              //               user.avatarPicture ||
              //               "https://via.placeholder.com/150"
              //             }
              //             alt={user.nickName || user.name}
              //             className=" w-full h-full object-cover"
              //           />
              //         </div>
              //       </div>
              //     </div>
              //     <div className="user-info flex items-center">
              //       <span className="user-name text-lg font-bold text-gray-800">
              //         {user.nickName || user.name}
              //       </span>
              //     </div>
              //     <span className="score text-xl font-semibold text-teal-600">
              //       {user.score}
              //     </span>
              //   </div>
              <UserCard
                id={user.id}
                rank={user.rank}
                avatarPicture={user.avatarPicture}
                nickName={user.nickName}
                name={user.name}
                score={user.score}
              />
            ))}
        </div>

        {/* Cột bên phải */}
        <div className="">
          {rankingData
            .sort((a, b) => a.rank - b.rank) // Sắp xếp theo rank
            .slice(Math.ceil(rankingData.length / 2)) // Lấy 50% còn lại cho cột bên phải
            .map((user) => (
              <UserCard
                id={user.id}
                rank={user.rank}
                avatarPicture={user.avatarPicture}
                nickName={user.nickName}
                name={user.name}
                score={user.score}
              />
            ))}
        </div>
      </div>
      <div className=" flex justify-center mt-5">
        <Pagination
          current={pageInfo.current}
          pageSize={pageInfo.pageSize}
          total={pageInfo.totalCount}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
export default RankingBoard;
