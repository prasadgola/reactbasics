import './App.css';/*to my knowledge, this file is called in App.js bacause it is in same folder as parent App.js comp.. and cannot be called in child components where this file is not in the folder that child component presents*/
import Nav from './Components/Nav'
import About from './Components/About'
import Shop from './Components/Shop'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Item from './Components/Itemdetail'


function App() {
  // write javascript here

  return (
    <>
      <Router>
        <div className="Navbar">
          <Nav/>
        </div>

        <Switch>{/*Switch to the given component when it find the eqivalent string from 'Link' tag and executes everting after the '/switch' end tag!*/}

          {/*these are components... react is just changing the components. But with router, route and link the componect changes with the endpoint. Withour router, the component changes within the page*/}        
          <Route path="/About" component={About}/>{/*just call the component in other endpoint - if you move the line down to the div app section, just the component changes, it depends on where you place the component*/}
          <Route path="/Shop" exact component={Shop}/>
          <Route path="/shop/:id" component={Item}/>
          <Route path="/" exact component={Home}/>

        </Switch>

        <h4>After Switch tag is closed</h4>

       </Router>
    </>
  )
}

export default App;
