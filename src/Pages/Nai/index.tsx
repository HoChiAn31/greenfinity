import Slider from 'react-slick';
import Banner from '../../components/Banner';
import { settingHomes } from '../../constants/sliderSetting';
import { ArrowDown, ArrowLeft, CirclePlay, Direction } from '../../components/icon';
import SampleNextArrow from '../../components/SampleNextArrow';
import { useState } from 'react';
import { Button, Input, Modal, Select, Typography } from 'antd';
const options = [
	{ value: 'an-giang', label: 'An Giang' },
	{ value: 'ba-ria-vung-tau', label: 'Bà Rịa - Vũng Tàu' },
	{ value: 'bac-lieu', label: 'Bạc Liêu' },
	{ value: 'bac-kan', label: 'Bắc Kạn' },
	{ value: 'bac-giang', label: 'Bắc Giang' },
	{ value: 'bac-ninh', label: 'Bắc Ninh' },
	{ value: 'ben-tre', label: 'Bến Tre' },
	{ value: 'binh-duong', label: 'Bình Dương' },
	{ value: 'binh-dinh', label: 'Bình Định' },
	{ value: 'binh-phuoc', label: 'Bình Phước' },
	{ value: 'binh-thuan', label: 'Bình Thuận' },
	{ value: 'ca-mau', label: 'Cà Mau' },
	{ value: 'tp-ho-chi-minh', label: 'TP Hồ Chí Minh' },
	{ value: 'cao-bang', label: 'Cao Bằng' },
];
const optionHs = [
	{ value: 'quan-1', label: 'Quận 1' },
	{ value: 'quan-3', label: 'Quận 3' },
	{ value: 'quan-5', label: 'Quận 5' },
	{ value: 'quan-7', label: 'Quận 7' },
	{ value: 'quan-10', label: 'Quận 10' },
	{ value: 'quan-11', label: 'Quận 11' },
	{ value: 'binh-thanh', label: 'Bình Thạnh' },
	{ value: 'tan-binh', label: 'Tân Bình' },
	{ value: 'tan-phu', label: 'Tân Phú' },
	{ value: 'go-vap', label: 'Gò Vấp' },
	{ value: 'thu-duc', label: 'Thủ Đức' },
	{ value: 'nha-be', label: 'Nhà Bè' },
	{ value: 'hoc-mon', label: 'Hóc Môn' },
	{ value: 'binh-chanh', label: 'Bình Chánh' },
	{ value: 'cu-chi', label: 'Củ Chi' },
];

function NaiPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// available        entering        own
	const [status, setStatus] = useState<string>('available');
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const modalStyles = {
		header: {
			textAlign: 'center' as 'center',
		},
		// title: {
		// 	color: '#f5222d',
		// },
		footer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '20px',
		},
	};
	const handleChange = (value: string | string[]) => {
		console.log(`Selected: ${value}`);
	};

	return (
		<div className='my-16'>
			<Banner label='Nai voronoi' />

			<div className='relative mx-auto w-[1260px] overflow-hidden rounded-2xl border bg-white py-20 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)]'>
				<div className='flex items-center'>
					<div className='w-[50%]'>
						<Slider {...settingHomes} className='slick-gift'>
							<div>
								<div className='flex items-center justify-center'>
									<img src='https://i.imgur.com/zWKd0rU.png' alt='' />
								</div>
							</div>
							<div>
								<div className='flex items-center justify-center'>
									<img src='https://i.imgur.com/zWKd0rU.png' alt='' />
								</div>
							</div>
							<div>
								<div className='flex items-center justify-center'>
									<img src='https://i.imgur.com/zWKd0rU.png' alt='' />
								</div>
							</div>
						</Slider>
					</div>
					<div>
						<div className='w-[449px] rounded-2xl border border-primary-500 p-4'>
							<ul className='text-xl leading-[34px] text-[#494949]'>
								<li>
									<span className='font-semibold'>Phân loại:</span>{' '}
									<span className='font-normal'>đồ trưng bày</span>
								</li>
								<li>
									<span className='font-semibold'>Kích thước:</span>{' '}
									<span className='font-normal'>32.5cmH x 20.5cmW</span>
								</li>
								<li>
									<span className='font-semibold'>Khối lượng nhựa in:</span>{' '}
									<span className='font-normal'>101g</span>
								</li>
								<li>
									<span className='font-semibold'>Lượng nhựa tái chế sử dụng:</span>{' '}
									<span className='font-normal'>100%</span>
								</li>
								<li>
									<span className='font-semibold'>Số lượng tổng:</span>{' '}
									<span className='font-normal'>50</span>
								</li>
								<li>
									<span className='font-semibold'>Đợt nhựa tái chế:</span>{' '}
									<span className='font-normal'>B01202411</span>
								</li>
							</ul>
						</div>

						{status === 'available' && (
							<div className='my-3 flex items-center gap-2'>
								<div>
									<span className='text-base font-semibold text-[#006e62]'>Xem </span>
									<span className='text-base font-semibold text-[#ff4343]'>3</span>
									<span className='text-base font-semibold text-[#006e62]'>
										{' '}
										cửa hàng có sản phẩm
									</span>
								</div>
								<div
									onClick={showModal}
									className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white shadow`}
								>
									<ArrowLeft className='rotate-180' width={10} height={10} />
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='absolute left-6 top-6'>
					<>
						{status === 'available' && (
							<div className='inline-flex h-10 items-center justify-start gap-2.5 rounded-3xl border border-[#33cd26] bg-[#e3ffe0] px-3 py-1.5'>
								<div className='flex items-center justify-center gap-1 overflow-hidden py-0.5'>
									<div className='text-xl font-semibold text-[#33cd26]'>Có sẵn tại cửa hàng</div>
								</div>
							</div>
						)}
						{status === 'entering' && (
							<div className='inline-flex h-10 items-center justify-start gap-2.5 rounded-3xl border border-[#fdb600] bg-[#fff4e0] px-3 py-1.5'>
								<div className='flex items-center justify-center gap-1 overflow-hidden py-0.5'>
									<div className='text-xl font-semibold text-[#fdb600]'>Đang nhập kho</div>
								</div>
							</div>
						)}
						{status === 'own' && (
							<div className='inline-flex h-10 items-center justify-start gap-2.5 rounded-3xl border border-[#5490eb] bg-[#e0ecff] px-3 py-1.5'>
								<div className='flex items-center justify-center gap-1 overflow-hidden py-0.5'>
									<div className='text-xl font-semibold text-[#5490eb]'>Đã sở hữu</div>
								</div>
							</div>
						)}
					</>
				</div>
			</div>
			{status === 'own' && (
				<div className='relative mx-auto my-10 w-[1260px] overflow-hidden rounded-2xl border bg-white px-20 py-10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)]'>
					<div className='pb-5 text-left text-[32px] font-bold leading-[38.40px] text-[#009383]'>
						Chủ sở hữu
					</div>
					<div className='flex gap-2'>
						<div className='h-[56px] w-[56px] overflow-hidden rounded-full border border-primary-500'>
							<img
								src="https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'"
								alt=''
							/>
						</div>
						<div className='inline-flex h-[39px] flex-col items-start justify-start'>
							<div className='text-xl font-medium text-[#006e62]'>Trương Thái Thông</div>
							<div className='text-lg font-normal text-[#6d6d6d]'>091 *** 992</div>
						</div>
					</div>
				</div>
			)}
			<div className='relative mx-auto my-10 w-[1260px] overflow-hidden rounded-2xl border bg-white px-20 py-10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)]'>
				<div className='pb-5 text-left text-[32px] font-bold leading-[38.40px] text-[#009383]'>
					Đăng ký sở hữu sản phẩm
				</div>
				<div className='grid grid-cols-2 gap-5'>
					<div>
						<Typography.Title level={5} className='font-medium'>
							Mã đăng ký
						</Typography.Title>
						<Input defaultValue='Nhập mã đăng ký' />
					</div>
					<div>
						<Typography.Title level={5} className='font-medium'>
							Số điện thoại
						</Typography.Title>
						<Input defaultValue='Nhập số điện thoại' />
					</div>
					<div>
						<Typography.Title level={5} className='font-medium'>
							Họ và tên
						</Typography.Title>
						<Input defaultValue='Nhập họ và tên' />
					</div>
					<div>
						<Typography.Title level={5} className='font-medium'>
							Email
						</Typography.Title>
						<Input defaultValue='Nhập email' />
					</div>
					<Button className='bg-primary-500 text-white'>Đăng ký</Button>
				</div>
			</div>
			<div className='relative mx-auto w-[1260px] overflow-hidden rounded-2xl border bg-white px-20 py-10 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.15)]'>
				<div className='pb-5 text-left text-[32px] font-bold leading-[38.40px] text-[#009383]'>
					Video hướng dẫn
				</div>
				<div>
					<div className='inline-flex h-[308.85px] items-start justify-start gap-[43.10px]'>
						<div className='relative h-[308.85px] w-[558.45px] overflow-hidden rounded-[14.37px] bg-black/20'>
							<div className='absolute left-[-16.16px] top-0 h-[312.45px] w-[583.59px] bg-black/30' />
							<img src='https://i.imgur.com/wswXZsP.png' alt='' />
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer'>
								<CirclePlay />
							</div>
						</div>
						<div className='relative h-[308.85px] w-[558.45px] overflow-hidden rounded-[14.37px] bg-black/20'>
							<div className='absolute left-[-16.16px] top-0 h-[312.45px] w-[583.59px] bg-black/30' />
							<img src='https://i.imgur.com/wswXZsP.png' alt='' />
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer'>
								<CirclePlay />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* modal */}
			<Modal
				title='Danh sách cửa hàng có sản phẩm'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				// className='title'
				styles={modalStyles}
				footer=''
				width={578}
			>
				<div className='flex gap-2'>
					<Select
						size='middle'
						defaultValue='TP Hồ Chí Minh'
						suffixIcon={<ArrowDown />}
						onChange={handleChange}
						style={{ width: 240 }}
						options={options}
					/>
					<Select
						size='middle'
						defaultValue='Tân Bình'
						suffixIcon={<ArrowDown />}
						onChange={handleChange}
						style={{ width: 240 }}
						options={optionHs}
					/>
				</div>
				<div className='mt-5'>
					<div className='my-2 inline-flex w-[510px] items-start justify-between'>
						<div className='flex-col items-start justify-start'>
							<div className='w-[180px] text-lg font-bold leading-normal text-[#009383]'>
								GreeZ Tân Bình
							</div>
							<div className='w-[363px] text-lg font-normal leading-normal text-[#494949]'>
								86/33 Âu Cơ, Phường 9, Quận Tân Bình, Thành phố Hồ Chí Minh.
							</div>
						</div>
						<div className='rounded-full bg-primary-500'>
							<Direction />
						</div>
					</div>
					<div className='my-2 inline-flex w-[510px] items-start justify-between border-y py-3'>
						<div className='flex-col items-start justify-start'>
							<div className='w-[180px] text-lg font-bold leading-normal text-[#009383]'>
								GreeZ Tân Bình
							</div>
							<div className='w-[363px] text-lg font-normal leading-normal text-[#494949]'>
								86/33 Âu Cơ, Phường 9, Quận Tân Bình, Thành phố Hồ Chí Minh.
							</div>
						</div>
						<div className='rounded-full bg-primary-500'>
							<Direction />
						</div>
					</div>
					<div className='my-2 inline-flex w-[510px] items-start justify-between'>
						<div className='flex-col items-start justify-start'>
							<div className='w-[180px] text-lg font-bold leading-normal text-[#009383]'>
								GreeZ Tân Bình
							</div>
							<div className='w-[363px] text-lg font-normal leading-normal text-[#494949]'>
								86/33 Âu Cơ, Phường 9, Quận Tân Bình, Thành phố Hồ Chí Minh.
							</div>
						</div>
						<div className='rounded-full bg-primary-500'>
							<Direction />
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default NaiPage;
