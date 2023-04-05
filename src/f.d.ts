declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
declare module '*.png' {
	const value: any;
	export default value;
}

declare module '*.jpg' {
	const value: any;
	export default value;
}

declare module 'react-carousel' {
	import { Component, ReactNode } from 'react';

	interface CarouselProps {
		afterSlide?: (currentSlide: number) => void;
		beforeSlide?: (currentSlide: number) => void;
		slideIndex?: number;
		slidesToShow?: number;
		slidesToScroll?: number;
		speed?: number;
		className?: string;
		style?: React.CSSProperties;
		dragging?: boolean;
		swiping?: boolean;
		vertical?: boolean;
		autoplay?: boolean;
		autoplayInterval?: number;
		resetAutoplay?: boolean;
		stopAutoplayOnHover?: boolean;
		useKeyboardArrows?: boolean;
		infiniteLoop?: boolean;
		showArrows?: boolean;
		showStatus?: boolean;
		showIndicators?: boolean;
		children?: ReactNode;
	}

	export default class Carousel extends Component<CarouselProps> {}
}
