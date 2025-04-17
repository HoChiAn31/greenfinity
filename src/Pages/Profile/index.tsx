import { Button, ConfigProvider, Pagination, PaginationProps } from 'antd';
import {
	Arrange,
	ArrowRightFromBracket,
	ClockClockwise,
	Coin,
	Edit,
	HandCoin,
	ToteSimple,
} from '../../components/icon';
import { useState } from 'react';
import ItemVoucher from '../../components/ItemVoucher';
import NavigationLink from '../../components/NavigationLink';

const ProfilePage = () => {
	const [active, setActive] = useState<string>('wardrobe');
	const [wardrobe, setWardrobe] = useState(true);
	const handleSwitch = (value: string) => {
		setActive(value);
	};
	const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
		console.log(current, pageSize);
	};
	return (
		<div>
			<section className='mx-auto grid max-w-5xl grid-cols-2 gap-8'>
				<div className=''>
					<img src='https://greenfinity.world/assets/images/avatar/bigMale1.png' alt='' />
				</div>
				<div className=' '>
					<div className=''>
						<div className='text-7xl font-bold leading-[85.67px] text-[#009383]'>Tuyết Anh</div>

						<div className='py-3'>
							<NavigationLink
								iconLeft={<Edit />}
								type='button'
								content=' Chỉnh sửa thông tin'
								to='/editProfile'
								variant='outline'
							/>
						</div>

						<div className='flex flex-col items-start justify-start gap-3'>
							<div className='w-[442px] text-base font-normal leading-tight text-[#373737]'>
								Tôi là người ham đọc sách, thích học hỏi và hướng ngoại. Tôi thích làm việc trong
								môi trường nghiêm túc và có thể phát triển sự nghiệp.
							</div>
						</div>
					</div>
					<div className='flex flex-col items-start justify-center gap-4'>
						<div>
							<p className='text-xl font-normal leading-normal text-[#006e62]'>
								Thứ hạng hiện tại:{' '}
								<span className='text-xl font-semibold leading-normal text-[#ff0000]'>26</span>
							</p>
						</div>
						<div className=''>
							<div className='flex items-center gap-1'>
								<p className='text-xl font-normal leading-normal text-[#006e62]'>
									Gree coin hiện có:{' '}
								</p>
								<div className='flex items-center gap-1 text-xl font-semibold leading-normal text-[#ff0000]'>
									<p>5000</p> <Coin />
								</div>
							</div>
						</div>
						<div>
							<p className='text-xl font-normal leading-normal text-[#006e62]'>
								Điểm đã chi tiêu tuần này:{' '}
								<span className='text-xl font-semibold leading-normal text-[#ff0000]'>0</span>
							</p>
						</div>
					</div>
					<div className=''>
						<div className='my-3 space-y-3'>
							<div className='grid w-full grid-cols-2 gap-2'>
								<NavigationLink
									iconLeft={<HandCoin />}
									content='Lịch sử quyên góp'
									to='/donationHistoryPage'
									type='button'
								/>

								<NavigationLink
									iconLeft={<ClockClockwise />}
									content='Lịch sử tích điểm'
									to='/greecoinHistory'
									type='button'
								/>
							</div>
							<NavigationLink
								iconLeft={<ToteSimple />}
								content='Lịch sản phẩm của bạn'
								to='/donationHistoryPage'
								type='button'
								className='justify-center'
							/>
							<ConfigProvider
								theme={{
									token: {
										colorPrimary: '#009383',
									},
								}}
							>
								<Button
									icon={<ArrowRightFromBracket />}
									className='w-full rounded-lg border-primary-500 bg-transparent p-5 font-bold text-primary-500'
									variant='outlined'
								>
									Đăng xuất
								</Button>
							</ConfigProvider>
						</div>
					</div>
				</div>
			</section>
			<section className='mt-20'>
				<div className='text-center text-2xl font-normal italic leading-[28.80px] tracking-tight text-[#15bdd6] underline'>
					Thể lệ chương trình
				</div>
				<div className='mx-auto my-5 grid max-w-[800px] grid-cols-2 gap-4'>
					<div className='flex items-center justify-center'>
						<img src='https://i.imgur.com/9bhcE74.png' alt='' />
					</div>
					<div className='flex items-center justify-center'>
						<img src='https://i.imgur.com/L8XiKAk.png' alt='' />
					</div>
				</div>
			</section>
			<section className='mx-auto my-24 max-w-[1314px]'>
				<div className='relative flex items-center justify-center'>
					<div className='absolute top-0 z-20 flex -translate-y-1/2 items-center justify-center gap-4 rounded-full bg-primary-500 p-1 text-center'>
						<button
							className={`rounded-full px-3 py-2 font-bold ${
								active === 'wardrobe' ? 'bg-white text-primary-500' : 'text-white hover:opacity-80'
							}`}
							onClick={() => handleSwitch('wardrobe')}
						>
							Tủ đồ của tôi
						</button>

						<button
							onClick={() => handleSwitch('voucher')}
							className={`cursor-pointer rounded-full px-3 py-2 font-bold ${
								active === 'voucher' ? 'bg-white text-primary-500' : 'text-white hover:opacity-80'
							}`}
						>
							Voucher của tôi
						</button>
					</div>
					<div className='h-28 w-[500px] rounded-t-3xl border-x border-t border-primary-500'></div>
				</div>
				{/*  */}
				<div className='mb-10'>
					{active === 'wardrobe' && (
						<div className='mx-auto max-w-[1314px]'>
							{wardrobe ? (
								<div className='w-full rounded-3xl border border-primary-500 p-6'>
									<div className='flex justify-end'>
										<div className='flex w-10 cursor-pointer items-center justify-center rounded-md bg-primary-500 p-2 hover:opacity-80'>
											<Arrange />
										</div>
									</div>
									<div className='grid grid-cols-3 gap-4 py-6'>
										<ItemVoucher type='voucherHunting' />
										<ItemVoucher type='voucherHunting' />
										<ItemVoucher type='voucherHunting' />
										<ItemVoucher type='voucherHunting' />
										<ItemVoucher type='voucherHunting' />
										<ItemVoucher type='voucherHunting' />
									</div>
									<div className='flex items-center justify-center'>
										<Pagination defaultCurrent={1} total={380} />
									</div>
								</div>
							) : (
								<div className='flex min-h-[300px] w-full items-center justify-center rounded-3xl border border-primary-500 p-6'>
									<div className='inline-flex h-[79px] flex-col items-center justify-start gap-2'>
										<div className='text-center text-4xl font-bold text-[#33a99c]'>
											Tủ đồ của bạn hiện đang trống
										</div>
										<div className='text-center text-[22px] font-medium text-[#6d6d6d]'>
											Vui lòng mua sắm để cập nhật tủ đồ của bạn
										</div>
									</div>
								</div>
							)}
						</div>
					)}
					{active === 'voucher' && (
						<div className='mx-auto max-w-[1314px]'>
							<div className='flex min-h-[300px] w-full items-center justify-center rounded-3xl border border-primary-500 p-6'>
								<div className='inline-flex h-[79px] flex-col items-center justify-start gap-2'>
									<div className='text-center text-4xl font-bold text-[#33a99c]'>
										Bạn đang chưa có voucher nào!
									</div>
									<div className='text-center text-[22px] font-medium text-[#6d6d6d]'>
										Vui lòng tích điểm để đổi Voucher.
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default ProfilePage;
