import React, { useState } from 'react';
import { CoinStar } from './icon';

const GreecoinCards = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const cards = [
		{ coins: 50, price: '25,000 đ' },
		{ coins: 100, price: '50,000 đ' },
		{ coins: 200, price: '100,000 đ' },
		{ coins: 400, price: '200,000 đ' },
		{ coins: 500, price: '250,000 đ' },
		{ coins: 1000, price: '500,000 đ' },
	];

	const handleCardClick = (index: any) => {
		setActiveIndex(index);
	};

	return (
		<div className='grid grid-cols-3 gap-4'>
			{cards.map((card, index) => (
				<div
					key={index}
					className={`w-[200px] rounded-xl border ${activeIndex === index ? 'border-primary-500 bg-[#e7f5ff]' : 'border-[#b6b6b6] bg-white'}`}
					onClick={() => handleCardClick(index)}
				>
					<div>
						<div className='py-4'>
							<div className='text-center text-lg font-bold uppercase text-[#fabf00]'>
								{card.coins} Greecoin
							</div>

							<div className='flex items-center justify-center'>
								<CoinStar />
							</div>
						</div>
						<div className='border-t py-2 text-center text-lg font-bold text-[#009383]'>
							<p>{card.price}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default GreecoinCards;
