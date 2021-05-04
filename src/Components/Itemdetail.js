import React, { useState, useEffect } from 'react'

function Item ({match}) {/*	match gets the data including endpoint. here match got the item:id from shop.js and used to fetch in itemdetail.js dynamically*/

	const [item, setitem] = useState([])

	useEffect(() => {/*Don't call async function directly to methods, create and call async function inside methods*/
		const fetcheffect = async () => {
			await fetch(`https://fakestoreapi.com/products/${match.params.id}`)/*fetch dynamic data from the match object inside params object*/
				.then(res => res.json())
				.then(json => setitem(json))
		}

		fetcheffect()
	},[])	

	return (
		<div>
			<h1>Size : {item.price}</h1>
			<h1>Unit ID : {item.id}</h1>
			<h1>{item.title}</h1>
			<img src={item.image} alt=''/>
		</div>
	)
}

export default Item