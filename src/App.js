import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var Home = () => (
  <div>
    <h2>Click "This" or "That" </h2>
  </div>
)

var This = () => (
  <div>
    <h2>This</h2>
  </div>
)

var That = () => (
  <div>
    <h2>That</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <Route exact path="/" component={Home}/>
        <Route path="/this" component={This}/>
        <Route path="/that" component={That}/>
        <hr/>
        <li><Link to="/this">This</Link></li>
        <li><Link to="/that">That</Link></li>
        <hr/>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
  </Router>
)


export default App
