import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './../styles/App.css';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
