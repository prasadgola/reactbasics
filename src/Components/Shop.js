import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Shop() {

	const [items, setitems] = useState([])
	
	useEffect(() => {
		const shopeffect = async () => {
			await fetch('https://fakestoreapi.com/products')
				.then(res => res.json())
				.then(json => setitems(json))
			}
			shopeffect()
	},[])

	return (
		<div>
			<h1>asdf</h1>
			{items.map((item) => {
				return (
					<pre key={item.id}>
						<Link to ={`shop/${ item.id }`}>{item.title}</Link>
					</pre>
				)
			})}
		</div>
	)
}

export default Shop