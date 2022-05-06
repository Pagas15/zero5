import React from 'react'

import "swiper/css";
import HomeBigi from '../components/elements/HomeBigi';
import HomeCarts from '../components/elements/HomeCarts';
import Welcome from '../components/elements/Welcome';
import { ParallaxProvider } from 'react-scroll-parallax';

function Home() {

	return (<>
		<Welcome />
    <HomeCarts />
    <ParallaxProvider>
      <HomeBigi />
    </ParallaxProvider>
	</>)
}

export default Home