import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";

import { authActions } from "../store/counter-store";

const Header = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	const headerButtons = (
		<nav>
			<ul>
				<li>
					<a href="/">My Products</a>
				</li>
				<li>
					<a href="/">My Sales</a>
				</li>
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	);

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isAuthenticated && headerButtons}
		</header>
	);
};

export default Header;
