import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper";

import ButtonMain from './ButtonMain'

const Welcome = () => {
	return (
	<section className="welcome">
		<div className="wrapper welcome__wrapper">
			<div className="welcome__left">
				<p className="txt txt48x68">Welcome to...</p>
				<p className="txt txt18x26">Your future complete automated <a href='./' className="cLightGreen">parking garage management</a> solution</p>
				<ButtonMain text="Learn More" />
			</div>
			<div className="welcome__pictures">
				<Swiper 
					className="welcome__sliders"
					effect={"creative"}
					creativeEffect={{
						prev: {
							shadow: true,
							translate: [0, 0, -400],
						},
						next: {
							translate: ["100%", 0, 0],
						},
					}}
					loop={true}
					mousewheel={true}
					modules={[Mousewheel, EffectCreative]}
				>
					<SwiperSlide className='welcome__slide'><img src="./assets/img/background/homaPage01.jpg" alt="" /></SwiperSlide>
					<SwiperSlide className='welcome__slide'><img src="./assets/img/background/homaPage02.jpg" alt="" /></SwiperSlide>
					<SwiperSlide className='welcome__slide'><img src="./assets/img/background/homaPage03.jpg" alt="" /></SwiperSlide>
					<SwiperSlide className='welcome__slide'><img src="./assets/img/background/homaPage04.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
	)
}

export default Welcome