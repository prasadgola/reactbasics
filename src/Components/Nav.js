import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	const color = {
		color:'white'
	}

	return (
		<nav>
			<ul className="nav-links">
				<Link style={color} to="/"><h3>logo</h3></Link>
				<Link style={color} to="about">about</Link>
				<Link style={color} to="shop">shop</Link>
			</ul>
		</nav>
	)
}

export default Nav