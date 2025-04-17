import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
import OrderCard from '../../../components/OrderCard';
import { ArrowLeft, ShipOrder } from '../../../components/icon';

const OrderPage = () => {
	const [activeTab, setActiveTab] = useState('Tất cả đơn');
	const [isProduct, setIsProduct] = useState(true);
	const orderData = [
		{
			id: 1,
			imageUrl: 'https://i.imgur.com/IYl2dP5.png',
			title: 'Multipurpose container Shark',
			category: 'Art toy',
			quantity: 1,
			status: 'Đơn hàng đang được giao',
			totalPrice: 800000,
		},
		{
			id: 2,
			imageUrl: 'https://i.imgur.com/IYl2dP5.png',
			title: 'Multipurpose container Shark',
			category: 'Home decor',
			quantity: 2,
			status: 'Đơn hàng đã giao',
			totalPrice: 150000,
		},
		{
			id: 3,
			imageUrl: 'https://i.imgur.com/IYl2dP5.png',
			title: 'Multipurpose container Shark',
			category: 'Electronics',
			quantity: 1,
			status: 'Đơn hàng đang được xử lý',
			totalPrice: 500000,
		},
	];

	const tabs = [
		{ label: 'Tất cả đơn', value: 'all' },
		{ label: 'Đang xử lý', value: 'processing' },
		{ label: 'Đang vận chuyển', value: 'shipping' },
		{ label: 'Đã giao', value: 'delivered' },
		{ label: 'Đã hủy', value: 'cancelled' },
	];
	if (isProduct) {
		return (
			<div className='pb-40'>
				<div className='inline-flex h-16 w-[1074px] items-center justify-between overflow-hidden rounded-xl bg-white px-3.5 py-5'>
					<div
						className='flex cursor-pointer items-center justify-start gap-1'
						onClick={() => setIsProduct(false)}
					>
						{/* <div className='relative h-6 w-6 overflow-hidden' /> */}
						<ArrowLeft />
						<div className='text-right text-base font-normal leading-tight text-[#494949]'>
							Quay lại đơn hàng
						</div>
					</div>
					<div className='text-right'>
						<span className='text-lg font-medium leading-snug text-[#494949]'>
							Mã đơn hàng #992659404 |{' '}
						</span>
						<span className='text-lg font-medium leading-snug text-[#009383]'>
							Đơn hàng đang được giao
						</span>
					</div>
				</div>
				<div className='inline-flex h-[180px] w-[1074px] items-stretch justify-start gap-6'>
					<div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4'>
						<div className='text-base font-medium uppercase leading-tight text-[#494949]'>
							thông tin người nhận
						</div>
						<div className='inline-flex items-center justify-start overflow-hidden rounded-xl border bg-white pb-[42px] pl-4 pr-5 pt-5'>
							<div className='inline-flex flex-col items-start justify-start gap-3 self-stretch'>
								<div className='text-[15px] font-bold leading-[21px] text-[#373737]'>KHẮC HUY</div>
								<div className='w-[306px] text-[15px] font-normal leading-[21px] text-[#494949]'>
									Địa chỉ: Alta Media 220/54 Âu Cơ, Phường 09, Quận Tân Bình, Hồ Chí Minh, Việt Nam
								</div>
								<div className="font-['Montserrat'] text-[15px] font-normal leading-[21px] text-[#494949]">
									Điện thoại: 0978603870
								</div>
							</div>
						</div>
					</div>
					<div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-4'>
						<div className='text-base font-medium uppercase leading-tight text-[#494949]'>
							Hình thức giao hàng
						</div>
						<div className='inline-flex items-center justify-start overflow-hidden rounded-xl border bg-white pb-6 pl-4 pr-16 pt-5'>
							<div className='inline-flex flex-col items-start justify-start gap-3 self-stretch'>
								<div className='inline-flex items-center justify-start gap-1.5'>
									<ShipOrder />
									<div className='text-[15px] font-bold leading-[21px] text-[#373737]'>
										Giao Siêu Tốc
									</div>
								</div>
								<div className='text-[15px] font-normal leading-[21px] text-[#494949]'>
									Giao đúng chiều thứ 3, 14h - 18h, 12/09
								</div>
								<div className='text-[15px] font-normal leading-[21px] text-[#494949]'>
									Được giao bởi GHTK
								</div>
								<div className='text-[15px] font-normal leading-[21px] text-[#494949]'>
									Miễn phí vận chuyển
								</div>
							</div>
						</div>
					</div>
					<div className='inline-flex w-full shrink grow basis-0 flex-col items-start justify-start gap-4'>
						<div className='text-base font-medium uppercase leading-tight text-[#494949]'>
							Hình thức giao hàng
						</div>
						<div className='inline-flex h-[144px] w-full items-center justify-start rounded-xl border bg-white pb-[109px] pl-4 pt-5'>
							<div className='text-[15px] font-normal leading-[21px] text-[#494949]'>
								Thanh toán khi nhận hàng
							</div>
						</div>
					</div>
				</div>
				<div className='relative my-5 h-auto w-[1074px] overflow-hidden rounded-xl bg-white'>
					<div className='flex h-[60px] items-center rounded-t-xl bg-[#009383] px-6 text-white'>
						<div className='flex-1 text-lg font-semibold'>Tên sản phẩm</div>
						<div className='flex flex-[3] justify-around'>
							<div className='text-center text-lg font-semibold'>Số lượng</div>
							<div className='text-center text-lg font-semibold'>Giá</div>
							<div className='text-center text-lg font-semibold'>Giảm giá</div>
							<div className='text-center text-lg font-semibold'>Thành tiền</div>
						</div>
					</div>
					<table className='w-full border-collapse border border-[#dbdbdb]'>
						<tbody>
							<tr className='border-b border-[#dbdbdb]'>
								<td className='flex items-center gap-4 p-4'>
									<img className='h-[107px] w-[122px]' src='https://via.placeholder.com/122x107' />
									<div>
										<div className='text-lg font-semibold text-[#373737]'>
											Multipurpose container Shark
										</div>
										<div className='text-base text-[#505050]'>Phân loại: Trắng | S</div>
									</div>
								</td>
								<td className='text-center text-lg text-[#494949]'>1</td>
								<td className='text-center text-lg text-[#494949]'>800.000đ</td>
								<td className='text-center text-lg text-[#494949]'>0đ</td>
								<td className='text-center text-lg text-[#494949]'>800.000đ</td>
							</tr>
							<tr className='border-b border-[#dbdbdb]'>
								<td className='flex items-center gap-4 p-4'>
									<img className='h-[107px] w-[122px]' src='https://via.placeholder.com/122x107' />
									<div>
										<div className='text-lg font-semibold text-[#373737]'>
											Multipurpose container Shark
										</div>
										<div className='text-base text-[#505050]'>Phân loại: Trắng | S</div>
									</div>
								</td>
								<td className='text-center text-lg text-[#494949]'>1</td>
								<td className='text-center text-lg text-[#494949]'>800.000đ</td>
								<td className='text-center text-lg text-[#494949]'>0đ</td>
								<td className='text-center text-lg text-[#494949]'>800.000đ</td>
							</tr>
						</tbody>
					</table>
					<div className='flex justify-end p-6'>
						<div className=''>
							<div className='flex justify-between gap-20 text-lg text-[#494949]'>
								<div>Tạm tính:</div>
								<div>1.600.000đ</div>
							</div>
							<div className='flex justify-between gap-20 text-lg text-[#494949]'>
								<div>Phí giao hàng:</div>
								<div>0đ</div>
							</div>
							<div className='flex justify-between gap-20 text-lg text-[#494949]'>
								<div>Khuyến mãi vận chuyển:</div>
								<div>0đ</div>
							</div>
							<div className='flex justify-between gap-20 text-lg text-[#494949]'>
								<div>Giảm giá:</div>
								<div>0đ</div>
							</div>
							<div className='flex justify-between gap-20 text-lg font-bold text-[#009383]'>
								<div>Tổng thanh toán:</div>
								<div>1.600.000đ</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-end pr-[48px]'>
					<div className='flex gap-4'>
						<button className='flex h-12 items-center justify-center gap-2 rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1)]'>
							<span className='text-lg font-medium text-[#505050]'>Chat với người bán</span>
						</button>
						<button className='flex h-12 w-[140px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_rgba(231,233,242,1)]'>
							<span className='text-lg font-semibold text-white'>Mua lại</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='mb-40 space-y-5'>
			<div className='text-[32px] font-bold leading-[38.40px] text-[#009383]'>Đơn hàng của tôi</div>
			<div className='inline-flex h-[52px] w-[1074px] items-center justify-start gap-1.5 rounded-lg border border-[#006e62] bg-white p-0.5'>
				{tabs.map((tab) => (
					<div
						key={tab.value}
						className={`flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-md px-8 py-[13.50px] ${
							activeTab === tab.label ? 'bg-[#009383]' : ''
						}`}
						onClick={() => setActiveTab(tab.label)}
					>
						<div
							className={`text-lg font-semibold ${
								activeTab === tab.label ? 'text-white' : 'text-[#505050]'
							}`}
						>
							{tab.label}
						</div>
					</div>
				))}
			</div>
			<div className='h-12 w-[96%]'>
				<Input
					size='large'
					placeholder='Tìm kiếm đơn hàng'
					prefix={<SearchOutlined style={{ color: '#b6b6b6' }} />}
					className='rounded-lg border-[#b6b6b6] text-base text-[#505050]'
				/>
			</div>
			<div className=''>
				{orderData.map((order) => (
					<OrderCard
						key={order.id}
						imageUrl={order.imageUrl}
						title={order.title}
						category={order.category}
						quantity={order.quantity}
						status={order.status}
						totalPrice={order.totalPrice}
						onClick={() => setIsProduct(true)}
					/>
				))}
			</div>
		</div>
	);
};

export default OrderPage;
