import { Route, Routes } from 'react-router-dom';
import SidebarProfile from '../../Layouts/SidebarProfile';
import React, { useState } from 'react';
import NavigationLink from '../../components/NavigationLink';
import {
	Arrange,
	ArrowRightFromBracket,
	ChangePassword,
	ClockClockwise,
	Coin,
	Edit,
	HandCoin,
	Plus,
	ToteSimple,
	UserCricle,
} from '../../components/icon';
import { Button, ConfigProvider, Pagination, PaginationProps } from 'antd';
import ItemVoucher from '../../components/ItemVoucher';

const ProfileContent = ({ content }: { content: React.ReactNode }) => {
	return <div className='flex-1 border p-4'>{content}</div>;
};

const ProfileV2Page = () => {
	const [active, setActive] = useState<string>('wardrobe');
	const [wardrobe, setWardrobe] = useState(true);
	const handleSwitch = (value: string) => {
		setActive(value);
	};
	const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
		console.log(current, pageSize);
	};
	return (
		<div className=''>
			{' '}
			<section className='mx-auto grid max-w-5xl grid-cols-2 gap-8'>
				<div className=''>
					<img src='https://greenfinity.world/assets/images/avatar/bigMale1.png' alt='' />
				</div>
				<div className=' '>
					<div className=''>
						<div className='pb-5 text-7xl font-bold leading-[85.67px] text-[#009383]'>
							Huy Nguyễn
						</div>

						{/* <div className='py-3'>
							<NavigationLink
								iconLeft={<Edit />}
								type='button'
								content=' Chỉnh sửa thông tin'
								to='/editProfile'
								variant='outline'
							/>
						</div> */}

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
				</div>
			</section>
			<section>
				<div className='inline-flex h-[668px] w-[1074px] flex-col items-center justify-start gap-[21px] rounded-xl border border-[#66beb5] bg-white px-[29px] py-5'>
					<div className='flex h-40 flex-col items-start justify-start gap-3 self-stretch'>
						<div className='flex w-full items-center justify-between'>
							<div className='text-center text-[32px] font-bold leading-[38.40px] text-[#009383]'>
								Thông tin tài khoản
							</div>
							<div className='flex items-center gap-2 rounded-lg bg-[#009383] px-3 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<Edit color='#ffffff' />
								<p className='text-lg font-medium text-white'>Cập nhật</p>
							</div>
						</div>
						<div className='flex h-[104px] flex-col items-start justify-start gap-4'>
							<div className='inline-flex items-start justify-center gap-[77px]'>
								<div className='text-xl font-normal leading-normal text-[#505050]'>Họ và tên</div>
								<div className='text-xl font-medium leading-normal text-[#494949]'>Huy Nguyen</div>
							</div>
							<div className='inline-flex items-start justify-start gap-[88px] pr-[66px]'>
								<div className='text-xl font-normal leading-normal text-[#505050]'>Giới tính</div>
								<div className='text-xl font-medium leading-normal text-[#494949]'>Nam</div>
							</div>
							<div className='inline-flex h-6 items-start justify-center gap-[74px] pr-0.5'>
								<div className='text-xl font-normal leading-normal text-[#505050]'>Ngày sinh</div>
								<div className='h-6 w-[107px] text-xl font-medium leading-normal text-[#494949]'>
									10/12/2212
								</div>
							</div>
						</div>
					</div>
					<div className='h-[0px] self-stretch border border-[#dbdbdb]'></div>
					<div className='flex h-[120px] flex-col items-start justify-start gap-3 self-stretch'>
						<div className='flex w-full items-center justify-between'>
							<div className='text-center text-[32px] font-bold leading-[38.40px] text-[#009383]'>
								Thông tin đăng nhập
							</div>
							<div className='flex items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#009383] px-3 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<ChangePassword />
								<div className='text-lg font-medium text-white'>Đổi mật khẩu</div>
							</div>
						</div>
						<div className='flex flex-col items-start justify-start gap-4'>
							<div className='inline-flex w-[316px] items-center justify-start gap-[76px]'>
								<div className='text-xl font-normal leading-normal text-[#505050]'>Email</div>
								<div className='text-xl font-medium leading-normal text-[#494949]'>
									tuyetanh@gmail.com
								</div>
							</div>
							<div className='inline-flex items-start justify-start gap-[42px]'>
								<div className='text-xl font-normal leading-normal text-[#505050]'>Mật khẩu</div>
								<div className='flex items-center justify-start gap-[99px]'>
									<div className='flex h-2 w-[92px] items-start justify-center gap-1'>
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
										<div className='relative h-2 w-2 rounded-lg bg-[#494949]' />
									</div>
									<div className='flex h-6 w-6 items-center justify-center overflow-hidden px-0.5 py-0.5 opacity-0' />
								</div>
							</div>
						</div>
					</div>
					<div className='h-[0px] self-stretch border border-[#dbdbdb]'></div>
					<div className='flex h-[199px] flex-col items-start justify-start gap-6 self-stretch'>
						<div className='inline-flex items-center justify-between self-stretch'>
							<div className='text-center text-[32px] font-bold leading-[38.40px] text-[#009383]'>
								Địa chỉ của tôi
							</div>
							<div className='flex items-center justify-center gap-1 rounded-lg bg-[#009383] px-3 py-[13px]'>
								<Plus color='#ffffff' />
								<div className='text-lg font-medium leading-snug text-white'>Thêm địa chỉ mới</div>
							</div>
						</div>
						<div className='inline-flex h-[131px] items-start justify-start gap-2.5 self-stretch'>
							<div className='inline-flex h-[131px] shrink grow basis-0 flex-col items-start justify-start gap-5 overflow-hidden rounded-[10px] bg-[#f6f6f6] p-4'>
								<div className='relative h-5 w-5 overflow-hidden' />
								<div className='inline-flex h-[25px] items-center justify-start gap-2'>
									<div className='flex items-center justify-start gap-2'>
										<div className='text-xl font-bold leading-normal text-[#494949]'>
											Nhà riêng 2
										</div>
										<Edit />
									</div>
									<div className='flex items-center justify-center gap-2.5 rounded-[30px] bg-[#15bdd6] p-2'>
										<div className='text-xs font-semibold leading-[14.40px] tracking-tight text-white'>
											Mặc định
										</div>
									</div>
									<div className='relative h-6 w-6 overflow-hidden' />
								</div>
								<div className='self-stretch'>
									<span className='text-lg font-semibold leading-snug text-[#494949]'>
										Địa chỉ:{' '}
									</span>
									<span className='text-lg font-normal leading-snug text-[#494949]'>
										1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
									</span>
								</div>
							</div>
							<div className='inline-flex h-[131px] shrink grow basis-0 flex-col items-start justify-start gap-5 overflow-hidden rounded-[10px] bg-[#f6f6f6] p-4'>
								<div className='relative h-5 w-5 overflow-hidden' />
								<div className='inline-flex items-center justify-start gap-2'>
									<div className='flex items-center justify-start gap-2'>
										<div className='text-xl font-bold leading-normal text-[#494949]'>
											Nhà riêng 2
										</div>
										<Edit />
									</div>
									<div className='relative h-6 w-6 overflow-hidden' />
								</div>
								<div className='self-stretch'>
									<span className='text-lg font-semibold leading-snug text-[#494949]'>
										Địa chỉ:{' '}
									</span>
									<span className='text-lg font-normal leading-snug text-[#494949]'>
										1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
									</span>
								</div>
							</div>
							<div className='inline-flex h-[131px] shrink grow basis-0 flex-col items-start justify-start gap-5 overflow-hidden rounded-[10px] bg-[#f6f6f6] p-4'>
								<div className='relative h-5 w-5 overflow-hidden' />
								<div className='inline-flex items-center justify-start gap-2'>
									<div className='flex items-center justify-start gap-2'>
										<div className='text-xl font-bold leading-normal tracking-tight text-[#494949]'>
											Nhà riêng 2
										</div>
										<Edit />
									</div>
									<div className='relative h-6 w-6 overflow-hidden' />
								</div>
								<div className='self-stretch'>
									<span className='text-lg font-semibold leading-snug text-[#494949]'>
										Địa chỉ:{' '}
									</span>
									<span className='text-lg font-normal leading-snug text-[#494949]'>
										1-1A Tạ Quang Bửu, P6, Q8, Tp Hồ Chí Minh
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='inline-flex h-11 items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#ffeaea] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
						<UserCricle />
						<div className='text-lg font-medium text-[#ff4343]'>Xóa tài khoản</div>
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

export default ProfileV2Page;
