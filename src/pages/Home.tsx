import React from 'react'

import "swiper/css";
import HomeBigi from '../components/elements/HomeBigi';
import HomeCarts from '../components/elements/HomeCarts';
import Welcome from '../components/elements/Welcome';

function Home() {
	return (<>
    <Welcome />
    <HomeCarts />
    <HomeBigi />
	</>)
}

export default Home