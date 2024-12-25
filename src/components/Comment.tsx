import { Rate } from 'antd';
import { Leaf, Like } from './icon';

function Comment({ isBorder }: { isBorder?: boolean }) {
	return (
		<div className={`relative my-5 py-5 ${isBorder ? 'border-y border-[#b6b6b6]' : ''}`}>
			<div className='flex gap-4'>
				<div>
					<div className='rounded-full bg-primary-500'>
						<img
							className='h-14 w-14 rounded-full border border-primary-500 shadow-[inset_0px_0px_100px_0px_rgba(255,255,255,0.50)]'
							src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
						/>
					</div>
				</div>

				<div className='flex w-[90%] flex-col items-start justify-start space-y-1'>
					<div className='text-lg font-bold text-[#006e62]'>Hoài An</div>
					<Rate allowHalf defaultValue={4.5} />
					<div className='inline-flex h-7 items-center justify-start gap-2'>
						<div className='border-r-2 pr-3 text-base font-normal leading-none text-[#494949]'>
							12/02/2023 16:49
						</div>
						<div className='flex items-center justify-start gap-2'>
							<div className='text-base font-normal leading-none text-[#494949]'>
								Phân loại hàng:
							</div>
							<div className='flex items-center justify-start gap-[3px] rounded-[20px] bg-[#f4ddff] px-2 py-1'>
								<Leaf color='#9644ff' />
								<div className='text-sm font-medium text-[#9644ff]'>Household</div>
							</div>
						</div>
					</div>
					{/* content */}
					<div className='text-base font-normal text-[#121212]'>
						Thời gian vận chuyển rất hợp lí. Tôi đã đặt hàng với tâm thế hào hứng chờ đợi để được
						trải nghiệm sản phẩm và tôi không hề bị chờ mỏi cổ. Có thể thấy bên vận chuyển không
						quản ngại thời tiết và đường xá xa xôi để đưa sản phẩm cho tôi trong thời gian ngắn
						nhất.
					</div>
					{/* image */}
					<div className='flex gap-4'>
						<div className='relative flex h-16 w-20 items-center justify-center rounded border border-[#009383] bg-white'>
							<img className='h-16 w-16' src='https://i.imgur.com/yVQ7pR9.png' />
						</div>
						<div className='relative flex h-16 w-20 items-center justify-center rounded border border-[#009383] bg-white'>
							<img className='h-16 w-16' src='https://i.imgur.com/yVQ7pR9.png' />
						</div>
						<div className='relative flex h-16 w-20 items-center justify-center rounded border border-[#009383] bg-white'>
							<img className='h-16 w-16' src='https://i.imgur.com/yVQ7pR9.png' />
						</div>
					</div>

					<div className='inline-flex cursor-pointer items-center justify-start gap-2 pt-2'>
						<Like />
						<div className="font-['Roboto'] text-base font-medium text-[#006e62]">Thích</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comment;
