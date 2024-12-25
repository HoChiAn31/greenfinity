import { Button } from 'antd';
import React from 'react';
import { Cart, Leaf } from './icon';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
	productImage: string;
	category: string;
	title: string;
	price: string;
	color?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	productImage,
	category,
	title,
	price,
	color = '#0085FF',
}) => {
	const navigate = useNavigate();
	const SwitchStoreDetail = () => {
		navigate('/storeDetail');
	};
	return (
		<div
			className='relative w-[301px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow'
			onClick={SwitchStoreDetail}
		>
			<div
				className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-cover bg-center'
				style={{
					backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2F937213862ce1b55397e8dff627d1b647.png?alt=media&token=3f5534b3-5bf3-424a-bd37-f999a70b20fe")`,
					backgroundSize: 'contain',
					backgroundPosition: 'left',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
				}}
			></div>
			<div className='absolute right-4 top-4 cursor-pointer'>
				<Cart />
			</div>
			<div className=''>
				<div className='flex items-center justify-center'>
					<img src={productImage} alt={title} className='h-[208px] w-[277px]' />
				</div>

				<div className='-mt-10 p-4'>
					<div className='rounded-2xl border p-4'>
						<div className='flex max-w-[124px] items-center gap-2 rounded-3xl bg-[#DDE7FF] px-3 py-1'>
							<Leaf color={color} />
							<p className={`font-medium text-[${color}]`}>{category}</p>
						</div>
						<div>
							<p className='font-semibold text-gray-600'>{title}</p>
						</div>
						<div>
							<p className='text-xl font-extrabold text-primary-500'>{price}</p>
						</div>
						<Button className='w-full bg-primary-500 text-white'>Mua ngay</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
