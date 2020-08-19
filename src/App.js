import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import HomeContainer from './components/containers/HomeContainer';
import TemplateContainer from './components/containers/TemplateContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Nav = styled.nav`
  background-color: Global.color.primary;
  color: white;
`;


class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Nav className="navbar navbar-expand-lg" styled>
          <Link className="navbar-brand" to ="/">Trippy</Link>
            <div class="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                
                <li className="nav-item"><Link className="nav-link" to ="/template">template</Link></li>
                <li className="nav-item"><Link className="nav-link" to ="/hotels">Hotels</Link></li>
                <li className="nav-item"><Link className="nav-link" to ="/restaurants">Restaurants</Link></li>
                <li className="nav-item"><Link className="nav-link" to ="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link" to ="/signup">Signup</Link></li>
              </ul>
            </div>
          </Nav>
          <Switch>

            <Route path="/template">
              <TemplateContainer />
            </Route>

            <Route path="/hotels">
              <TemplateContainer />
            </Route>

            <Route path="/restaurants">
              <TemplateContainer />
            </Route>

            <Route path="/login">
              <TemplateContainer />
            </Route>

            <Route path="/signup">
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
