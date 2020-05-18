import React from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import history from './history';
import store from "./redux/store/index";
import Result from "./pages/Results";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <React.Fragment>
          //Header
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/results' component={Result}/>
            <Route exact path='/movie/:id' component={MovieDetail}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
