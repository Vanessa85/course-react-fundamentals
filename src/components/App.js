import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PopularContainer from './popular/PopularContainer';
import Home from './Home';
import BattleContainer from './battle/BattleContainer';
import ResultsContainer from './results/ResultsContainer';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={BattleContainer} />
            <Route path="/battle/results" component={ResultsContainer} />
            <Route path="/popular" component={PopularContainer} />
            <Route render={() => {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
