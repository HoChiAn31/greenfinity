import Slider from 'react-slick';
import NavigationLink from '../../components/NavigationLink';
import { settingHomes, settingStory } from '../../constants/sliderSetting';
import Banner from '../../components/Banner';
import ProductOne from '../../components/ProductOne';
import { Button } from 'antd';

function StoryPage() {
	return (
		<div>
			<div className=' '>
				<Slider {...settingStory} className='slick-story'>
					<div>
						<div>
							<div className='mx-auto max-w-[1200px]'>
								<div className='-mt-20 flex items-center gap-20'>
									<div className='flex flex-col items-start text-left'>
										<p className='text-4xl font-semibold text-primary-500'>Coaster Set</p>
										<div className='text-5xl font-extrabold uppercase leading-[56px] text-primary-500'>
											SUNFLOWER
										</div>
										<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-gray-400'>
											Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus
											turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo
											volutpat arcu massa. Scelerisque vestibulum tellus rhoncus arcu blandit sem
											auctor donec. Vulputate quis dis mauris a id. Blandit porta et libero at elit
											vitae. Tincidunt mi eget tristique vestibulum dolor nulla nascetur tellus non.
											Elementum justo eget odio non ornare. Cursus habitant nisi ac aliquam. Cras
											nibh dictumst consequat enim et sit et quam. A cras varius non rhoncus congue.
											Varius amet id ultricies pellentesque morbi pharetra turpis. Adipiscing
											pharetra mollis ornare sit nibh. Amet sagittis tellus ut scelerisque dolor
											auctor. Libero justo pellentesque pulvinar dolor...
										</div>

										<NavigationLink
											content={<p className='text-lg font-semibold text-white'>Xem chi tiết</p>}
											style='button'
											to='/station'
											className='border border-white'
										/>
									</div>
									<div className='relative'>
										<div className='h-[86vh] w-[86vh] rounded-full bg-[#99D4CD]'></div>
										<div className='absolute -left-36 top-0'>
											<img src='https://i.imgur.com/IYl2dP5.png' alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*  */}
					<div>
						<div>
							<div className='mx-auto max-w-[1200px]'>
								<div className='-mt-20 flex items-center gap-20'>
									<div className='flex flex-col items-start text-left'>
										<p className='text-4xl font-semibold text-primary-500'>Coaster Set</p>
										<div className='text-5xl font-extrabold uppercase leading-[56px] text-primary-500'>
											SUNFLOWER
										</div>
										<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-gray-400'>
											Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus
											turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo
											volutpat arcu massa. Scelerisque vestibulum tellus rhoncus arcu blandit sem
											auctor donec. Vulputate quis dis mauris a id. Blandit porta et libero at elit
											vitae. Tincidunt mi eget tristique vestibulum dolor nulla nascetur tellus non.
											Elementum justo eget odio non ornare. Cursus habitant nisi ac aliquam. Cras
											nibh dictumst consequat enim et sit et quam. A cras varius non rhoncus congue.
											Varius amet id ultricies pellentesque morbi pharetra turpis. Adipiscing
											pharetra mollis ornare sit nibh. Amet sagittis tellus ut scelerisque dolor
											auctor. Libero justo pellentesque pulvinar dolor...
										</div>

										<NavigationLink
											content={<p className='text-lg font-semibold text-white'>Xem chi tiết</p>}
											style='button'
											to='/station'
											className='border border-white'
										/>
									</div>
									<div className='relative'>
										<div className='h-[86vh] w-[86vh] rounded-full bg-[#99D4CD]'></div>
										<div className='absolute -left-36 top-0'>
											<img src='https://i.imgur.com/IYl2dP5.png' alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*  */}
					<div>
						<div>
							<div className='mx-auto max-w-[1200px]'>
								<div className='-mt-20 flex items-center gap-20'>
									<div className='flex flex-col items-start text-left'>
										<p className='text-4xl font-semibold text-primary-500'>Coaster Set</p>
										<div className='text-5xl font-extrabold uppercase leading-[56px] text-primary-500'>
											SUNFLOWER
										</div>
										<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-gray-400'>
											Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus
											turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo
											volutpat arcu massa. Scelerisque vestibulum tellus rhoncus arcu blandit sem
											auctor donec. Vulputate quis dis mauris a id. Blandit porta et libero at elit
											vitae. Tincidunt mi eget tristique vestibulum dolor nulla nascetur tellus non.
											Elementum justo eget odio non ornare. Cursus habitant nisi ac aliquam. Cras
											nibh dictumst consequat enim et sit et quam. A cras varius non rhoncus congue.
											Varius amet id ultricies pellentesque morbi pharetra turpis. Adipiscing
											pharetra mollis ornare sit nibh. Amet sagittis tellus ut scelerisque dolor
											auctor. Libero justo pellentesque pulvinar dolor...
										</div>

										<NavigationLink
											content={<p className='text-lg font-semibold text-white'>Xem chi tiết</p>}
											style='button'
											to='/station'
											className='border border-white'
										/>
									</div>
									<div className='relative'>
										<div className='h-[86vh] w-[86vh] rounded-full bg-[#99D4CD]'></div>
										<div className='absolute -left-36 top-0'>
											<img src='https://i.imgur.com/IYl2dP5.png' alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*  */}
				</Slider>
			</div>

			<section>
				<Banner label='Sản phẩm ĐƠN' />
				<div className='mx-auto grid max-w-[1200px] grid-cols-2 gap-8'>
					<ProductOne />
					<ProductOne />
					<ProductOne />
					<ProductOne />
				</div>
				<div className='my-5 flex items-center justify-center'>
					<Button className='border border-primary-500 px-40 py-4'>Xem tất cả</Button>
				</div>
			</section>
			<section>
				<div
					style={{
						backgroundImage: `url("https://i.imgur.com/gjjJoUR.png")`,
						backgroundSize: '100%',
						backgroundPosition: '',
						backgroundRepeat: 'no-repeat',
						// backgroundAttachment: 'fixed',
					}}
					className='w-full'
				>
					<Banner label='BỘ SƯU TẬP' />
					<div className='mx-auto flex max-w-[1400px] items-start'>
						<div>
							<div className='inline-flex h-[367px] w-[708px] flex-col items-start justify-end gap-[35px] pb-2 pt-[13px]'>
								<div className='text-6xl font-extrabold uppercase leading-[78px] text-[#006e62]'>
									LONG SINH CỬU TỬ
								</div>
								<div className='h-[180px] w-[713px] text-base font-normal leading-tight text-[#494949]'>
									Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus
									turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo volutpat
									arcu massa. Scelerisque vestibulum tellus rhoncus arcu blandit sem auctor donec.
									Vulputate quis dis mauris a id. Blandit porta et libero at elit vitae. Tincidunt
									mi eget tristique vestibulum dolor nulla nascetur tellus non. Elementum justo eget
									odio non ornare. Cursus habitant nisi ac aliquam. Cras nibh dictumst consequat
									enim et sit et quam. A cras varius non rhoncus congue. Varius amet id ultricies
									pellentesque morbi pharetra turpis. Adipiscing pharetra mollis ornare sit nibh.
									Amet sagittis tellus ut scelerisque dolor auctor. Libero justo pellentesque
									pulvinar dolor...{' '}
								</div>
								<div className='inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#009383] px-10 py-2.5'>
									<div className='text-lg font-bold text-white'>Xem chi tiết</div>
								</div>
							</div>
							<div className='mt-5 flex gap-6'>
								<div className='relative w-[250px] cursor-pointer overflow-hidden rounded-2xl border border-primary-500 bg-white shadow'>
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

									<div className=''>
										<div className='flex items-center justify-center'>
											<img
												src='https://i.imgur.com/UrABAeJ.png'
												alt='abc'
												className='h-[208px] w-[277px]'
											/>
										</div>

										<div className='p-4'>
											<div>
												<p className='text-center text-xl font-extrabold text-primary-500'>
													Thao Thiết
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='relative w-[250px] cursor-pointer overflow-hidden rounded-2xl border border-primary-500 bg-white shadow'>
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

									<div className=''>
										<div className='flex items-center justify-center'>
											<img
												src='https://i.imgur.com/us1hDL2.png'
												alt='abc'
												className='h-[208px] w-[277px]'
											/>
										</div>

										<div className='p-4'>
											<div>
												<p className='text-center text-xl font-extrabold text-primary-500'>
													Bệ Ngạn
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='relative w-[250px] cursor-pointer overflow-hidden rounded-2xl border border-primary-500 bg-white shadow'>
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

									<div className=''>
										<div className='flex items-center justify-center'>
											<img
												src='https://i.imgur.com/1DJ1M03.png'
												alt='abc'
												className='h-[208px] w-[277px]'
											/>
										</div>

										<div className='p-4'>
											<div>
												<p className='text-center text-xl font-extrabold text-primary-500'>
													Nhai Xế
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<img src='https://i.imgur.com/Bf4uhpM.png' className='h-[588px]' alt='' />
						</div>
					</div>
					<div className='flex items-center justify-center pb-20 pt-5'>
						<Button className='px-32 py-4'>
							<div className='text-lg font-medium text-[#494949]'>Xem tất cả</div>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default StoryPage;
