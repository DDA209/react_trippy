import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';


import HomeContainer from './components/containers/HomeContainer';
import TemplateContainer from './components/containers/TemplateContainer';

import './App.css';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to ="/">Trippy</Link></li>
              <li><Link to ="/template">template</Link></li>
              <li><Link to ="/hotels">Hotels</Link></li>
              <li><Link to ="/restaurants">Restaurants</Link></li>
              <li><Link to ="/login">Login</Link></li>
              <li><Link to ="/signup">Signup</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/template">
              <TemplateContainer />
            </Route>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
