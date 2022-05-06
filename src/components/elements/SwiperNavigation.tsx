import React from 'react'
import { useSwiper } from "swiper/react";

export const SwiperBtnPrev = () => {
  const swiper = useSwiper();
	return (
		<button 
			className="navigation__btn" 
			onClick={() => swiper.slidePrev()}
		>
			<svg width={27} height={16} viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M26.371 9.42589L26.371 15.4043L13.4009 5.98071L0.430786 15.4043L0.430787 9.42589L13.4009 0.00230387L26.371 9.42589Z" fill="inherit" />
			</svg>
		</button>
	)
}
export const SwiperBtnNext = () => {
  const swiper = useSwiper();
	return (
		<button 
			className="navigation__btn" 
			onClick={() => swiper.slideNext()}
		>
			<svg width={26} height={16} viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M-0.000990508 6.57606L-0.000989914 0.597654L12.9691 10.0212L25.9392 0.597656L25.9392 6.57606L12.9691 15.9996L-0.000990508 6.57606Z" fill="inherit" />
			</svg>	
		</button>
	)
}