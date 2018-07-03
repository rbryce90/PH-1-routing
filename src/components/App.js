import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Route, Link, Switch } from 'react-router-dom';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import People from './People/People';
import Character from './Character/Character';

const NotFound = props => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <div>You visited an invalid page. Maybe start from the <Link to="/">Home page</Link>?</div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" render={() => <About>
            <Route path="/about/faq" component={FAQ} />
            <Route path="/about/company" component={Company} />
          </About>} />
          <Route path="/people" component={People} exact />
          <Route path="/people/:id" component={Character} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
