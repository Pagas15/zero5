import React from 'react'

interface inputTs {
	text: string;
	onClick?: () => void;
}

const ButtonMain = ({text, onClick}: inputTs) => {
	return (<button className="btnMain" onClick={onClick}>
		<span className="text">{text}</span>
		<span className="arrow">
			<svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.75847 10.5546L0.375731 10.5546L4.13158 5.56695L0.375732 0.579346L2.75848 0.579346L6.51433 5.56695L2.75847 10.5546Z" fill="inherit" />
			</svg>
		</span>
		<span className="background" />
		<span className="line" />
	</button>)
}

export default ButtonMain