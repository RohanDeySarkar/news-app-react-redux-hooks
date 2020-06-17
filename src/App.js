import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Custom from './components/custom';
import Tech from './components/tech';

import Store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
            <Link to="/tech">Tech</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Custom} />
            <Route exact path="/tech" component={Tech} />
          </Switch>
        </main>
      </div>
    </Provider>    
  );
}

export default App;
