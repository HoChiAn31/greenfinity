import { FC } from 'react';

interface ItemPayProps {
	src: string;
	label: string;
	active?: boolean;
}

const ItemPay: FC<ItemPayProps> = ({ src, label, active }) => {
	return (
		<div>
			<div
				className={`flex h-[116px] w-[116px] cursor-pointer items-center justify-center rounded-lg border p-4 ${active ? 'border-primary-500' : 'border-gray-200'}`}
			>
				<img src={src} alt={label} className={`h-11 ${active ? 'text-primary-500' : ''}`} />
			</div>
			<p className={`ml-2 text-center text-base font-semibold ${active ? 'text-primary-500' : ''}`}>
				{label}
			</p>
		</div>
	);
};
export default ItemPay;
