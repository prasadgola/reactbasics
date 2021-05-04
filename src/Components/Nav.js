// component for navbar which is displayed/rendered on the top the app in all the pages
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	const color = {
		color:'white'
	}

	return (
		<nav>
			<ul className="nav-links">
				<Link style={color} to="/"><h3>logo</h3></Link>{/*Link replaces html '<a>' tag which is quick and takes to the given endpoint page*/}
				<Link style={color} to="about">About</Link>
				<Link style={color} to="shop">Shop</Link>
			</ul>
		</nav>
	)
}

export default Nav