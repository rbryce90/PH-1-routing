import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character'



class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink activeClassName='active' exact to='/'> Home </NavLink>
          <NavLink activeClassName='active' to='/about'> About </NavLink>
          <NavLink activeClassName='active' to='/people'> People </NavLink>
        </header>

        <Switch> 
          
          <Route path= '/about' render={ () => {
            return (
              <About> 
      
                <Route path= '/about/faq' component={FAQ} /> 
                <Route path= '/about/company' component={Company} /> 
              </About>
            )
          }} />
          <Route path= '/people/:id' component={Character} />
          <Route path= '/people' component={People} />
          <Route path='/' component={Home} />

        </Switch>
      </div>
    );
  }
}

export default App;
