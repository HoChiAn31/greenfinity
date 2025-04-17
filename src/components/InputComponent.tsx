import { Input } from 'antd';
import { FC } from 'react';

interface InputProps {
	value?: string;
	placeholder?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputComponent: FC<InputProps> = ({ value, placeholder, onChange }) => {
	return (
		<Input
			placeholder={placeholder}
			value={value}
			className='inline-flex h-12 items-center justify-start gap-2.5 overflow-hidden rounded-lg border border-[#b6b6b6] bg-white px-4 py-2.5'
		/>
	);
};

export default InputComponent;
