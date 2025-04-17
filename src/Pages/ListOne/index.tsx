import FilterProduct from '../../Layouts/FilterProduct';
import Banner from '../../components/Banner';

const CardOne = () => (
	<div
		className='relative rounded-[20px] border-2 border-[#99d4cd] bg-white p-2'
		style={{
			backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2F937213862ce1b55397e8dff627d1b647.png?alt=media&token=3f5534b3-5bf3-424a-bd37-f999a70b20fe")`,
			backgroundSize: 'cover',
			backgroundPosition: 'left',
			backgroundRepeat: 'no-repeat',
			// backgroundAttachment: 'fixed',
		}}
	>
		<div className='flex h-[376px] w-[311px] items-center justify-center'>
			<img src='https://i.imgur.com/IYl2dP5.png' />
		</div>

		<div className='flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-[#009383] px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
			<div className='shrink grow basis-0 text-center text-xl font-bold text-white'>
				SUNFLOWER COASTER SET
			</div>
		</div>
		<div className='absolute left-3 top-3 inline-flex h-7 items-center justify-start gap-[3px] rounded-[20px] bg-[#f4ddff] px-2 py-1'>
			<div className='text-sm font-medium text-[#9644ff]'>Household</div>
		</div>
	</div>
);

function ListOnePage() {
	return (
		<div className='mx-auto max-w-[1480px]'>
			<Banner label='Sản phẩm ĐƠN' />
			<div className='mb-20 flex items-start justify-center gap-5'>
				{/* filter */}
				<FilterProduct />
				{/* product */}
				<div>
					<div className='mb-5 grid grid-cols-3 gap-5'>
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
						<CardOne />
					</div>
					<div className='flex items-center justify-center'>
						<div className='inline-flex h-12 w-[190px] items-center justify-center gap-2 overflow-hidden rounded-[10px] border border-[#009383] bg-white px-6 py-2.5 shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)]'>
							<div className='text-base font-bold text-[#009383]'>Xem thêm</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListOnePage;
