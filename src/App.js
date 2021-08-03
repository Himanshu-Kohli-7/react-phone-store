import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar'
import Default from './Components/Default';
import Details from './Components/Details';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Modal from './Components/Modal';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/details"  component={Details} />
        <Route path="/cart"  component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
