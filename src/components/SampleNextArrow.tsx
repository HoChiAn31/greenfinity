import { ArrowLeft } from './icon';

interface SampleNextArrowProps {
	className?: string;
	type?: 'week' | 'gift' | 'product' | 'story' | 'default';
	onClick?: () => void;
}

const SampleNextArrow = (props: SampleNextArrowProps) => {
	const { className, type, onClick } = props;
	if (type === 'week') {
		return (
			<div
				className={`absolute -right-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft className='rotate-180' />
			</div>
		);
	} else if (type === 'gift') {
		return (
			<div
				className={`absolute -right-36 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft className='rotate-180' />
			</div>
		);
	} else if (type === 'product') {
		return (
			<div
				className={`absolute -right-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft className='rotate-180' />
			</div>
		);
	} else if (type === 'story') {
		return (
			<div
				className={`absolute right-10 top-[40%] z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft className='rotate-180' />
			</div>
		);
	}
	return (
		<div
			className={`absolute right-10 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
			onClick={onClick}
		>
			<ArrowLeft className='rotate-180' />
		</div>
	);
};

export default SampleNextArrow;
