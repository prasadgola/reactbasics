import React, { useState, useEffect, useRef } from 'react'

function Home() {
	const [types, settypes] = useState(['posts'])
	const [items, setitems] = useState([])
	const [name, setname] = useState('')
	const inputRef = useRef(null)
	const rendercount = useRef(0)

	useEffect(() => {
	rendercount.current = rendercount.current + 1
	})

	const focusInput = () => {
	inputRef.current.focus()
	console.log(inputRef.current.focus)
	}

	useEffect(() => {
		async function homeeffect() {
			await fetch(`https://jsonplaceholder.typicode.com/${types} `)
			  .then(response => response.json())
			  .then(json => setitems(json))
			}
			homeeffect()
		},[types])

	return (
		<>
			<div className="App">

				<br></br>
				<br></br>
	            <button onClick={() => settypes((prev) => prev = 'posts')}>posts</button>
	            <button onClick={() => settypes((prev) => prev = 'comments')}>comments</button>
	            <button onClick={() => settypes((prev) => prev = 'users')}>users</button>
	            <h1>{types}</h1>

	            <input ref={inputRef} value = {name} onChange={e => setname(e.target.value)} />
	            <div>My name is {name}</div>
	            <div>I rendered {rendercount.current} times</div>
	            <button onClick={focusInput}>Focus Input</button>

	            {items.map((item) => {
	              return <pre key={item.id}>{JSON.stringify(item.name)}<br></br></pre>
	            })}

          	</div>
		</>
	)
}

export default Home