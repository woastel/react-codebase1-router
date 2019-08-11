import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style.scss'

function App() {
  return (
    <Router>
      <div className="App ">
      
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/backside" component={Backside} />

        <div className="icon">
          <div style={{width:"32px", height:"32px", backgroundColor:"rgb(31, 31, 31)"}}>
            icon
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      Hi there, my name is woastel but u can call me Sebastain. <br />
    </div>

  );
}

function About() {
  return <h2>About</h2>;
}

function Backside() {
  return <h3>Backside</h3>;
}

function Header() {
  return (
    <div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/backside">Backside</Link>
        </li>
      </ul>
      
    </div>
  );
}

export default App;