import { useState } from 'react';
import { Edit, Trash } from '../../components/icon';
import { Button, Checkbox, ConfigProvider, Input, Radio, RadioChangeEvent } from 'antd';
import InputComponent from '../../components/InputComponent';

const Item = () => (
	<div className='my-3 flex h-[118px] items-center justify-start gap-4 rounded-lg bg-white'>
		<div className='flex h-[118px] w-[150px] items-center justify-center overflow-hidden rounded-xl bg-[#eceef0]'>
			<img className='h-[118px] w-[150px]' src='https://i.imgur.com/IYl2dP5.png' />
		</div>
		<div className='flex h-[79px] items-center justify-between'>
			<div className='inline-flex w-[299px] flex-col items-start justify-start gap-3'>
				<div className='self-stretch text-lg font-semibold leading-normal text-[#373737]'>
					Multipurpose container Shark
				</div>
				<div className='inline-flex h-7 items-center justify-start gap-[3px] rounded-[20px] bg-[#dde6ff] px-2 py-1'>
					<div className='text-sm font-medium text-[#0084ff]'>Art toy</div>
				</div>
				<div className='inline-flex items-start justify-start gap-3'>
					<div className='text-xl font-normal leading-relaxed text-[#929292] line-through'>
						900.000đ
					</div>
					<div className='text-xl font-semibold leading-relaxed text-[#009383]'>800.000đ</div>
				</div>
			</div>
			<div className='flex items-center gap-2.5'>
				<p className='text-sm font-normal text-[#494949]'>Số lượng: </p>
				<p className='text-sm font-semibold text-[#006e62]'>1</p>
				<Trash />
			</div>
		</div>
	</div>
);

