import React, { useState } from 'react';
import { Minus, Plus, Search } from '../components/icon';
import FilterSection from '../components/FilterSection';
import { Input } from 'antd';

const FilterProduct = () => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);
	const [isSortOpen, setIsSortOpen] = useState(false);
	const [isCollectionOpen, setIsCollectionOpen] = useState(false);
	const [isPriceOpen, setIsPriceOpen] = useState(false);
	const [isColorOpen, setIsColorOpen] = useState(false);
	const [isSizeOpen, setIsSizeOpen] = useState(false);
	const handleChange = (e: any) => {
		console.log(`${e.target.id} changed to ${e.target.checked}`);
	};

	const categoryOptions = [
		{ id: 'all', label: 'Tất cả', value: 'all' },
		{ id: 'artToy', label: 'Art Toy', value: 'artToy' },
		{ id: 'household', label: 'Household', value: 'household' },
	];

	const sortOptions = [
		{ id: 'newest', label: 'Mới nhất', value: 'newest' },
		{ id: 'oldest', label: 'Cũ nhất', value: 'oldest' },
		{ id: 'aToZ', label: 'A đến Z', value: 'aToZ' },
		{ id: 'zToA', label: 'Z đến A', value: 'zToA' },
	];

	const collectionOptions = [
		{ id: 'allCollection', label: 'Tất cả', value: 'allCollection' },
		{ id: 'artToyCollection', label: 'Art Toy', value: 'artToyCollection' },
		{ id: 'householdCollection', label: 'Household', value: 'householdCollection' },
	];

	const colorOptions = [
		{ id: 'white', label: 'Trắng', value: 'white' },
		{ id: 'black', label: 'Đen', value: 'black' },
	];

	const sizeOptions = [
		{ id: 's', label: 'S', value: 's' },
		{ id: 'm', label: 'M', value: 'm' },
		{ id: 'l', label: 'L', value: 'l' },
		{ id: 'xl', label: 'XL', value: 'xl' },
		{ id: 'xxl', label: 'XXL', value: 'xxl' },
	];
	return (
		<div className='max-w-[332px] space-y-4 rounded-2xl border border-primary-500 bg-white px-6 py-10 shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)]'>
			<h3 className='text-gray-400- text-2xl font-bold'>Lọc sản phẩm</h3>
			<Input suffix={<Search />} className='h-12 w-[292px]' placeholder='Tìm kiếm' />
			{/* Category Section */}
			<FilterSection
				title='Phân loại'
				isOpen={isCategoryOpen}
				setIsOpen={setIsCategoryOpen}
				options={categoryOptions}
				onChange={handleChange}
			/>

			{/* Sort Section */}
			<FilterSection
				title='Sắp xếp'
				isOpen={isSortOpen}
				setIsOpen={setIsSortOpen}
				type='radio'
				options={sortOptions}
				onChange={handleChange}
			/>

			{/* Collection Section */}
			<FilterSection
				title='Bộ sưu tập'
				isOpen={isCollectionOpen}
				setIsOpen={setIsCollectionOpen}
				options={collectionOptions}
				onChange={handleChange}
			/>

			{/* Price Section */}
			<FilterSection title='Giá' isOpen={isPriceOpen} setIsOpen={setIsPriceOpen}>
				<div className='pl-4'>
					<input type='range' min='8500000' max='10000000' step='10000' className='w-full' />
					<div className='flex justify-between text-sm'>
						<span>8.000.000 đ</span>
						<span>10.000.000 đ</span>
					</div>
				</div>
			</FilterSection>

			{/* Color Section */}
			<FilterSection
				title='Màu sắc'
				isOpen={isColorOpen}
				setIsOpen={setIsColorOpen}
				options={colorOptions}
				onChange={handleChange}
			/>

			{/* Size Section */}
			<FilterSection
				title='Kích cỡ'
				isOpen={isSizeOpen}
				setIsOpen={setIsSizeOpen}
				options={sizeOptions}
				onChange={handleChange}
			/>
		</div>
	);
};

export default FilterProduct;
