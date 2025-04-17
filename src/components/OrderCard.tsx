import React from 'react';
import { Ship } from './icon';

interface OrderCardProps {
	imageUrl: string;
	title: string;
	category: string;
	quantity: number;
	status: string;
	totalPrice: number;
	onClick: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
	imageUrl,
	title,
	category,
	quantity,
	status,
	totalPrice,
	onClick,
}) => {
	return (
		<div className='my-3 inline-flex h-[222px] w-[1074px] flex-col items-end justify-start gap-3 overflow-hidden rounded-xl border bg-white p-3 shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)]'>
			<div className='inline-flex items-start justify-between self-stretch'>
				<div className='relative h-[130px] w-[441px]'>
					<div className='absolute left-0 top-0 h-[130px] w-[130px]'>
						<div className='absolute left-0 top-0 h-[130px] w-[130px] rounded-lg bg-[#eceef0]' />
						<img
							className='absolute left-0 top-0 h-[130px] w-[130px]'
							src={imageUrl}
							alt='Order Item'
						/>
					</div>
					<div className='absolute left-[142px] top-[12px] inline-flex flex-col items-start justify-start gap-4'>
						<div className='w-[299px] text-lg font-semibold leading-normal text-[#373737]'>
							{title}
						</div>
						<div className='inline-flex h-[27.53px] items-center justify-start gap-[3px] rounded-[20px] bg-[#dde6ff] px-2 py-1'>
							<div className='text-sm font-medium text-[#0084ff]'>{category}</div>
						</div>
						<div className='w-[180px]'>
							<span className='text-base font-normal leading-7 text-[#494949]'>Số lượng: </span>
							<span className='text-base font-semibold leading-7 text-[#006e62]'>{quantity}</span>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-start gap-1.5'>
					<Ship />
					<div className='text-base font-semibold leading-tight text-[#009383]'>{status}</div>
				</div>
			</div>
			<div className='flex h-14 flex-col items-end justify-start gap-3 self-stretch'>
				<div className='h-[0px] w-[1050px] border border-[#dbdbdb]'></div>
				<div className='inline-flex w-[1050px] items-center justify-between'>
					<div className='flex items-center justify-center gap-4'>
						<div
							onClick={onClick}
							className='flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#66beb5] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
						>
							<div className='text-lg font-semibold text-[#505050]'>Xem chi tiết</div>
						</div>
						<div className='flex h-11 w-[140px] items-center justify-center gap-2 rounded-lg border border-[#66beb5] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
							<div className='text-lg font-semibold text-[#505050]'>Đánh giá</div>
						</div>
						<div className='flex h-11 w-[140px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
							<div className='text-lg font-semibold text-white'>Mua lại</div>
						</div>
					</div>
					<div>
						<span className='text-xl font-medium leading-relaxed text-[#494949]'>Tổng tiền:</span>
						<span className='text-xl font-bold leading-relaxed text-[#009383]'>
							{totalPrice.toLocaleString()}đ
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
