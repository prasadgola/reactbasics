// issue - this file is rendering two time(fix it)
// file contains two different case - Live JSX Editor, Display/Fetch JSON
import React, { useState, useEffect, useRef } from 'react'

function Home() {

// case1
	const [types, settypes] = useState(['posts'])/*intially types and settypes value is set to 'posts'*/
	const [items, setitems] = useState([])/*intially items and setitems value is set to empty array[]*/

	const focusInput = () => {
	// inputRef.current value contains whole tag as reference
		inputRef.current.focus()/*focus() function will select the item for next move!, similar to 'tab' key on keyboard*/
	}

// case2
// 2 types of useRef use cases

// type1 - used to refer the whole DOM tag such as 'input' tag
	const inputRef = useRef(null)/*inputRef={current:null}*/
// type2 - useRef used instead of useState when components are rerendered infinitely and also used as global variable
	const rendercount = useRef(0)/*rendercount={current:0}*/	
// type3 - useRef use to store previous state
	const prevname = useRef('')

	const [name, setname] = useState('')/*intially name and setname value is set to empty string''*/


	useEffect(() => {
		function counter() {
		// rendercount act as global object, rendercount.current act as global variable
			rendercount.current = rendercount.current + 1/*increment rendercount.current value*/
		}
		counter()
	})


	useEffect(() => {
		prevname.current = name
	}, [name])
	
	useEffect(() => {
		async function homeeffect() {/*writing function inside useEffect and calling is a good practice*/
			await fetch(`https://jsonplaceholder.typicode.com/${types}`)/*fetch json object from the link dynamically when types value changes*/
			  .then(response => response.json())
			  .then(json => setitems(json))/*changes the current state settypes to json data*/
			}
			homeeffect()
		},[types])

	return (
		<>
			<div className="App">

				<br></br>
				<br></br>{/*state changes on clicking these three buttons*/}
	            <button onClick={() => settypes((prev) => prev = 'posts')}>posts</button>{/*on clicking these buttons, the onClick will invoke a
	             method, which changes the state of settypes to the given value. As the state settypes changes, the same value is assignied to 
	            types, which will call the 'useEffect' homeeffect function. Depending on the types value, homeeffect function will 
	            fetch an json data and assign to the state setitems. As the setitems changes, the same json data is assigned to items.*/}
	            <button onClick={() => settypes((prev) => prev = 'comments')}>comments</button>
	            <button onClick={() => settypes((prev) => prev = 'users')}>users</button>
	            <h1>{types}</h1>

	            <input ref={inputRef} value = {name} onChange={e => setname(e.target.value)} />{/*on change of input value, the state setname following name value changes dynamically*/}
	            {/*ref attribute assiged inputRef.current value to <input value> tag!. inputRef object refers/goes to 'input' tag!*/}
	            <div>My name is {name} and my previous name use to be {prevname.currentf}</div>{/*displays name value dynamically when the input value*/}
	            <div>I rendered {rendercount.current} times</div>{/*displays rendercount.current value dynamically on*/}
	            <button onClick={focusInput}>Focus Input</button>
		        {/*on clicking, input 'tag' is selected and ready to type inside*/}

	            {items.map((item) => {/*items set by the button is mapped*/
	              	return (
	              		<>
					        <pre key={item.id}>{JSON.stringify(item.name)}<br></br></pre>{/*items.name is returned to display after converting to string from json object*/}
					    </>
	            )})}

          	</div>
		</>
	)
}

export default Home