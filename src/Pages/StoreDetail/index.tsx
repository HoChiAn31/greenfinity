import { Pagination, Rate } from 'antd';
import { ArrowLeft, BookLine, Leaf, Like, Minus, Plus } from '../../components/icon';
import Comment from '../../components/Comment';
import { settingProduct1s, settingProducts } from '../../constants/sliderSetting';
import ProductCard from '../../components/ProductCard';
import Slider from 'react-slick';

function StoreDetailPage() {
	return (
		<>
			<div className='mx-auto max-w-[1244px]'>
				<section className='inline-flex h-[527px] items-end justify-center gap-6'>
					<div className='flex items-center gap-6'>
						<div className='relative my-auto flex w-[98px] flex-col items-start justify-start'>
							<div className='mb-2 flex w-full rotate-90 cursor-pointer items-center justify-center'>
								<ArrowLeft />
							</div>
							<div className='inline-flex flex-col items-start justify-start gap-4'>
								<div className='relative flex h-[98px] w-[98px] items-center justify-center rounded-[9px] border border-[#009383] bg-white opacity-40'>
									<img className='h-[73px] w-[73px]' src='https://i.imgur.com/Uv8WC3O.png' />
								</div>
								<div className='relative flex h-[98px] w-[98px] items-center justify-center rounded-[9px] border border-[#009383] bg-white'>
									<img className='h-[73px] w-[73px]' src='https://i.imgur.com/Uv8WC3O.png' />
								</div>
								<div className='relative flex h-[98px] w-[98px] items-center justify-center rounded-[9px] border border-[#009383] bg-white opacity-40'>
									<img className='h-[73px] w-[73px]' src='https://i.imgur.com/Uv8WC3O.png' />
								</div>
								<div className='relative flex h-[98px] w-[98px] items-center justify-center rounded-[9px] border border-[#009383] bg-white opacity-40'>
									<img className='h-[73px] w-[73px]' src='https://i.imgur.com/Uv8WC3O.png' />
								</div>
							</div>
							<div className='mt-2 flex w-full -rotate-90 cursor-pointer items-center justify-center'>
								<ArrowLeft />
							</div>
						</div>
						<div className='relative flex h-[527px] w-[464px] items-center justify-center rounded-xl bg-white shadow-[0px_0px_14px_0px_rgba(0,0,0,0.25)]'>
							<div
								className='absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-cover bg-center'
								style={{
									backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2F937213862ce1b55397e8dff627d1b647.png?alt=media&token=3f5534b3-5bf3-424a-bd37-f999a70b20fe")`,
									backgroundSize: 'cover',
									backgroundPosition: 'left',
									backgroundRepeat: 'no-repeat',
									backgroundAttachment: 'fixed',
								}}
							></div>
							<img className='z-40 h-[357px] w-[353px]' src='https://i.imgur.com/Uv8WC3O.png' />
						</div>
					</div>
					<div className='inline-flex flex-col items-start justify-start gap-1'>
						<div className='inline-flex h-[27.53px] items-center justify-start gap-[3px] rounded-[20px] bg-[#f4ddff] px-2 py-1'>
							<Leaf color='#9644FF' />
							<div className='text-lg font-medium text-[#9644ff]'>Household</div>
						</div>
						<div className='text-[32px] font-semibold text-[#373737]'>COOKIE COASTER SET</div>

						<div className='text-[32px] font-bold text-[#009383]'>800.000đ</div>

						<div className='flex flex-col items-start justify-start gap-3'>
							<div className='inline-flex items-start justify-start gap-6'>
								<div className='flex h-12 items-center justify-start gap-3.5 overflow-hidden rounded-lg border border-[#929292] bg-white px-3'>
									{/* - */}
									<div className='cursor-pointer'>
										<Minus />
									</div>
									<div className='px-3 text-xl font-semibold text-[#494949]'>1</div>
									<div className='cursor-pointer'>
										<Plus />
									</div>
									{/* + */}
								</div>

								<div className='flex h-12 w-[482px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary-500 bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
									<div className='text-lg font-bold text-primary-500'>Thêm vào giỏ hàng</div>
								</div>
							</div>
							<div className='inline-flex h-12 items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-primary-500 px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-lg font-bold text-white'>Mua ngay</div>
							</div>
						</div>
						<div className='my-2 h-[0px] w-[633px] border border-[#b6b6b6]'></div>
						<div className='flex flex-col items-start justify-start gap-[18px]'>
							<div className='text-xl font-bold text-[#009383]'>Chi tiết sản phẩm</div>
							<div className='flex h-[135px] flex-col items-center justify-center gap-2 rounded-[10px] border border-[#66beb5] bg-white px-[13px] py-3.5'>
								<ul className='self-stretch'>
									<li className='text-base font-semibold leading-normal text-[#494949]'>
										Kích thước:
										<span className='font-normal'> 100mmL x 100mmW x 30mmH</span>
									</li>
									<li className='text-base font-semibold leading-normal text-[#494949]'>
										Khối lượng nhựa in:
										<span className='font-normal'> 59g</span>
									</li>
									<li className='text-base font-semibold leading-normal text-[#494949]'>
										Lượng nhựa tái chế sử dụng:
										<span className='font-normal'> Khoảng 30%</span>
									</li>
									<li className='text-base font-semibold leading-normal text-[#494949]'>
										Số lượng tổng:
										<span className='font-normal'> 1000 (Bộ)</span>
									</li>
									<li className='text-base font-semibold leading-normal text-[#494949]'>
										Loại nhựa:
										<span className='font-normal'> RePETG</span>
									</li>
								</ul>
							</div>

							<div className='inline-flex h-12 w-[634px] items-center justify-start gap-2 overflow-hidden rounded-lg'>
								<BookLine />
								<div className='text-xl font-medium text-[#009383]'>
									Xem câu chuyện của sản phẩm
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className='mt-40'>
				<div className='text-center text-4xl font-bold uppercase leading-[43.20px] text-[#009383]'>
					ĐÁNH GIÁ SẢN PHẨM
				</div>
				<div className='mx-auto mt-10 h-[1173px] max-w-[1440px] flex-col rounded-2xl bg-white px-[124px] pb-9 pt-[47px] shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)]'>
					<div className='flex'>
						<div className='flex h-[117px] w-[50%] items-center gap-2'>
							<div className='text-[100px] font-bold text-[#009383]'>4.5</div>
							<div className='mt-5'>
								<Rate allowHalf defaultValue={4.5} />
								<div className='text-lg font-medium text-[#009383]'>Trên 500 lượt đánh giá</div>
							</div>
						</div>
						<div className='flex h-[114px] flex-wrap items-start justify-start gap-[18px]'>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#006e62] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-white'>Tất cả</div>
							</div>

							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-[#009383]'>5 Sao (83)</div>
							</div>

							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-[#009383]'>4 Sao (4)</div>
							</div>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-[#009383]'>3 Sao (0)</div>
							</div>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-[#009383]'>2 Sao (10)</div>
							</div>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className='text-base font-bold text-[#009383]'>1 Sao (0)</div>
							</div>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className="font-['Roboto'] text-base font-bold text-[#009383]">
									Có bình luận (44)
								</div>
							</div>
							<div className='flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
								<div className="font-['Roboto'] text-base font-bold text-[#009383]">
									Có hình ảnh/video (30)
								</div>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						<Comment />
						<Comment isBorder />
						<Comment />

						<div className='flex items-center justify-center'>
							<Pagination defaultCurrent={1} total={380} />
						</div>
					</div>
				</div>
			</section>
			<section className='my-20'>
				<div className='text-center text-4xl font-bold uppercase leading-[43.20px] text-[#009383]'>
					SẢN PHẨM LIÊN QUAN
				</div>
				<div className='mx-auto my-10 max-w-[1426px]'>
					<Slider {...settingProduct1s} className='slick-home'>
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
			</section>
		</>
	);
}

export default StoreDetailPage;
