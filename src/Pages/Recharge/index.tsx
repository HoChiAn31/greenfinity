import { useState } from 'react';
import GreecoinCard from '../../components/GreecoinCard';
import StepIndicator from '../../components/StepIndicator';
import { Check, Coin } from '../../components/icon';
import { Button } from 'antd';
import ItemPay from '../../components/ItemPay';

const steps = [
	{ id: 1, label: 'Nạp tiền', isActive: false },
	{ id: 2, label: 'Thanh toán', isActive: false },
	{ id: 3, label: 'Hoàn tất', isActive: false },
];
const cardsData = [
	{ greecoin: 50, price: '25,000', imgSrc: 'https://via.placeholder.com/33x38' },
	{ greecoin: 400, price: '200,000', imgSrc: 'https://via.placeholder.com/33x38' },
	// Add more cards data here
];
const options = [
	{ src: 'https://i.imgur.com/RYbE3P7.png', label: 'MoMo' },
	{ src: 'https://i.imgur.com/LpIqcW9.png', label: 'Apple Pay' },
	{ src: 'https://i.imgur.com/71yQr43.png', label: 'VnPay' },
	{
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-oM_Rzaa0qVSLEQY4-0VDLl1sdudCFFv-Q&s',
		label: 'Amazon Pay',
	},
	{ src: 'https://i.imgur.com/PvxCmIt.png', label: 'Thẻ nội địa' },
	{ src: 'https://i.imgur.com/p7ZNol5.png', label: 'Thẻ quốc tế' },
];
function RechargePage() {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const handleNextStep = () => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePreviousStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleItemClick = (index: number) => {
		setActiveIndex(index);
	};
	return (
		<div className='mx-auto max-w-[806px]'>
			{/* */}
			<div className='mx-auto my-5 flex h-11 w-[677px] items-center'>
				<>
					<div className='flex justify-center gap-2'>
						<div
							className={`${currentStep === 2 || currentStep === 3 ? 'bg-primary-500' : 'bg-[#f2fffd]'} flex items-center justify-center gap-2 overflow-hidden rounded-[68px] py-1 pl-1 pr-3 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)]`}
						>
							<div
								className={` ${currentStep === 2 || currentStep === 3 ? 'bg-[#f2fffd]' : 'bg-primary-500'} inline-flex h-9 w-9 flex-col items-center justify-center overflow-hidden rounded-full py-4`}
							>
								{currentStep === 2 || currentStep === 3 ? (
									<div>
										<Check />
									</div>
								) : (
									<div className='text-xl font-bold text-white'>1</div>
								)}
							</div>
							<div
								className={`${currentStep === 2 || currentStep === 3 ? 'text-[#f2fffd]' : 'text-primary-500'} text-base font-bold`}
							>
								Nạp tiền
							</div>
						</div>
					</div>

					<div className='h-[2px] w-[20%] bg-primary-500'></div>

					<div className='flex justify-center'>
						<div
							className={`${currentStep === 3 ? 'bg-primary-500' : 'bg-[#f2fffd]'} flex items-center justify-center gap-2 overflow-hidden rounded-[68px] py-1 pl-1 pr-3 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)]`}
						>
							<div
								className={` ${currentStep === 3 ? 'bg-[#f2fffd]' : 'bg-primary-500'} inline-flex h-9 w-9 flex-col items-center justify-center overflow-hidden rounded-full py-4`}
							>
								{currentStep === 3 ? (
									<div>
										<Check />
									</div>
								) : (
									<div className='text-xl font-bold text-white'>2</div>
								)}
							</div>
							<div
								className={`${currentStep === 3 ? 'text-[#f2fffd]' : 'text-primary-500'} text-base font-bold`}
							>
								Thanh toán
							</div>
						</div>
					</div>

					<div className='h-[2px] w-[20%] bg-primary-500'></div>

					<div className='flex justify-center'>
						<div className='flex items-center justify-center gap-2 overflow-hidden rounded-[68px] bg-white py-1 pl-1 pr-4 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)]'>
							<div className='inline-flex h-9 w-9 flex-col items-center justify-center overflow-hidden rounded-[58px] bg-[#cce9e6] py-4'>
								<div className='text-xl font-bold text-[#009383]'>3</div>
							</div>
							<div className='text-base font-bold text-[#666666]'>Hoàn tất</div>
						</div>
					</div>
				</>
			</div>

			{/*  */}
			<div className='my-5 inline-flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-white px-[93px] py-8 shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)]'>
				{currentStep === 1 && (
					<>
						<div className='mb-7 inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#15bdd6] px-5'>
							<div className='text-center text-[28px] font-bold uppercase leading-[33.60px] text-white'>
								nạp tiền
							</div>
						</div>
						<div className='flex flex-col items-end justify-start gap-7'>
							<div className='inline-flex h-[58px] items-center justify-between self-stretch overflow-hidden rounded-xl border border-[#009383] bg-[#f2fffd] px-3.5 py-2.5'>
								<div className='text-xl font-semibold text-[#494949]'>
									GreeCoin hiện tại của bạn:
								</div>
								<div className='flex items-center justify-start gap-1'>
									<div className="font-['Inter'] text-xl font-semibold text-[#009383]">100</div>
									<Coin />
								</div>
							</div>
							<div className='inline-flex w-[632px] flex-wrap items-start justify-start gap-4'>
								<GreecoinCard />
							</div>
							<div
								onClick={handleNextStep}
								className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
							>
								<div className='text-lg font-medium text-white'>Tiếp tục</div>
							</div>
						</div>
					</>
				)}
				{currentStep === 2 && (
					<div>
						<div className='mb-7 inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#15bdd6] px-5'>
							<div className='text-center text-[28px] font-bold uppercase leading-[33.60px] text-white'>
								Chọn phương thức thanh toán
							</div>
						</div>
						<div className='mx-auto w-[262px] rounded-xl border border-primary-500 bg-[#F2FFFD] py-4 text-center'>
							<div className='flex items-center justify-center'>
								<img
									src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2FFrame%20627804.png?alt=media&token=ea88ad89-63bf-4927-990e-b28725702f83'
									alt=''
								/>
							</div>
							<p className='text-2xl font-bold uppercase text-[#FBC000]'>1000 GREECOIN</p>
							<p className='text-base font-bold text-primary-500'>500,000 đ</p>
							<p className='text-sm text-gray-500'>Nạp tiền vào GREEnifinity</p>
						</div>

						<div className='mx-auto my-5 grid max-w-[372px] grid-cols-3 gap-4'>
							{options.map((option, index) => (
								<div key={index} onClick={() => handleItemClick(index)} className='cursor-pointer'>
									<ItemPay src={option.src} label={option.label} active={activeIndex === index} />
								</div>
							))}
						</div>

						<div className='mt-5 flex flex-col gap-4'>
							<div
								onClick={handleNextStep}
								className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
							>
								<div className='text-lg font-medium text-white'>Tiếp tục</div>
							</div>
							<div
								onClick={handlePreviousStep}
								className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg border border-primary-500 px-6 py-2.5 text-primary-500 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
							>
								<div className='text-lg font-medium'>Quay lại</div>
							</div>
						</div>
					</div>
				)}
				{currentStep === 3 && (
					<div className='w-full text-center'>
						<div className='mb-7 inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#15bdd6] px-5'>
							<div className='text-center text-[28px] font-bold uppercase leading-[33.60px] text-white'>
								Kết quả giao dịch
							</div>
						</div>
						{isSuccess ? (
							<>
								<div>
									<div className='flex items-center justify-center'>
										<img src='https://i.imgur.com/Xa4zar7.png' alt='' />
									</div>
									<p className='text-3xl font-bold text-[#FBC000]'>100.000đ</p>
									<p className='text-base font-bold text-primary-500'>Giao dịch thành công</p>
									<p className='text-sm text-gray-500'>Thời gian thanh toán: 14:05 - 28/11/2023</p>
								</div>
								<div className='mt-5 flex flex-col gap-4'>
									<div
										onClick={handleNextStep}
										className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
									>
										<div className='text-lg font-medium text-white'>Tiếp tục giao dịch</div>
									</div>
									<div
										onClick={handleNextStep}
										className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg border border-primary-500 px-6 py-2.5 text-primary-500 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
									>
										<div className='text-lg font-medium'>Xem số GreeCoin hiện có</div>
									</div>
								</div>
							</>
						) : (
							<>
								<div>
									<div className='flex items-center justify-center'>
										<img
											src='https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2FFrame%20627760.png?alt=media&token=b9de5b10-dbb8-4265-8a5a-fb507d4153be'
											alt=''
										/>
									</div>
									<p className='text-3xl font-bold text-[#FBC000]'>100.000đ</p>
									<p className='text-base font-bold text-primary-500'>Giao dịch không thành công</p>
									<p className='text-sm text-gray-500'>Thời gian thanh toán: 14:05 - 28/11/2023</p>
								</div>
								<div className='mt-5 flex flex-col gap-4'>
									<div
										onClick={handleNextStep}
										className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
									>
										<div className='text-lg font-medium text-white'>Liên hệ hỗ trợ</div>
									</div>
									<div
										onClick={handleNextStep}
										className='inline-flex h-11 cursor-pointer items-center justify-center gap-2 self-stretch overflow-hidden rounded-lg border border-primary-500 px-6 py-2.5 text-primary-500 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'
									>
										<div className='text-lg font-medium'>Xem số GreeCoin hiện có</div>
									</div>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</div>
		// </div>
		// </div>
	);
}

export default RechargePage;