function CheckOrderPage() {
	const [value, setValue] = useState(1);

	const onChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);
		setValue(e.target.value);
	};
	return (
		<div className='mx-auto max-w-[1400px]'>
			<div className='flex w-full gap-4 py-8'>
				{/* infor user */}
				<div className='w-[70%]'>
					<div className='inline-flex h-[115px] w-full items-center justify-start overflow-hidden rounded-xl bg-[#d6f2ef] py-5 pl-[30px]'>
						<div className='flex w-full flex-col items-start justify-start gap-2'>
							<div className='text-4xl font-semibold text-[#006e62]'>Hi, An Ho</div>
							<div>
								<p className='text-base font-normal leading-tight text-[#494949]'>
									Tổng đơn (2 sản phẩm){' '}
									<span className='text-base font-semibold leading-tight text-[#009383]'>
										1.600.00đ
									</span>
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className='text-[32px] font-semibold text-[#373737]'>Thông tin vận chuyển</div>
						{/* input */}
						<div className='space-y-4'>
							<div>
								<ConfigProvider
									theme={{
										components: {
											Radio: {
												buttonSolidCheckedActiveBg: '#009383',
											},
										},
									}}
								>
									<Radio.Group onChange={onChange} value={value}>
										<Radio value='default'>Mặc định</Radio>
										<Radio value='more'>Khác</Radio>
									</Radio.Group>
								</ConfigProvider>
							</div>
							<InputComponent placeholder='Nhập tên' value='Huy Nguyen' />
							<div className='flex items-center gap-4'>
								<InputComponent placeholder='Địa chỉ' />
								<InputComponent placeholder='Số điện thoại' />
							</div>
							<div className='flex items-center gap-4'>
								<InputComponent placeholder='Chọn Thành phố' />
								<InputComponent placeholder='Chọn Quận/Huyện' />
								<InputComponent placeholder='Chọn Phường/Xã' />
							</div>
							<InputComponent placeholder='Ghi chú thêm (ví dụ giao giờ hành chính)' />
							<ConfigProvider
								theme={{
									token: {
										colorPrimary: '#009383',
									},
								}}
							>
								<Checkbox className='border-primary-500'>
									<div className='text-base font-normal leading-normal text-[#494949]'>
										Lưu địa chỉ cho lần mua hàng tiếp theo
									</div>
								</Checkbox>
							</ConfigProvider>
						</div>
						{/* payment */}
						<div className='mt-8'>
							<div className='text-[32px] font-semibold text-[#373737]'>Hình thức thanh toán</div>
							<div className='flex w-full items-center gap-4'>
								<div
									className={`flex h-[72px] w-full items-center justify-center gap-2.5 rounded-xl border border-[#33a99c] bg-white px-4 py-3`}
								>
									<div className='flex h-12 shrink grow basis-0 items-center justify-start gap-2.5'>
										<div className='flex h-12 w-12 items-center justify-center'>
											<img className='h-12 w-12' src='https://i.imgur.com/RYbE3P7.png' />
										</div>
										<div className='shrink grow basis-0 text-base font-medium text-[#384252]'>
											Ví Momo
										</div>
									</div>
									<div className='relative h-8 w-8 overflow-hidden' />
								</div>
								<div className='flex h-[72px] w-full items-center justify-center gap-2.5 rounded-xl border border-[#33a99c] bg-white px-4 py-3'>
									<div className='flex h-12 shrink grow basis-0 items-center justify-start gap-2.5'>
										<div className='flex h-12 w-12 items-center justify-center'>
											<img className='h-12 w-12' src='https://i.imgur.com/71yQr43.png' />
										</div>
										<div className='shrink grow basis-0 text-base font-medium text-[#384252]'>
											Ví VNPay
										</div>
									</div>
									<div className='relative h-8 w-8 overflow-hidden' />
								</div>
							</div>
						</div>
						<div className='my-5'>
							<Button className='w-full rounded-md bg-primary-500 py-5'>
								<p className='text-base font-bold text-white'>Thanh toán 1.800.00đ (MoMo)</p>
							</Button>
						</div>
					</div>
				</div>
				{/* infor cart */}
				<div className=''>
					<div className='inline-flex items-center justify-between'>
						<div className='text-[32px] font-semibold text-[#373737]'>Giỏ hàng</div>
						<Edit />
					</div>
					<div className='max-h-[400px] min-h-[400px] w-full overflow-auto overflow-y-auto rounded-md border-primary-500 bg-white p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2'>
						<Item />
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
					<div className='my-5 flex w-full gap-2'>
						<div className='inline-flex h-12 w-full items-center justify-start gap-2.5 overflow-hidden rounded-lg border border-[#b6b6b6] bg-white px-4 py-2.5'>
							<div className='text-base font-normal text-[#929292]'>Nhập mã giảm giá</div>
						</div>

						<Button className='flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#d9d9d9] px-10 py-2.5'>
							<p className='text-base font-semibold text-[#929292]'>Áp dụng</p>
						</Button>
					</div>
					<div className='relative h-[212px] w-[600px] rounded-xl border border-[#b6b6b6] bg-white'>
						<div className='absolute left-[25px] top-[24px] text-base font-normal text-[#494949]'>
							Tạm tính
						</div>
						<div className='absolute left-[25px] top-[61px] text-base font-normal text-[#494949]'>
							Giảm giá
						</div>
						<div className='absolute left-[25px] top-[98px] text-base font-normal text-[#494949]'>
							Phí giao hàng
						</div>
						<div className='absolute left-[494px] top-[24px] text-right text-base font-normal text-[#494949]'>
							1.800.000đ
						</div>
						<div className='absolute left-[556px] top-[61px] text-right text-base font-normal text-[#494949]'>
							0đ
						</div>
						<div className='absolute left-[556px] top-[98px] text-right text-base font-normal text-[#494949]'>
							0đ
						</div>
						<div className='absolute left-[25px] top-[147px] h-[0px] w-[550px] border border-[#b6b6b6]'></div>
						<div className='absolute left-[25px] top-[165px] text-right text-base font-semibold text-[#494949]'>
							Tổng cộng:
						</div>
						<div className='absolute left-[481px] top-[165px] text-right text-xl font-bold text-[#009383]'>
							1.800.00đ
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckOrderPage;
