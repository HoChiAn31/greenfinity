import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Checkbox, ConfigProvider, Modal, message } from 'antd';
import { useState } from 'react';
import { Leaf, Minus, Plus, Trash } from '../../components/icon';

interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
	isHousehold: boolean;
}

const sampleProducts: Product[] = [
	{
		id: 1,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: true,
	},
	{
		id: 2,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: false,
	},
	{
		id: 3,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: true,
	},
	{
		id: 4,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: false,
	},
	{
		id: 5,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: true,
	},
	{
		id: 6,
		name: 'Multipurpose container Shark',
		price: 800000,
		quantity: 2,
		image: 'https://i.imgur.com/IYl2dP5.png',
		isHousehold: false,
	},
];

function CartPage() {
	const [products, setProducts] = useState<Product[]>(sampleProducts);
	const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleCheckboxChange = (id: number, isChecked: boolean) => {
		setSelectedProducts((prevSelected) =>
			isChecked ? [...prevSelected, id] : prevSelected.filter((productId) => productId !== id),
		);
	};

	const handleSelectAll = (isChecked: boolean) => {
		setSelectedProducts(isChecked ? products.map((product) => product.id) : []);
	};

	const handleQuantityChange = (id: number, delta: number) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id
					? { ...product, quantity: Math.max(product.quantity + delta, 1) } // Không cho phép số lượng nhỏ hơn 1
					: product,
			),
		);
	};
	const handleDeleteProduct = (id: number) => {
		setIsModalOpen(false);
		setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
		message.success('Sản phẩm đã được xóa thành công!');
	};
	const isAllSelected = selectedProducts.length === products.length;

	const totalPrice = products
		.filter((product) => selectedProducts.includes(product.id))
		.reduce((total, product) => total + product.price * product.quantity, 0);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const modalStyles = {
		header: {
			textAlign: 'center' as 'center',
		},
		title: {
			color: '#494949',
		},
		footer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '20px',
		},
	};
	return (
		<div className='mx-auto max-w-[1280px] py-5 2xl:max-w-[1400px]'>
			<div className='pb-2 text-[32px] font-semibold text-[#006e62]'>Giỏ hàng</div>
			<div className='flex items-start gap-5'>
				<div className='relative w-full'>
					<table className='w-full border-separate border-spacing-y-3'>
						<thead className='rounded-xl bg-white shadow-[0px_0px_7px_0px_rgba(0,0,0,0.17)]'>
							<tr className=''>
								<th className='space-x-2 rounded-s-xl px-4 py-2 text-left'>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Checkbox
											onChange={(e) => handleSelectAll(e.target.checked)}
											checked={isAllSelected}
										>
											<p className='text-lg font-normal leading-normal text-black'>
												Tất cả sản phẩm
											</p>
										</Checkbox>
									</ConfigProvider>
								</th>

								<th className='px-4 py-2 text-left text-lg font-normal leading-normal text-black'>
									Đơn giá
								</th>
								<th className='px-4 py-2 text-center text-lg font-normal leading-normal text-black'>
									Số lượng
								</th>
								<th className='px-4 py-2 text-center text-lg font-normal leading-normal text-black'>
									Thành tiền
								</th>
								<th className='rounded-e-xl px-4 py-2 text-right text-lg font-normal leading-normal text-black'>
									<div className='flex items-center justify-end'>
										<div className='flex h-8 w-8 items-center justify-center'>
											<Trash />
										</div>
									</div>
								</th>
							</tr>
						</thead>
						<tbody className='t-10'>
							{products.map((product) => (
								<tr
									key={product.id}
									className='rounded-xl bg-white shadow-[0px_0px_7px_0px_rgba(0,0,0,0.17)]'
								>
									<td className='flex items-center gap-4 rounded-s-xl px-4 py-2 text-left'>
										<ConfigProvider
											theme={{
												token: {
													colorPrimary: '#009383',
												},
											}}
										>
											<Checkbox
												checked={selectedProducts.includes(product.id)}
												onChange={(e) => handleCheckboxChange(product.id, e.target.checked)}
											/>
										</ConfigProvider>

										<div className='flex h-[136px] w-[101px] flex-col items-center justify-center overflow-hidden rounded-xl bg-[#eceef0]'>
											<img className='h-[136px] w-[101px]' src={product.image} />
										</div>
										<div>
											<p className='text-lg font-semibold leading-normal text-black'>
												{product.name}
											</p>
											<p className='text-xs font-normal leading-normal text-gray-400'>
												{product.isHousehold ? (
													<div className='inline-flex h-7 items-center justify-start gap-[3px] rounded-[20px] bg-[#f4ddff] px-2 py-1'>
														<Leaf color='#9644ff' />
														<div className='text-sm font-medium text-[#9644ff]'>Household</div>
													</div>
												) : (
													<div className='inline-flex h-7 items-center justify-start gap-[3px] rounded-[20px] bg-[#dde6ff] px-2 py-1'>
														<Leaf />
														<div className='text-sm font-medium text-[#0084ff]'>Art toy</div>
													</div>
												)}
											</p>
										</div>
									</td>

									<td className='text-xl font-semibold leading-relaxed text-primary-500'>
										{product.price.toLocaleString()}đ
									</td>
									<td className='text-center'>
										<div className='flex items-center justify-center'>
											<div
												className='cursor-pointer rounded-s border-y border-l border-[#929292] p-2'
												onClick={() => handleQuantityChange(product.id, -1)}
											>
												<Minus height={16} width={16} />
											</div>
											<p className='border-y border-[#929292] px-2 py-1'>{product.quantity}</p>
											<div
												className='cursor-pointer rounded-e border-y border-r border-[#929292] p-2'
												onClick={() => handleQuantityChange(product.id, 1)}
											>
												<Plus height={16} width={16} />
											</div>
										</div>
									</td>
									<td className='text-center text-xl font-semibold leading-relaxed text-primary-500'>
										{(product.price * product.quantity).toLocaleString()}đ
									</td>
									<td className='rounded-e-xl px-4 py-2 text-right'>
										<Button
											danger
											icon={<Trash />}
											// onClick={() => handleDeleteProduct(product.id)}
											onClick={showModal}
											className='border-none bg-transparent shadow-none'
										></Button>
									</td>
									<Modal
										title='Bán có muốn xóa sản phẩm này không?'
										open={isModalOpen}
										centered
										onOk={handleOk}
										onCancel={handleCancel}
										closable={false}
										styles={modalStyles}
										footer={[
											<Button
												key='cancel'
												onClick={handleCancel}
												className='border-none bg-[#F0F0F0] px-6 py-2'
											>
												Hủy
											</Button>,
											<Button
												key='ok'
												onClick={() => handleDeleteProduct(product.id)}
												className='border-none bg-primary-500 px-6 py-2 text-white'
											>
												Xóa
											</Button>,
										]}
									></Modal>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* right */}
				<div className='mt-3 space-y-5'>
					<div className='relative w-[342px] rounded-xl bg-white p-5 shadow'>
						<div className='flex items-center justify-between'>
							<div className='text-base font-normal text-[#494949]'>Tạm tính</div>
							<div className='text-right text-base font-normal text-[#494949]'>
								{totalPrice.toLocaleString()} VND
							</div>
						</div>
						<div className='my-5 border border-[#b6b6b6]'></div>
						<div className='flex items-center justify-between'>
							<div className='text-right text-base font-semibold text-[#494949]'>Tổng cộng:</div>
							<div className='text-right text-xl font-bold text-[#009383]'>
								{totalPrice.toLocaleString()} VND
							</div>
						</div>
					</div>
					<div className='flex h-12 w-[342px] items-center justify-center gap-2 rounded-lg bg-[#009383] px-6 py-2.5'>
						<div className='text-base font-bold text-white'>Mua ngay</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
