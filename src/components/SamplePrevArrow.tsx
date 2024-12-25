import { ArrowLeft } from './icon';

interface SamplePrevArrowProps {
	className?: string;
	type?: 'week' | 'gift' | 'product' | 'default';
	onClick?: () => void;
}
const SamplePrevArrow = (props: SamplePrevArrowProps) => {
	const { className, type, onClick } = props;
	if (type === 'week') {
		return (
			<div
				className={`absolute -left-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	} else if (type === 'gift') {
		return (
			<div
				className={`absolute -left-36 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	} else if (type === 'product') {
		return (
			<div
				className={`absolute -left-16 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white ${className}`}
				onClick={onClick}
			>
				<ArrowLeft />
			</div>
		);
	}
	return (
		<div
			className={`absolute left-10 top-1/2 z-[100] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white ${className}`}
			onClick={onClick}
		>
			<ArrowLeft />
		</div>
	);
};

export default SamplePrevArrow;
