import Slider from 'react-slick';
import NavigationLink from '../../components/NavigationLink';
import { settingHomes, settingProducts } from '../../constants/sliderSetting';
import Banner from '../../components/Banner';
import { Cart, Leaf } from '../../components/icon';
import { Button } from 'antd';
import ProductCard from '../../components/ProductCard';
import FilterProduct from '../../Layouts/FilterProduct';

const StorePage = () => {
	return (
		<div className='my-10'>
			<Slider {...settingHomes} className='slick-home'>
				<div>
					<div
						className=''
						style={{
							backgroundImage: "url('https://i.imgur.com/NAdyz8N.png')",
							backgroundSize: '50% 90%',
							backgroundPosition: '99% -1%',
							height: '90vh',
							backgroundRepeat: 'no-repeat',
							// display: 'flex',
							// justifyContent: 'flex-end',
							// alignItems: 'flex-start',
							// padding: '20px',
						}}
					>
						<div className='mx-auto max-w-[1200px]'>
							<div className='flex -translate-x-[10%] translate-y-[50%] flex-col items-start text-left'>
								<p className='text-4xl font-semibold text-primary-500'>Coaster Set</p>
								<div className='text-5xl font-extrabold uppercase leading-[56px] text-primary-500'>
									SUNFLOWER
								</div>
								<div className='w-[600px] pb-5 text-sm font-normal leading-[24px] text-gray-400'>
									Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus
									turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo volutpat
									arcu massa. Scelerisque vestibulum tellus rhoncus arcu blandit sem auctor donec.
									Vulputate quis dis mauris a id. Blandit porta et libero at elit vitae. Tincidunt
									mi eget tristique vestibulum dolor nulla nascetur tellus non. Elementum justo eget
									odio non ornare. Cursus habitant nisi ac aliquam. Cras nibh dictumst consequat
									enim et sit et quam. A cras varius non rhoncus congue. Varius amet id ultricies
									pellentesque morbi pharetra turpis. Adipiscing pharetra mollis ornare sit nibh.
									Amet sagittis tellus ut scelerisque dolor auctor. Libero justo pellentesque
									pulvinar dolor...
								</div>

								<NavigationLink
									content={<p className='text-lg font-semibold text-white'>Tìm hiểu thêm</p>}
									style='button'
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
								style='button'
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
									style='button'
									to='/station'
									className='border border-white'
								/>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
			</Slider>
			<section>
				<Banner label='Sản phẩm mới' />
				<div className='mx-auto flex max-w-[1480px] gap-5'>
					<div className='relative w-[464px] overflow-hidden rounded-2xl bg-white shadow'>
						<div
							className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-cover bg-center'
							style={{
								backgroundImage:
									'url("https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2F937213862ce1b55397e8dff627d1b647.png?alt=media&token=3f5534b3-5bf3-424a-bd37-f999a70b20fe")',
								backgroundSize: 'cover', // Ensures the image covers the entire div
								backgroundPosition: 'left', // Centers the image within the div
								backgroundRepeat: 'no-repeat', // Prevents the image from repeating
								backgroundAttachment: 'fixed', //
							}}
						></div>
						<div className='absolute right-4 top-4 cursor-pointer'>
							<Cart />
						</div>
						<div>
							<div className='flex items-center justify-center'>
								<img
									src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct1.png?alt=media&token=474f9061-cf8f-4e98-9c37-aeb325a75217'
									alt=''
									className='h-[600px] w-[399px]'
								/>
							</div>
							<div className='-mt-10 p-4'>
								<div className='rounded-2xl border p-4'>
									<div className='flex max-w-[104px] items-center gap-2 rounded-3xl bg-[#DDE7FF] px-3 py-1'>
										<Leaf />
										<p className='font-medium text-[#0085FF]'>Art toy</p>
									</div>
									<div>
										<p className='font-semibold text-gray-600'>SUNFLOWER COASTER SET</p>
									</div>
									<div>
										<p className='text-xl font-extrabold text-primary-500'>800.000đ</p>
									</div>
									<Button className='w-full bg-primary-500 text-white'>Mua ngay</Button>
								</div>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-3 gap-5'>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET'
							price='800.000đ'
							color='#9644ff'
						/>
					</div>
				</div>
			</section>
			<section>
				<Banner label='Sản phẩm bán chạy' />
				<div className='flex gap-28'>
					<div className='relative h-[600px] w-[600px]'>
						<div className='relative h-[600px] w-[600px] overflow-hidden rounded-full bg-[#99D4CD]'>
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
						</div>
						<div className='absolute -right-48 bottom-10'>
							<img src='https://i.imgur.com/g2XdIRs.png' alt='' height={660} width={660} />
						</div>
					</div>
					<div>
						<div className='space-y-4 p-4'>
							<div className='flex max-w-[148px] items-center gap-2 rounded-3xl bg-[#F4DDFF] px-3 py-1'>
								<Leaf color='#9644FF' />
								<p className='text-xl font-medium text-[#9644FF]'>Household</p>
							</div>
							<div>
								<p className='text-4xl font-semibold text-gray-600'>SUNFLOWER COASTER SET</p>
							</div>
							<div>
								<p className='text-3xl font-extrabold text-primary-500'>800.000đ</p>
							</div>
							<div className='flex items-center gap-2'>
								<Button className='bg-primary-500 px-10 py-5 text-white'>Mua ngay</Button>
								<Cart />
							</div>
						</div>
						<div className='mx-auto mt-5 max-w-[1000px]'>
							<Slider {...settingProducts} className='slick-home'>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET1'
									price='800.000đ'
									color='#9644ff'
								/>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET2'
									price='800.000đ'
									color='#9644ff'
								/>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET3'
									price='800.000đ'
									color='#9644ff'
								/>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET4'
									price='800.000đ'
									color='#9644ff'
								/>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET5'
									price='800.000đ'
									color='#9644ff'
								/>
								<ProductCard
									productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
									category='Household'
									title='SUNFLOWER COASTER SET6'
									price='800.000đ'
									color='#9644ff'
								/>
							</Slider>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Banner label='Tất cả sản phẩm' />
				<div className='mx-auto flex max-w-[1200px] gap-10'>
					<div>
						<FilterProduct />
					</div>
					<div className='grid grid-cols-3 gap-x-20 gap-y-10'>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
						<ProductCard
							productImage='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2Fproduct2.png?alt=media&token=eab6f436-e75c-4e01-87c9-623a46e5153e'
							category='Household'
							title='SUNFLOWER COASTER SET6'
							price='800.000đ'
							color='#9644ff'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default StorePage;
