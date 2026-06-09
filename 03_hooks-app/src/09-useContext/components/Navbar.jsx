import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<nav
				className='navbar navbar-expand-md bg-dark rounded-4'
				data-bs-theme='dark'>
				<div className='container-fluid'>
					<Link
						className='navbar-brand'
						to='/'>
						useContext
					</Link>

					<div
						className='collapse navbar-collapse'
						id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<NavLink
									className={(obj) => ` ${obj.isActive ? "nav-link active" : "nav-link"}`}
									to='/'>
									Home
								</NavLink>
							</li>

							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										` ${isActive ? "nav-link active" : "nav-link"}`
									}
									to='/about'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									className={({ isActive }) =>
										` ${isActive ? "nav-link active" : "nav-link"}`
									}
									to='/login'>
									Login
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
