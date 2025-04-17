import { FC } from 'react';
import { BarCode, Filter } from '../../../components/icon';

interface ProductCardProps {
	imageSrc: string;
	category: string;
	title: string;
	onViewDetails: () => void;
}
const ProductCard: FC<ProductCardProps> = ({ imageSrc, category, title, onViewDetails }) => {
	return (
		<div className='flex h-[336px] w-[345px] flex-col items-start justify-between rounded-2xl bg-white p-3 shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)]'>
			<div className='flex h-[168px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#eceef0]'>
				<img className='h-[168px]' src={imageSrc} alt={title} />
			</div>

			<div className='mt-2 flex w-full flex-col items-center justify-start gap-3'>
				<div className='flex w-full flex-col items-start justify-start gap-3'>
					<div className='flex h-[27.53px] items-center justify-start gap-[3px] rounded-[20px] bg-[#dde6ff] px-2 py-1'>
						<span className='text-sm font-medium text-[#0084ff]'>{category}</span>
					</div>
					<h2 className='w-[252px] text-xl font-semibold uppercase text-[#494949]'>{title}</h2>
				</div>

				{/* Button */}
				<button
					className='flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
					onClick={onViewDetails}
				>
					<span className='text-lg font-bold text-[#009383]'>Xem chi tiết</span>
				</button>
			</div>
		</div>
	);
};
const MyOrderPage = () => {
	const handleViewDetails = () => {
		alert('Xem chi tiết sản phẩm!');
	};
	return (
		<div className='mb-20 space-y-5'>
			<div className='inline-flex w-full items-start justify-between'>
				<div className='inline-flex h-[52px] flex-col items-center justify-center rounded-[10px] bg-[#009383] px-4 py-[5px]'>
					<div className='inline-flex items-center justify-start gap-2'>
						<BarCode />
						<div className='text-base font-semibold leading-tight text-white'>
							Hướng dẫn định danh
						</div>
					</div>
				</div>
				<div className='flex h-[52px] items-center justify-center gap-2 rounded-md bg-[#f0f0f0] px-3 py-2'>
					<div className='text-base font-semibold text-[#494949]'>Lọc</div>
					<Filter />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
				<ProductCard
					imageSrc='https://i.imgur.com/IYl2dP5.png'
					category='Art toy'
					title='Multipurpose container Shark'
					onViewDetails={handleViewDetails}
				/>
			</div>
		</div>
	);
};

export default MyOrderPage;
