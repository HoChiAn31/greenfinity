import SampleNextArrow from '../components/SampleNextArrow';
import SamplePrevArrow from '../components/SamplePrevArrow';

export const settingHomes = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	autoplaySpeed: 1000,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};

export const settingGifts = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	autoplaySpeed: 1000,
	nextArrow: <SampleNextArrow type='gift' />,
	prevArrow: <SamplePrevArrow type='gift' />,
};
export const settingWeeks = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	nextArrow: <SampleNextArrow type='week' />,
	prevArrow: <SamplePrevArrow type='week' />,
};

export const settingProducts = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 2,
	autoplaySpeed: 1000,
	nextArrow: <SampleNextArrow type='product' />,
	prevArrow: <SamplePrevArrow type='product' />,
};
export const settingProduct1s = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 2,
	autoplaySpeed: 1000,
	nextArrow: <SampleNextArrow type='product' />,
	prevArrow: <SamplePrevArrow type='product' />,
};

export const settingStory = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	// autoplay: true,
	autoplaySpeed: 1000,
	nextArrow: <SampleNextArrow type='story' />,
	prevArrow: <SamplePrevArrow type='story' />,
};
