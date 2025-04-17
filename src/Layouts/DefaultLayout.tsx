import { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import SidebarProfile from './SidebarProfile';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
	const location = useLocation();

	const name = location.pathname;
	// if (name === "/login") {
	//   return (
	//     <div className="bg-[#CCE9E6] min-h-screen">
	//       <main>{children}</main>
	//     </div>
	//   );
	// }
	if (name.startsWith('/profileV2')) {
		return (
			<div
				className={`flex min-h-screen flex-col bg-[#F2FFFD] ${
					name === '/' ? 'bg-multiple-home' : 'bg-multiple'
				}`}
			>
				<Header />
				<main className={`flex-grow ${name === '/' ? '' : 'pt-[100px]'} `}>
					<div className='mx-auto flex max-w-[1480px] items-start gap-4 pt-[60px]'>
						<SidebarProfile />
						<div className=''>{children}</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
	return (
		<div
			className={`flex min-h-screen flex-col bg-[#F2FFFD] ${
				name === '/' ? 'bg-multiple-home' : 'bg-multiple'
			}`}
		>
			<Header />
			<main className={`flex-grow ${name === '/' ? '' : 'pt-[100px]'}`}>
				<div className='my-10'>{children}</div>
			</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
// https://i.imgur.com/Ac2o44y.png
//
