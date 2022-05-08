import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';

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
							<Icon type="key" width={20} height={11} />
						</span>
						<span>Login</span>
				</Link>
			</li>)}
		</ul>
	)
}

export default Navbars