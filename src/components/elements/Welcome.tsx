import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, EffectCreative } from "swiper";

import { useParallax  } from 'react-scroll-parallax';


import ButtonMain from './ButtonMain'

const Welcome = () => {
  const [width, setWidth] = useState(false);
  
  useEffect(() => {
		setWidth(!!(window.innerWidth > 768))

    window.addEventListener("resize", () => {
      setWidth(!!(window.innerWidth > 768))
    });
  }, []);

	const {ref: infoBlock} = useParallax<HTMLDivElement>(width ? {speed: 20, translateY: [-50, 50]} : {speed: 0, translateY: [0, 0]});
	
	return (
	<section className="welcome">
		<div className="wrapper welcome__wrapper">
			<div className="welcome__left" ref={infoBlock}>
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
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					loop={true}
					mousewheel={true}
					modules={[Autoplay, Mousewheel, EffectCreative]}
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