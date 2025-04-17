import { Button, ConfigProvider, Input } from 'antd';
import NavigationLink from '../../components/NavigationLink';
import { ArrowRightFromBracket, Coin, Edit } from '../../components/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
	const [active, setActive] = useState<string>('men');
	const navigation = useNavigate();
	const handleSwitch = (value: string) => {
		setActive(value);
	};
	const fallbackImages = [
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallMale1.png&w=64&q=75',
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallFemale1.png&w=64&q=75',
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallFemale2.png&w=64&q=75',
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallFemale3.png&w=64&q=75',
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallMale2.png&w=64&q=75',
		'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FsmallMale3.png&w=64&q=75',
	];
	const handleUpdateProfile = () => {
		navigation('/profile');
	};
	return (
		<div className='my-5'>
			<section className='mx-auto grid max-w-5xl grid-cols-2 gap-8'>
				<div className=''>
					<img
						src={
							active === 'men'
								? 'https://greenfinity.world/assets/images/avatar/bigMale1.png'
								: active === 'woman'
									? 'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FbigFemale1.png&w=640&q=75'
									: active === '#'
										? 'https://greenfinity.world/_next/image/?url=%2Fassets%2Fimages%2Favatar%2FbigFemale2.png&w=640&q=75'
										: ''
						}
						alt=''
					/>
				</div>
				<div className=' '>
					<div>
						<div className='flex items-center gap-2'>
							<div className='text-7xl font-bold text-[#009383]'>Tuyết Anh</div>
							<Edit />
						</div>

						<div className='py-7'>
							<NavigationLink
								type='button'
								content='Nhập mô tả về bạn tại đây'
								to='#'
								variant='outline'
							/>
						</div>
					</div>
					<div className='flex gap-4'>
						{fallbackImages.map((image) => (
							<img
								key={image}
								src={image}
								alt=''
								className='h-[48px] w-[48px] rounded-full border'
							/>
						))}
					</div>
					<section>
						<div className='my-5 max-w-[264px]'>
							<div className='flex flex-1 items-center gap-2 rounded-full bg-primary-500 px-1 py-1'>
								<button
									className={`w-20 rounded-full px-5 py-2 font-bold ${
										active === 'men' ? 'bg-white text-primary-500' : 'text-white hover:opacity-80'
									}`}
									onClick={() => handleSwitch('men')}
								>
									Nam
								</button>

								<button
									onClick={() => handleSwitch('woman')}
									className={`w-20 cursor-pointer rounded-full px-5 py-2 font-bold ${
										active === 'woman' ? 'bg-white text-primary-500' : 'text-white hover:opacity-80'
									}`}
								>
									Nữ
								</button>
								<button
									onClick={() => handleSwitch('#')}
									className={`w-20 cursor-pointer rounded-full px-5 py-2 font-bold ${
										active === '#' ? 'bg-white text-primary-500' : 'text-white hover:opacity-80'
									}`}
								>
									Khác
								</button>
							</div>
						</div>
					</section>

					<section>
						<div className='space-y-4 py-3'>
							<div>
								<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
									Họ và tên:
								</div>
								<Input
									className='outline-none focus:outline-none'
									placeholder='Nhập Họ và tên của bạn'
								/>
							</div>
							<div>
								<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
									Số điện thoại:
								</div>
								<Input
									className='outline-none focus:outline-none'
									placeholder='Nhập số điện thoại của bạn'
								/>
							</div>
							<div>
								<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
									Email:
								</div>
								<Input
									className='outline-none focus:outline-none'
									placeholder='Nhập Email của bạn'
								/>
							</div>
							<div>
								<div className='text-left text-sm font-medium leading-normal text-[#494949]'>
									Ngày sinh:
								</div>
								<Input
									className='outline-none focus:outline-none'
									placeholder='Nhập ngày sinh của bạn'
								/>
							</div>
						</div>
					</section>
				</div>
			</section>
			<div className='my-5 flex items-center justify-center'>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#009383',
						},
					}}
				>
					<Button type='primary' className='px-10 py-5' onClick={handleUpdateProfile}>
						<p className='text-lg font-semibold text-white'>Xác nhận thay đổi</p>
					</Button>
				</ConfigProvider>
			</div>
		</div>
	);
};
export default EditProfilePage;
