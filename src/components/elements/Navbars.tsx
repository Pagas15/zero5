import React from 'react'
import { Link } from 'react-router-dom';

interface itemsTs {
	name: string;
	key: string;
}

interface propsTs {
	itemsNavBar: itemsTs[];
	login?: () => void;
	classList?: string;
	onClick?: () => void;
}

const Navbars = ({itemsNavBar, login, classList, onClick}: propsTs) => {
	const listBtns = itemsNavBar.map(item => {
		return <li className="navBar__item" key={item.key}>
			<Link to={item.key} className="navBar__btn" onClick={onClick}>{item.name}</Link>
		</li>
	})
	return (
		<ul className={"navBar" + (classList ? ' ' + classList : '')}>
			{itemsNavBar && listBtns}
			{login && (<li className="navBar__item navBar__item--login">
				<Link to={"login"} className="navBar__btn navBar__btn--login" onClick={onClick}>
						<span className="icon desctopNone">
							<svg width={20} height={11} viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10.5428 3.74986C9.75113 1.39611 7.4178 -0.187638 4.80946 0.354862C2.90113 0.757362 1.35113 2.35861 0.95113 4.36236C0.267796 7.74861 2.7178 10.7499 5.83446 10.7499C8.00946 10.7499 9.85946 9.28861 10.5428 7.24986H14.1678V8.99986C14.1678 9.96236 14.9178 10.7499 15.8345 10.7499C16.7511 10.7499 17.5011 9.96236 17.5011 8.99986V7.24986C18.4178 7.24986 19.1678 6.46236 19.1678 5.49986C19.1678 4.53736 18.4178 3.74986 17.5011 3.74986H10.5428ZM5.83446 7.24986C4.9178 7.24986 4.1678 6.46236 4.1678 5.49986C4.1678 4.53736 4.9178 3.74986 5.83446 3.74986C6.75113 3.74986 7.50113 4.53736 7.50113 5.49986C7.50113 6.46236 6.75113 7.24986 5.83446 7.24986Z" fill="inherit" />
							</svg>
						</span>
						<span>Login</span>
				</Link>
			</li>)}
		</ul>
	)
}

export default Navbars