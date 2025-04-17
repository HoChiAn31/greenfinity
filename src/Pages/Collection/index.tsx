import FilterProduct from '../../Layouts/FilterProduct';
import Banner from '../../components/Banner';

const dataCollection = [
	{
		id: 1,
		src: 'https://i.imgur.com/7gH97Qt.png',
	},
	{
		id: 2,
		src: 'https://i.imgur.com/YfCV5Ma.png',
	},
	{
		id: 3,
		src: 'https://i.imgur.com/iyQou0k.png',
	},
	{
		id: 4,
		src: 'https://i.imgur.com/8aDTrN2.png',
	},
	{
		id: 5,
		src: 'https://i.imgur.com/gtEnHc6.png',
	},
];

const CardOne = ({ src }: { src: string }) => (
	<div
		className='relative rounded-[20px] bg-white p-2 shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)]'
		style={{
			backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/greenfinity%2F937213862ce1b55397e8dff627d1b647.png?alt=media&token=3f5534b3-5bf3-424a-bd37-f999a70b20fe")`,
			backgroundSize: 'cover',
			backgroundPosition: 'left',
			backgroundRepeat: 'no-repeat',
			// backgroundAttachment: 'fixed',
		}}
	>
		<div className='flex h-[258px] w-[194px] items-center justify-center'>
			<img src={src} />
		</div>
	</div>
);

function CollectionPage() {
	return (
		<div className='mx-auto max-w-[1480px]'>
			<Banner label='BỘ SƯU TẬP' />
			<div className='mb-20 flex items-start justify-center gap-5'>
				{/* filter */}
				<FilterProduct />
				{/* product */}
				<div className='space-y-10'>
					<div className='space-y-3 rounded-2xl bg-white p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]'>
						<div className='text-center text-[32px] font-bold capitalize leading-[41.60px] text-[#009383]'>
							Long Sinh Cửu Tử
						</div>
						<div className='mb-5 grid grid-cols-5 gap-5'>
							{dataCollection.map((data) => (
								<CardOne src={data.src} />
							))}
						</div>
					</div>
					<div className='space-y-3 rounded-2xl bg-white p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]'>
						<div className='text-center text-[32px] font-bold capitalize leading-[41.60px] text-[#009383]'>
							Long Sinh Cửu Tử
						</div>
						<div className='mb-5 grid grid-cols-5 gap-5'>
							{dataCollection.map((data) => (
								<CardOne src={data.src} />
							))}
						</div>
					</div>
					<div className='space-y-3 rounded-2xl bg-white p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]'>
						<div className='text-center text-[32px] font-bold capitalize leading-[41.60px] text-[#009383]'>
							Long Sinh Cửu Tử
						</div>
						<div className='mb-5 grid grid-cols-5 gap-5'>
							{dataCollection.map((data) => (
								<CardOne src={data.src} />
							))}
						</div>
					</div>
					<div className='space-y-3 rounded-2xl bg-white p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]'>
						<div className='text-center text-[32px] font-bold capitalize leading-[41.60px] text-[#009383]'>
							Long Sinh Cửu Tử
						</div>
						<div className='mb-5 grid grid-cols-5 gap-5'>
							{dataCollection.map((data) => (
								<CardOne src={data.src} />
							))}
						</div>
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

export default CollectionPage;
