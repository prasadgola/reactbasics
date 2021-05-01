import React, { useState, useEffect } from 'react'

function Item ({match}) {/*	match gets the data including endpoint. here match got the item:id from shop.js and used to fetch in itemdetail.js, dynamically*/

	const [item, setitem] = useState([])

	useEffect(() => {/*Don't call async function directly to methods, creat async function inside methods and call*/
		const fetcheffect = async () => {
			await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
				.then(res => res.json())
				.then(json => setitem(json))
		}

		fetcheffect()
	},[])	
	console.log(item)

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