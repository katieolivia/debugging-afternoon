import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import StoreFront from './components/StoreFront/StoreFront';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';


class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     shoppingCart: [],
  //     products: []
  //   }
  //}
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/storefront" component={StoreFront} />
          <Route path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return state;
// }

// export default connect(mapStateToProps)(App);
export default App;