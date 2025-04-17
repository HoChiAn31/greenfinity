import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from './icon';

interface LinkComponentProps {
	to: string;
	content: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	type?: 'button' | 'nav' | 'subNav' | 'navLogin' | '';
	icon?: boolean;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	bgColor?: string;
	textColor?: string;
	variant?: string;
}

const NavigationLink: FC<LinkComponentProps> = ({
	to,
	className,
	type,
	content,
	iconLeft,
	iconRight,
	bgColor = 'bg-primary-500',
	variant,
}) => {
	const location = useLocation();

	const isActive = location.pathname === to;
	if (type === 'button') {
		if (variant === 'outline') {
			return (
				<Link
					to={to}
					className={`w-60 text-primary-500 ${
						iconLeft || iconRight ? 'flex items-center gap-3' : ''
					} rounded-lg border border-primary-500 px-6 py-2 text-center font-bold hover:opacity-70 ${className} `}
				>
					{iconLeft}
					{content}
					{iconRight}
				</Link>
			);
		}
		return (
			<Link
				to={to}
				className={` ${bgColor} min-w-40 text-white ${
					iconLeft || iconRight ? 'flex items-center gap-3' : ''
				} rounded-lg px-6 py-3 text-center hover:opacity-90 ${className} `}
			>
				{iconLeft}
				{content}
				{iconRight}
			</Link>
		);
	}
	if (type === 'nav') {
		return (
			<Link
				to={to}
				className={`text-base font-bold text-[#494949] hover:text-teal-600 ${className} ${
					isActive ? 'text-primary-500' : ''
				}`}
			>
				{content}
			</Link>
		);
	}
	if (type === 'subNav') {
		return (
			<Link
				to={to}
				className={`relative text-base font-bold text-[#494949] hover:text-teal-600 ${className} ${
					isActive ? 'text-primary-500' : ''
				}`}
			>
				{content}
				{isActive && (
					<div className='absolute -right-4 -top-1'>
						<Leaf color='#009383' />
					</div>
				)}
			</Link>
		);
	}
	if (type === 'navLogin') {
		return (
			<Link
				to={to}
				className={`border-b-2 border-b-transparent text-base font-bold hover:text-teal-600 ${className} ${
					isActive ? 'border-b-primary-500 text-primary-500' : 'text-[#888888]'
				}`}
			>
				{content}
			</Link>
		);
	}
	return (
		<Link to={to} className={`${className}`}>
			Link
		</Link>
	);
};
export default NavigationLink;
