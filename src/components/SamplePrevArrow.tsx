import { ArrowLeft } from './icon';

interface SamplePrevArrowProps {
	className?: string;
	type?: 'week' | 'gift' | 'product' | 'story' | 'default';
	onClick?: () => void;
}
const SamplePrevArrow = (props: SamplePrevArrowProps) => {
	const { className, type, onClick } = props;
	if (type === 'week') {
		return (
			<div
				className={`absolute -left-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	} else if (type === 'gift') {
		return (
			<div
				className={`absolute -left-36 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	} else if (type === 'product') {
		return (
			<div
				className={`absolute -left-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	} else if (type === 'story') {
		return (
			<div
				className={`absolute left-10 top-[40%] z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	}
	return (
		<div
			className={`absolute left-10 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${className}`}
			onClick={onClick}
		>
			<ArrowLeft />
		</div>
	);
};

export default SamplePrevArrow;
