import { Button, Input } from 'antd';
import { Images, List, Search } from '../../components/icon';
import Post from '../../components/Post';

const ForumPage = () => {
	return (
		<div className='mx-auto max-w-[1071px] py-5'>
			<div className='text-center text-[64px] font-bold uppercase leading-[76.80px] text-[#009383]'>
				Diễn đàn
			</div>
			<div className='flex items-center gap-2 py-5'>
				<Input
					className='rounded-full py-2'
					placeholder='Tìm kiếm trên diễn đàn'
					prefix={<Search />}
				/>
				<div className='flex w-[22%] gap-2 rounded-full border border-[#15BDD7] bg-[#E3FBFF] px-2 py-1'>
					<List />
					<p className='text-lg font-bold text-gray-700'>Danh sách quỹ</p>
				</div>
			</div>
			<div className='rounded-3xl bg-white p-4 shadow'>
				<div className='flex gap-2'>
					<img
						src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
						className='h-11 w-11 rounded-full border border-gray-200'
					/>
					<Input
						className='rounded-full border-none bg-[#F9F9F9] py-2'
						placeholder='Anh ơi, bạn đang nghĩ gì thế?'
						suffix={<Images />}
					/>
				</div>
				<div className='mt-3 border-t border-gray-100 py-3'>
					<Button className='primary w-full border-none bg-primary-500 py-5 text-xl font-bold text-white hover:opacity-80'>
						Đăng
					</Button>
				</div>
			</div>
			{/* Post */}
			<Post />
			<Post />
		</div>
	);
};

export default ForumPage;
