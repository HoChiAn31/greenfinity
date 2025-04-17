import { useState } from 'react';
import NavigationLink from '../../components/NavigationLink';
import { Checkbox, CheckboxProps, ConfigProvider, Input } from 'antd';

const RegisterPage = () => {
	const [isOtp, setIsOtp] = useState<boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(true);
	const onChange: CheckboxProps['onChange'] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	return (
		<div className='mb-20 mt-5 flex items-center'>
			<div className='relative mx-auto max-w-lg overflow-hidden rounded-lg bg-white px-12 py-8 text-center shadow-lg'>
				<>
					<div
						className='absolute -left-12 top-0 h-24 w-24 rotate-180 bg-contain bg-no-repeat'
						style={{
							backgroundImage: 'url(https://i.imgur.com/jGaTtgj.png)',
						}}
					></div>
					<h1 className='z-40 mb-4 text-3xl font-bold text-teal-600'>
						<img
							src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_green_32864f3821.png&w=1080&q=75'
							alt=''
						/>
					</h1>
					{isOtp && (
						<>
							<div className='my-10'>
								<h2 className='mb-10 text-lg font-semibold text-teal-600'>NHẬP OTP</h2>
								<div className="font-['Inter'] text-base font-medium leading-normal text-[#494949]">
									Một mã OTP vừa được gửi vào số 0978603870
								</div>
								<div className='flex justify-center space-x-2'>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
									<input
										type='text'
										className='h-12 w-12 rounded border border-gray-300 text-center text-xl'
									/>
								</div>
								{/* <div className="text-[#ff0000]  text-sm font-normal font-['Inter'] leading-[21px]">
                Mã OTP không hợp lệ
              </div> */}
								<div>
									<span className='text-base font-normal leading-normal text-[#494949]'>
										Thời gian còn lại:{' '}
									</span>
									<span className='text-base font-normal leading-normal text-[#009383]'>
										5 phút 00 giây
									</span>
								</div>
							</div>

							<p className='mb-4 mt-24 text-gray-700'>
								Bạn chưa nhận được mã?{' '}
								<a href='#' className='text-teal-600'>
									Gửi lại mã
								</a>
							</p>
							<div className='relative z-50'>
								<button className='w-full rounded bg-teal-600 px-4 py-2 text-white'>
									Xác nhận
								</button>
							</div>
						</>
					)}
					{isLogin && (
						<>
							<div className='flex items-center justify-center gap-8'>
								<NavigationLink type='navLogin' content='Đăng nhập' to='/login' />
								<NavigationLink type='navLogin' content='Đăng ký' to='/register' />
							</div>
							<div className='min-h-[220px] space-y-6 py-3'>
								<div>
									<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
										Họ và tên:
									</div>
									<Input className='focus:outline-none' placeholder='Nhập họ và tên của bạn' />
								</div>
								<div>
									<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
										Số điện thoại:
									</div>
									<Input className='focus:outline-none' placeholder='Nhập số điện thoại của bạn' />
								</div>
								<div>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Checkbox onChange={onChange} className='border-primary-500'>
											<div>
												<p className='text-xs font-normal text-[#494949]'>
													Tôi đồng ý với tất cả
													<span className='text-xs font-normal text-[#009383] underline'>
														{' '}
														điều khoản và thể lệ tham gia
													</span>
													. Nền tảng và thương hiệu được phép sử dụng thông tin cá nhân tôi đã cung
													cấp.
												</p>
											</div>
										</Checkbox>
									</ConfigProvider>
								</div>
							</div>

							<div className='relative z-50'>
								<button className='w-full rounded bg-teal-600 px-4 py-2 text-white'>
									Đăng nhập
								</button>
							</div>
						</>
					)}
					<div
						className='absolute -right-8 bottom-2 h-24 w-24 bg-contain bg-no-repeat'
						style={{
							backgroundImage: 'url(https://i.imgur.com/jGaTtgj.png)',
						}}
					></div>
				</>
			</div>
		</div>
	);
};

export default RegisterPage;
