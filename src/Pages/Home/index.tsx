import { Button, ConfigProvider, Pagination } from 'antd';
import Slider from 'react-slick';
import NavigationLink from '../../components/NavigationLink';
import Banner from '../../components/Banner';
import { useState } from 'react';
import RankingBoard from '../../Layouts/RankingBoard';
import { settingGifts, settingHomes, settingWeeks } from '../../constants/sliderSetting';

const HomePage = () => {
	const weeks = [
		'Tuần 8 - 09/2023',
		'Tuần 9 - 09/2023',
		'Tuần 10 - 09/2023',
		'Tuần 11 - 09/2023',
		'Tuần 12 - 09/2023',
		'Tuần 13 - 09/2023',
		'Tuần 14 - 09/2023',
		'Tuần 15 - 09/2023',
	];
	const [selectedWeek, setSelectedWeek] = useState('Tuần 12 - 09/2023');

	return (
		<div>
			<Slider {...settingHomes} className='slick-home'>
				<div>
					<div
						className='flex min-h-screen items-center'
						style={{
							backgroundImage:
								"url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_1_64d7ef1ca5.png&w=1920&q=75')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div className='flex max-w-[720px] translate-x-[36%] transform flex-col items-start text-left'>
							<div className='text-5xl font-extrabold uppercase leading-[56px] text-white'>
								Hãy hành động hôm nay, kiến tạo trái đất mai sau
							</div>
							<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-white'>
								Rác thải trở thành nguồn tài nguyên tái chế nếu bạn biết cách sử dụng đúng cách. Để
								làm được điều này, chúng ta cần phải có quy trình thu gom – vận chuyển – xử lý rác
								thải khoa học. Do đó, bạn cần phân loại rác thành các loại: Rác hữu cơ, rác vô cơ và
								rác tái chế riêng biệt.
							</div>

							<NavigationLink
								content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
								type='button'
								to='/station'
								className='border border-white'
							/>
						</div>
					</div>
				</div>
				{/*  */}
				<div>
					<div
						className='flex min-h-screen items-center'
						style={{
							backgroundImage:
								"url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_2_60bc5b48cb.png&w=1920&q=75')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div className='flex flex-col items-start text-center'>
							<div className='text-5xl font-extrabold uppercase leading-[56px] text-white'>
								Một thế giới sạch <br /> vạn tâm hồn trong xanh.
							</div>
							<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-white'>
								Hiện nay, môi trường đang bị ô nhiễm ngày càng nhiều là một trong những vấn đề quan
								trọng và cần có những biện pháp xử lý kịp thời không chỉ ở Việt Nam mà còn ở trên
								toàn thế giới
							</div>

							<div className='flex w-full items-center justify-center'>
								<NavigationLink
									content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
									type='button'
									to='/station'
									className='border border-white'
								/>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
				<div>
					<div
						className='flex min-h-screen items-center'
						style={{
							backgroundImage:
								"url('https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Fbanner_3_19c75452c4.png&w=1920&q=75')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<div className='flex -translate-x-[24%] flex-col items-start text-left'>
							<div className='text-5xl font-extrabold uppercase leading-[56px] text-white'>
								Phân loại rác thải
								<br />
								Tiết kiệm xử lý.
							</div>
							<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-white'>
								Rác thải trở thành nguồn tài nguyên tái chế nếu bạn biết cách sử dụng đúng cách. Để
								làm được điều này, chúng ta cần phải có quy trình thu gom – vận chuyển – xử lý rác
								thải khoa học. Do đó, bạn cần phân loại rác thành các loại: Rác hữu cơ, rác vô cơ và
								rác tái chế riêng biệt.
							</div>

							<NavigationLink
								content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
								type='button'
								to='/station'
								className='border border-white'
							/>
						</div>
					</div>
				</div>
			</Slider>

			<section className=''>
				<Banner label='Tổng số chai/lon thu được' />

				<div className='mx-auto flex max-w-[1100px] items-center justify-between gap-8'>
					{/* item  */}
					<div className='flex items-center'>
						<img
							src='https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fbottle.png&w=128&q=100'
							alt=''
							className='z-[80] -mr-28 -mt-14 h-[333px] w-[111px] origin-top-left rotate-[16.50deg]'
						/>
						<div className='relative flex h-[220px] w-[508px] items-center justify-center overflow-hidden rounded-3xl border-[6px] border-white bg-primary-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
							<img
								src='https://greenfinity.world/assets/images/bg_leaves_left.png'
								alt=''
								className='absolute bottom-0 left-0'
							/>
							<img
								src='https://greenfinity.world/assets/images/bg_leaves_right.png'
								alt=''
								className='absolute bottom-0 right-0 h-[60%]'
							/>
							<div className='z-50 inline-flex h-28 flex-col items-center justify-center'>
								<div className='text-[87px] font-bold leading-[104.40px] text-white'>200.000</div>
								<div className='text-[37px] font-bold leading-[44.40px] text-white'>Chai nhựa</div>
							</div>
						</div>
					</div>
					{/* item  */}
					<div className='flex items-center'>
						<img
							src='https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fcan3.png&w=128&q=100'
							alt=''
							className='z-[80] -mr-28 -mt-2 h-[333px] w-[111px] origin-top-left rotate-[16.50deg]'
						/>
						<div className='relative flex h-[220px] w-[508px] items-center justify-center overflow-hidden rounded-3xl border-[6px] border-white bg-primary-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
							<img
								src='https://greenfinity.world/assets/images/bg_leaves_left.png'
								alt=''
								className='absolute bottom-0 left-0'
							/>
							<img
								src='https://greenfinity.world/assets/images/bg_leaves_right.png'
								alt=''
								className='absolute bottom-0 right-0 h-[60%]'
							/>
							<div className='z-50 inline-flex h-28 flex-col items-center justify-center'>
								<div className='text-[87px] font-bold leading-[104.40px] text-white'>200.000</div>
								<div className='text-[37px] font-bold leading-[44.40px] text-white'>Lon nhôm</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className=''>
				{/* banner */}
				<div className='my-20 mt-32 flex items-center justify-center'>
					<div className='flex items-center'>
						<div className='relative flex items-center justify-center'>
							<img src='https://imgur.com/klYPWWr.png' alt='' />
							<div className='absolute top-0 z-50 -mt-2'>
								<img src='https://i.imgur.com/CD2CMgt.png' alt='' className=' ' />
								<div className='absolute left-1/2 top-1/2 z-[100] w-[320px] -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl font-extrabold uppercase leading-[43.20px] text-white'>
									Đóng góp tuần
								</div>
							</div>
						</div>
						<div className='relative flex items-center justify-center'>
							<img src='https://imgur.com/klYPWWr.png' alt='' />
							<div className='absolute left-1/2 top-1/2 z-[100] w-[320px] -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl font-extrabold uppercase leading-[43.20px] text-primary-500'>
								Đóng góp tích lũy
							</div>
						</div>
					</div>
				</div>
				{/* week */}
				<div className='mx-auto my-10 w-1/2'>
					<Slider {...settingWeeks}>
						{weeks.map((week, index) => (
							<div key={index} onClick={() => setSelectedWeek(week)} className='max-w-36'>
								<div
									className={`mx-1 cursor-pointer rounded-lg border-2 py-2 text-center text-sm font-bold ${
										selectedWeek === week
											? 'border-primary-500 bg-primary-500 text-white'
											: 'border-primary-500 bg-white text-primary-500'
									}`}
								>
									{week}
								</div>
							</div>
						))}
					</Slider>
				</div>
			</section>
			{/* Ranking board */}
			<RankingBoard />
			{/* Login */}
			<section className='flex flex-col items-center justify-center'>
				<div className="text-center font-['Roboto'] text-[26px] font-semibold leading-loose text-[#15bdd6]">
					Vui lòng đăng nhập để xem hạng của bạn
				</div>
				<NavigationLink
					to='/login'
					type='button'
					content={<p className='text-base font-bold'>Đăng nhập</p>}
					bgColor='bg-[#15bdd6]'
				/>
			</section>
			{/* Banner */}
			<section className=''>
				<Banner label='Quà tặng' />
				<div className='mx-auto my-20 max-w-[800px]'>
					<Slider {...settingGifts} className='slick-gift'>
						<div className='my-14'>
							<div className='flex items-center'>
								<div>
									<img src='https://i.imgur.com/JfxRj4s.png' alt='' height={326} width={518} />
								</div>
								<div>
									<div className='text-[40px] font-bold leading-[48px] text-[#006e62] opacity-80'>
										Voucher mua sắm <br /> Siêu thị Co.opmart
									</div>
									<p className='text-xl font-bold leading-relaxed text-[#13250e]'>
										Sản phẩm được làm từ 20 chai nhựa rỗng
									</p>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Button type='primary' className='px-10 py-5'>
											<p className='text-lg font-semibold text-white'>Đổi quà</p>
										</Button>
									</ConfigProvider>
								</div>
							</div>
						</div>
						<div className='my-14'>
							<div className='flex items-center'>
								<div>
									<img src='https://i.imgur.com/JfxRj4s.png' alt='' />
								</div>
								<div>
									<div className="w-[60%] font-['Roboto'] text-[40px] font-bold leading-[48px] text-[#006e62] opacity-80">
										Voucher mua sắm Siêu thị Co.opmart
									</div>
									<p className='text-xl font-bold leading-relaxed text-[#13250e]'>
										Sản phẩm được làm từ 20 chai nhựa rỗng
									</p>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Button type='primary' className='px-10 py-5'>
											<p className='text-lg font-semibold text-white'>Đổi quà</p>
										</Button>
									</ConfigProvider>
								</div>
							</div>
						</div>
						<div className='my-14'>
							<div className='flex items-center'>
								<div>
									<img src='https://i.imgur.com/JfxRj4s.png' alt='' />
								</div>
								<div>
									<div className="w-[60%] font-['Roboto'] text-[40px] font-bold leading-[48px] text-[#006e62] opacity-80">
										Voucher mua sắm Siêu thị Co.opmart
									</div>
									<p className="font-['Roboto'] text-[21.31px] font-bold leading-relaxed text-[#13250e]">
										Sản phẩm được làm từ 20 chai nhựa rỗng
									</p>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Button type='primary' className='px-10 py-5'>
											<p className='text-lg font-semibold text-white'>Đổi quà</p>
										</Button>
									</ConfigProvider>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>
		</div>
	);
};
export default HomePage;
