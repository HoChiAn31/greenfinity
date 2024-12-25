import React, { ReactNode, ChangeEventHandler } from 'react';
import { Minus, Plus } from '../components/icon';
import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';

interface Option {
	id: string;
	value: string;
	label: string;
}

interface FilterSectionProps {
	title: string;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children?: ReactNode;
	type?: 'checkbox' | 'radio' | 'range'; // Added 'range' type
	options?: Option[];
	onChange?: ChangeEventHandler<HTMLInputElement>; // onChange is optional
}

const FilterSection: React.FC<FilterSectionProps> = ({
	title,
	isOpen,
	setIsOpen,
	children,
	type = 'checkbox',
	options = [],
	onChange,
}) => {
	const onChangeBox: CheckboxProps['onChange'] = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};
	return (
		<div>
			{isOpen ? (
				<div
					className='inline-flex h-12 w-[292px] cursor-pointer items-center justify-between rounded-xl border border-[#009383] bg-[#f6f6f6] px-4 py-3'
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='text-lg font-semibold text-[#494949]'>{title}</div>
					{/* <div className='relative h-6 w-6 overflow-hidden' /> */}

					<div>
						<Minus />
					</div>
				</div>
			) : (
				<div
					className='inline-flex w-[292px] items-center justify-between rounded-xl border bg-[#f6f6f6] px-4 py-3'
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='text-lg font-semibold text-[#494949]'>{title}</div>

					<Plus />
				</div>
			)}
			{isOpen && (
				<div className='my-2 inline-flex items-start justify-start rounded-xl border border-[#99d4cd] bg-white p-3'>
					<div className='inline-flex w-[268px] flex-col items-start justify-start gap-4'>
						{options.length > 0 &&
							options.map((option, index) => (
								<div className='inline-flex items-center justify-start'>
									<ConfigProvider
										theme={{
											token: {
												colorPrimary: '#009383',
											},
										}}
									>
										<Checkbox onChange={onChangeBox} className='border-primary-500'>
											<div className='text-base font-normal text-[#494949]'>{option.label}</div>
										</Checkbox>
									</ConfigProvider>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

export default FilterSection;
