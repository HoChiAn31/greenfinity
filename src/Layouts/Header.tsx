import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SwitchLanguage from '../components/SwitchLanguage';
import { Button, Image } from 'antd';
import NavigationLink from '../components/NavigationLink';
import { ArrowDown, Cart, Coin, SubNavBar } from '../components/icon';
import { useAuth } from '../context/userContext';

const Header: FC = () => {
	// const [isLogin, setIsLogin] = useState<boolean>(true);
	const { isLogin } = useAuth();
	const [countCart, setCountCart] = useState<number>(2);
	const navigate = useNavigate();
	const hanldeLinkProfile = () => {
		navigate('/profile');
	};
	return (
		<div className='fixed top-4 z-[999] w-full'>
			<div className='relative z-[990] mx-auto flex w-[95%] items-center'>
				{/* Left Section */}
				<div className='flex items-center'>
					<img
						src='https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fheader_left.png&w=64&q=100'
						alt='Left decoration'
						className='h-[74px]'
					/>
				</div>

				{/* Middle Section */}
				<div className='relative flex h-[74px] flex-1 items-center justify-between border-b-[5px] border-b-[#e0e0e0] bg-white'>
					{/* Logo */}
					<Link to='/' className='z-50 ml-8 h-[82%] -translate-y-[24%] select-none'>
						<img
							src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Falta-s3.dev-altamedia.com%2Fgreez-cms-dev%2Flogo_f33c229500.png&w=750&q=75'
							alt='Logo'
							className='h-[88px] w-[330px]'
						/>
					</Link>
					{/* Navigation Links */}
					<nav className='flex space-x-6'>
						{/* <NavigationLink to={`/`} content="TRANG CHỦ" style="nav" /> */}
						<NavigationLink to={`/station`} content='TRẠM GREEZ' type='nav' />
						<NavigationLink to={`/world`} content='THẾ GIỚI TÁI SINH' type='nav' />
						<NavigationLink to={`/contribution`} content='THANG ĐÓNG GÓP' type='nav' />
						<NavigationLink to={`/map`} content='BẢN ĐỒ' type='nav' />
						<NavigationLink to={`/minigame`} content='MINI GAME' type='nav' />
					</nav>
					{/* Button */}
					<div className='mr-4 flex items-center gap-3'>
						{!isLogin ? (
							<>
								<SwitchLanguage />
								<NavigationLink
									to='/login'
									type='button'
									content={<p className="font-['Inter'] text-base font-bold">Đăng nhập</p>}
									iconLeft={
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'></path>
											<polyline points='10 17 15 12 10 7'></polyline>
											<line x1='15' y1='12' x2='3' y2='12'></line>
										</svg>
									}
								/>
							</>
						) : (
							<>
								<div className='relative'>
									<Cart />
									<div className='absolute -right-1 top-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500'>
										<p className='text-xs font-bold text-white'>{countCart}</p>
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<img
										src='https://greenfinity.world/_next/image/?url=https%3A%2F%2Fs3.altacloud.biz%2Faquafina-rm%2FCustomerPicture%2F638359165401152787_face.png%3FAWSAccessKeyId%3Daquafina-rm%26Expires%3D1735018519%26Signature%3D2y67m9uXW%252BLgjOW%252Fthaed41nZA4%253D&w=96&q=75'
										className='h-11 w-11 rounded-full border-2 border-primary-500'
									/>
									<div className='cursor-pointer' onClick={hanldeLinkProfile}>
										<div className='flex items-center gap-3'>
											<p className='text-xl font-semibold leading-normal text-[#009383]'>
												Tuyết Anh
											</p>
											<ArrowDown />
										</div>
										<div className='flex items-center gap-2'>
											<p className='text-base font-medium text-[#494949]'>250</p>
											<Coin />
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>

				{/* Right Section */}
				<div className='-ml-1 flex items-center'>
					<img
						src='https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Fheader_left.png&w=64&q=100'
						alt='Right decoration'
						className='h-[74px] scale-x-[-1]'
					/>
				</div>
			</div>

			{/* Background image section */}
			<div className='mx-auto w-[90%]'>
				<div className=' '>
					<div className='relative -mt-[1%] flex items-center justify-center lg:-mt-[2%] xl:-mt-[1%] 2xl:-mt-[1%]'>
						<SubNavBar className='lg:h-[80px]' />
						<div className='absolute top-6 flex items-center gap-8 md:top-4 lg:top-7'>
							<NavigationLink to='/store' content='Cửa hàng' className='uppercase' type='subNav' />
							<NavigationLink
								to='/story'
								content='Câu chuyện'
								className='uppercase'
								type='subNav'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
