// Function/classes import from Components and libraries
import './App.css';/*to my knowledge, this file is called in App.js bacause it is in same folder as parent App.js comp.. and cannot be called in child components where this file is not in the folder that child component presents*/
import Nav from './Components/Nav'
import About from './Components/About'
import Shop from './Components/Shop'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Item from './Components/Itemdetail'
// react prefers first letter of the function/file names to be uppercase

// main functional component
function App() {
  // write javascript here

  return (/*returns JSX within the brackets*/
    <>{/* 'return' will return only one line JSX, so to return bunch of lines, all the JSX line need to rap in one tag*/}
      <Router>{/*all the code with 'Switch' and 'Route' should be inside 'BrowserRouter'(Router)*/}
        
        <div className="Navbar">{/*calling CSS property from './App.css' file using 'className'="CSS property name"*/}
                                {/*Navbar component is rendered at the top to stay at the top of all the pages. Calling components and endpoints position in code will effect on where you want to display it on the page*/}
          <Nav/>
        </div>

        <Switch>{/*Switch to the given component when it find the eqivalent string from 'Link' tag and executes everting after the '/switch' end tag!*/}

          {/*these are components... react is just changing the components. But with 'BrowserRouter', 'Route' and 'Link', the whole page changes with different endpoints instead of reloading the page with different endpoints. Without router, the component changes within the page*/}
          <Route path="/About" component={About}/>{/*just call the component in other endpoint - if you move the line down to the div app section, just the component changes, it depends on where you place the component*/}
          <Route path="/Shop" exact component={Shop}/>{/*'Route' will match the given path with the 'Link' attribute 'to' and open an new page with the given path and displays/changes*/}
          <Route path="/shop/:id" component={Item}/>
          <Route path="/" exact component={Home}/>{/*'exact' will stop react to search for extended path*/}

        </Switch>

        <h4>After Switch tag is closed</h4>

      </Router>

       <h4>After Router tag is closed</h4>

    </>
  )
}

export default App;
