import { Button, Input } from 'antd';
import { Images } from './icon';

const Post = () => {
	return (
		<div className='my-5 mt-6 rounded-3xl bg-white shadow-md'>
			<div className='flex items-center gap-2 p-4'>
				<img
					src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
					alt='User avatar'
					className='h-10 w-10 rounded-full border border-gray-200'
				/>
				<div>
					<h2 className='font-bold'>Tuyết Anh</h2>
					<p className='text-sm text-gray-500'>1 ngày</p>
				</div>
			</div>
			<div className='px-4 pb-4'>
				<p className='mb-4 text-base text-gray-800'>
					CHƯƠNG TRÌNH THÁNG 10 TIẾP TỤC VẬN ĐỘNG XIN 55 PHẦN QUÀ THĂM CÁC CỤ GIÀ BỊNH BỆNH TẬT NEO
					ĐƠN HẰNG THÁNG. CŨNG LÀ KẾT THÚC CHƯƠNG TRÌNH THÁNG 9 XIN CẢM ƠN CÔ CHÚ ANH CHỊ EM QUÝ MTQ
					CÁC THÀNH VIÊN NHÓM LUÔN ỦNG HỘ ĐỒNG HÀNH
				</p>
				<div className='grid grid-cols-2 gap-2'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/640px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg'
						alt='Capybara 1'
						className='h-auto w-full rounded-lg'
					/>
					<img
						src='https://preview.redd.it/capybaras-are-highly-social-animals-forming-family-units-of-v0-71zs4jyy4rtb1.jpg?width=640&crop=smart&auto=webp&s=f7ce24f1c215a367b9ef8024a6a04c534b2dccf4'
						alt='Capybara 2'
						className='h-auto w-full rounded-lg'
					/>
					<img
						src='https://wildexpedition.com/wp-content/uploads/2023/09/capybara-pantanal-wildlife-2.jpg.webp'
						alt='Capybara 3'
						className='h-auto w-full rounded-lg'
					/>
					<div className='relative'>
						<img
							src='https://www.savacations.com/wp-content/uploads/2021/02/Blog-Capybara-Pantanal-Brazil3.jpg'
							alt='Capybara 4'
							className='h-auto w-full rounded-lg'
						/>
						<div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50'>
							<span className='text-lg font-bold text-white'>+4</span>
						</div>
					</div>
				</div>
				<Button className='primary mt-4 w-full rounded-lg border-none bg-primary-500 py-5 text-xl font-bold text-white hover:opacity-50'>
					<p className='py-2'>Quyên góp ngay</p>
				</Button>
			</div>
			<div className='border-t border-gray-200 px-4 py-2'>
				<p className='font-bold text-gray-600'>Xem thêm (56) bình luận</p>
				<div className='relative mt-2'>
					{/* Bình luận chính */}
					<div className='relative mb-2 flex items-start gap-2'>
						<img
							src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
							alt='User avatar'
							className='h-8 w-8 rounded-full border border-gray-200'
						/>
						<div>
							<div className='max-w-[70%] rounded-xl bg-[#F9F9F9] shadow'>
								<div className='p-2 text-gray-800'>
									<p className='font-bold'>Tuyết Anh</p>
									<p>
										Tôi đồng ý với tất cả điều khoản và thể lệ tham gia. Nền tảng và thương hiệu
										được phép sử dụng thông tin cá nhân tôi đã cung cấp.
									</p>
								</div>
							</div>
							<div className='pt-1'>
								<p className='text-sm text-gray-300'>
									12 giờ trước{' '}
									<span className='ml-2 cursor-pointer font-semibold text-gray-500'>Thích</span>{' '}
									<span className='ml-2 cursor-pointer font-semibold text-gray-500'>Phản hồi</span>
								</p>
							</div>
						</div>
					</div>

					<svg
						className='absolute left-4 top-9'
						width='31'
						height='101'
						viewBox='0 0 31 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M1 0V82C1 91.9411 9.05888 100 19 100H31' stroke='#DBDBDB' />
					</svg>

					{/* Bình luận hồi */}
					<div className='relative flex items-start gap-2 pl-10'>
						<img
							src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
							alt='User avatar'
							className='h-8 w-8 rounded-full border border-gray-200'
						/>
						<div>
							<div className='max-w-[100%] rounded-xl bg-[#F9F9F9] shadow'>
								<div className='p-2 text-gray-800'>
									<p className='font-bold'>Tuyết Anh</p>
									<p>Tôi đồng ý với tất cả điều khoản và thể lệ tham gia</p>
								</div>
							</div>
							<p className='pt-1 text-sm text-gray-500'>
								12 giờ trước <span className='ml-2 cursor-pointer text-blue-500'>Thích</span>{' '}
								<span className='ml-2 cursor-pointer text-blue-500'>Phản hồi</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			<div className='rounded-3xl bg-white p-4'>
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
			</div>
		</div>
	);
};
export default Post;
