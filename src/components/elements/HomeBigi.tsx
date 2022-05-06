import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { useParallax  } from 'react-scroll-parallax';

import { SwiperBtnPrev, SwiperBtnNext } from './SwiperNavigation';

const HomeBigi = () => {
  const { ref: imageParallaxMobile } = useParallax<HTMLDivElement>({ speed: 30 });
  const { ref: imageParallax } = useParallax<HTMLDivElement>({ speed: 40 });
  const { ref: textImage } = useParallax<HTMLDivElement>({ speed: -30 });
	return (
		<section className="homeBigi">
      <Swiper
        speed={600}
        parallax={true}
        direction={"vertical"}
        navigation={true}
        className="homeBigi__wrapper wrapper homeBigi__slider desctopNone"
      >
				<SwiperSlide className='homeBigi__slide'>
					<div className='homeBigi__info'>
						<h5 className="txt txt28x34 cOrange">Do more with less</h5>
						<p className="txt txt18x26">
							Save up to 70% of parking operations costs with automated solutions. Our services make the job seamless and effortless.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className='homeBigi__slide'>
					<div className='homeBigi__info'>
						<h5 className="txt txt28x34 cOrange">Parking is outdated. it’s time for an upgrade</h5>
						<p className="txt txt18x26">
							Avoid the stress of manual management of your parking spaces.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className='homeBigi__slide'>
					<div className='homeBigi__info'>
						<h5 className="txt txt28x34 cOrange">Completely Ticketless</h5>
						<p className="txt txt18x26">
							Our technology utilizes camera vision for ticketless parking entry.<br /> The tech eliminates the inconveniences of manual ticketing.
						</p>
					</div>
				</SwiperSlide>
				<div className="navigation navigation--orange">
					<SwiperBtnPrev />
					<div className="navigation__list"></div>
					<SwiperBtnNext />
				</div>
			</Swiper>
			<div className="homeBigi__image desctopNone" ref={imageParallaxMobile} />
			<div className="homeBigi__paralax mobileNone">
				<div className="homeBigi__image" ref={imageParallax} />
				<div className="homeBigi__context" ref={textImage}>
					
					<div className='homeBigi__slide'>
						<div className='homeBigi__info'>
							<h5 className="txt txt28x34 cOrange">Do more with less</h5>
							<p className="txt txt18x26">
								Save up to 70% of parking operations costs with automated solutions. Our services make the job seamless and effortless.
							</p>
						</div>
					</div>

					<div className='homeBigi__slide'>
						<div className='homeBigi__info'>
							<h5 className="txt txt28x34 cOrange">Parking is outdated. it’s time for an upgrade</h5>
							<p className="txt txt18x26">
								Avoid the stress of manual management of your parking spaces.
							</p>
						</div>
					</div>

					<div className='homeBigi__slide'>
						<div className='homeBigi__info'>
							<h5 className="txt txt28x34 cOrange">Completely Ticketless</h5>
							<p className="txt txt18x26">
								Our technology utilizes camera vision for ticketless parking entry.<br /> The tech eliminates the inconveniences of manual ticketing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeBigi