import React from "react";

interface UserCardProps {
  id: string | number;
  rank: number;
  avatarPicture?: string | null;
  nickName?: string;
  name: string;
  score: number;
}

// interface UserCardProps {
//   user: User;
// }

const UserCard: React.FC<UserCardProps> = ({
  id,
  rank,
  avatarPicture,
  nickName,
  name,
  score,
}) => {
  // List of fallback images
  const fallbackImages = [
    "https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359099692397022_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1734364374%26Signature%3DQae%252FAWFeVkVcD9%252FCcqQvRa6ktI0%253D&w=96&q=75",
    "https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638352991532744990_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1734364374%26Signature%3DZWfKyqVmsy6XlQmpjZNl8tvU3V0%253D&w=96&q=75",
    "https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638646567900102727_files.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1734364374%26Signature%3DmdeKq1G2b1yz5x2q%252FjnX6yGmyK8%253D&w=96&q=75",
    "https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638625320742529769_files.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1734351987%26Signature%3DyzYZVspM2wBr4kLHOC4BW%252Bw3PtU%253D&w=96&q=75",
    "https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FbigMale1.png&w=96&q=75",
  ];

  // Randomly select a fallback image if avatarPicture is null or undefined
  const avatarUrl =
    avatarPicture ||
    fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

  return (
    <div
      key={id}
      className="relative w-[440px] bg-white rounded-lg shadow-lg pl-4 py-4 flex items-center justify-between my-4 h-[60px]"
    >
      <div className="h-[60px] ml-1 -left-[26px] absolute top-1/2 transform -translate-y-1/2 border-y-[30px] border-y-transparent border-r-[28px] border-r-white"></div>
      <div className="flex items-center gap-6">
        <span className="rank-number text-xl font-semibold text-teal-600 w-5">
          {rank}
        </span>
        <div className="overflow-hidden relative">
          <svg
            width="66"
            height="58"
            viewBox="0 0 83 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3667 0.872L55.831 0.928854C60.3096 0.935183 64.45 3.32565 66.6948 7.20105L80.9762 31.8235C83.221 35.6989 83.2341 40.466 81.0047 44.3274L66.8173 68.9006C64.588 72.762 60.4485 75.1419 55.9744 75.1279L27.51 75.071C23.0315 75.0647 18.891 72.6742 16.6463 68.7988L2.36487 44.1764C0.120101 40.301 0.106997 35.5339 2.33637 31.6725L16.5237 7.09929C18.7531 3.23789 22.8926 0.857995 27.3667 0.872Z"
              fill="#009383"
            />
          </svg>
          <div
            className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <img
              src={avatarUrl}
              alt={nickName || name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="user-info flex items-center">
          <span className="user-name text-lg font-bold text-gray-800">
            {nickName || name}
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="h-[60px] ml-1 -left-[32px] absolute top-1/2 transform -translate-y-1/2 border-y-[30px] border-y-transparent border-r-[28px] border-r-primary-500"></div>
        <p className=" text-xl py-4 px-8 font-semibold text-white bg-primary-500 ">
          {score}
        </p>
        <div className="h-[60px] ml-1 -right-[28px] absolute top-1/2 transform -translate-y-1/2 border-y-[30px] border-y-transparent border-l-[28px] border-l-primary-500"></div>
      </div>
    </div>
  );
};

export default UserCard;
