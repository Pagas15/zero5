import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, FreeMode, Thumbs, Mousewheel } from "swiper";
import { useParallax  } from 'react-scroll-parallax';

import { SwiperBtnPrev, SwiperBtnNext } from './SwiperNavigation';


const HomeCarts = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const {ref: navbar} = useParallax<HTMLDivElement>({speed: 10, translateX: [-50, 50], translateY: [0, 0]});

	const anwdiaw = () => {
		console.log(thumbsSwiper && thumbsSwiper.activeIndex);
	}
	return (
    <section className="homeCarts">
			<div className='homeCarts__wrapper wrapper'>
				<Swiper 
					className="homeCarts__slider"
					mousewheel={true}
					modules={[Autoplay, Thumbs, Mousewheel]}
					thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null  }}
					direction={"vertical"}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
				>
					<SwiperSlide className='homeCarts__slide'>
						<div className="homeCarts__image">
							<img src="./assets/img/elements/homeSlide01.png" alt="" />
						</div>
						<div className="homeCarts__info">
							<h4 className="txt txt28x34">Get all your parking management tools &amp; data with zero5 solutions.</h4>
							<h6 className="txt txt18x26">Enjoy a complete automated parking garage mangement solution</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide className='homeCarts__slide'>
						<div className="homeCarts__image">
							<img src="./assets/img/elements/homeSlide02.png" alt="" />
						</div>
						<div className="homeCarts__info">
							<h4 className="txt txt28x34">Learn and transform your entire parking space into a tech-enabled mobility hub.</h4>
							<h4 className="txt txt28x34">Earn more revenue with your parking and give your clients high-end services.</h4>
							<h6 className="txt txt18x26">Discover how cloud-based web solutions upgrade parking spaces. Transform from level 0 to 5 autonomy.</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide className='homeCarts__slide'>
						<div className="homeCarts__image">
							<img src="./assets/img/elements/homeSlide03.png" alt="" />
						</div>
						<div className="homeCarts__info">
							<h4 className="txt txt28x34">Fits your property</h4>
							<h6 className="txt txt18x26">With a range of parking management features, zero5 is designed to be versatile.<br />We offer diverse parking management solutions that are hassle-free.</h6>
						</div>
					</SwiperSlide>
					<SwiperSlide className='homeCarts__slide'>
						<div className="homeCarts__image">
							<img src="./assets/img/elements/homeSlide04.png" alt="" />
						</div>
						<div className="homeCarts__info">
							<h4 className="txt txt28x34">Completely Ticketless</h4>
							<h6 className="txt txt18x26">Our technology utilizes camera vision for ticketless parking entry. <br /> The tech eliminates the inconveniences of manual ticketing.</h6>
						</div>
					</SwiperSlide>
					<div className="navigation">
						<SwiperBtnPrev />
						<div className="navigation__list"></div>
						<SwiperBtnNext />
					</div>
				</Swiper>
				<div className="navigation">
					<div ref={navbar}>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={0}
							slidesPerView={3}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Thumbs]}
							direction={"vertical"}
							className='navigation__list'
						>
							<SwiperSlide className='navigation__item'>
								<button className="navigation__nav" onClick={anwdiaw}>Upgrade</button>
							</SwiperSlide>
							<SwiperSlide className='navigation__item'>
								<button className='navigation__nav' onClick={anwdiaw}>Manage</button>
							</SwiperSlide>
							<SwiperSlide className='navigation__item'>
								<button className='navigation__nav' onClick={anwdiaw}>Customize</button>
							</SwiperSlide>
							<SwiperSlide className='navigation__item'>
								<button className='navigation__nav' onClick={anwdiaw}>Create</button>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
    </section>
	)
}

export default HomeCarts