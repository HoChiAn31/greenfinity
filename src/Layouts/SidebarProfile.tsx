import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRightFromBracket, Cart, Dresser, User } from '../components/icon';

const SidebarProfile = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavigation = (path: string) => {
		navigate(path);
	};

	const isActive = (path: string) => location.pathname === path;

	return (
		<div>
			<div className='inline-flex h-[260px] w-[342px] flex-col items-start justify-center gap-3 overflow-hidden rounded-xl border border-[#009383] bg-white p-4 shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)]'>
				<button
					className={`inline-flex h-12 items-center justify-between self-stretch rounded-lg border px-4 py-3 ${
						isActive('/profileV2') ? 'bg-[#009383] text-white' : 'bg-[#f6f6f6]'
					}`}
					onClick={() => handleNavigation('/profileV2')}
				>
					<div className='flex h-7 items-center justify-start gap-2'>
						{/* <div className='relative h-7 w-7 overflow-hidden' /> */}
						<User color={isActive('/profileV2') ? '#ffffff' : '#505050'} />
						<div className='text-[17px] font-semibold'>Thông tin cá nhân</div>
					</div>
					{/* <div className='relative h-[30px] w-[31px]' /> */}
					<div className='rotate-180'>
						<ArrowLeft color={isActive('/profileV2') ? '#ffffff' : '#505050'} />
					</div>
				</button>
				<button
					className={`inline-flex h-12 items-center justify-between self-stretch rounded-lg border px-4 py-3 ${
						isActive('/profileV2/orders') ? 'bg-[#009383] text-white' : 'bg-[#f6f6f6]'
					}`}
					onClick={() => handleNavigation('/profileV2/orders')}
				>
					<div className='flex items-center justify-start gap-2'>
						{/* <div className='relative h-7 w-7 overflow-hidden' /> */}
						<Cart color={isActive('/profileV2/orders') ? '#ffffff' : '#505050'} />
						<div className='text-[17px] font-semibold'>Đơn hàng của tôi</div>
					</div>
					<div className='rotate-180'>
						<ArrowLeft color={isActive('/profileV2/orders') ? '#ffffff' : '#505050'} />
					</div>
				</button>
				<button
					className={`inline-flex h-12 items-center justify-between self-stretch rounded-lg border px-4 py-3 ${
						isActive('/profileV2/myOrder') ? 'bg-[#009383] text-white' : 'bg-[#f6f6f6]'
					}`}
					onClick={() => handleNavigation('/profileV2/myOrder')}
				>
					<div className='flex items-center justify-start gap-2'>
						<Dresser color={isActive('/profileV2/myOrder') ? '#ffffff' : '#505050'} />

						<div className='text-[17px] font-semibold'>Sản phẩm của tôi</div>
					</div>
					<div className='rotate-180'>
						<ArrowLeft color={isActive('/profileV2/myOrder') ? '#ffffff' : '#505050'} />
					</div>
				</button>
				<button
					className={`inline-flex h-12 items-center justify-between self-stretch rounded-lg border border-[#ff4343] px-4 py-3 ${
						isActive('/profile/logout') ? 'bg-[#009383] text-white' : 'bg-[#f6f6f6]'
					}`}
					onClick={() => handleNavigation('/profile/logout')}
				>
					<div className='flex items-center justify-start gap-2.5'>
						{/* <div className='relative h-7 w-7 overflow-hidden' /> */}
						<ArrowRightFromBracket color='#ff4343' />
						<div className='text-[17px] font-semibold text-[#ff4343]'>Đăng xuất</div>
					</div>
					<div className='relative h-[30px] w-[31px]' />
				</button>
			</div>
		</div>
	);
};

export default SidebarProfile;
