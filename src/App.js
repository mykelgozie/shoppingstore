import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header  from './components/Header'
import Photo from './pages/Photo'
import Cart from './pages/Cart'

function App() {
  return (

    <div>
      <Header/>
      <Switch>
            <Route exact path="/">
                 <Photo/>
            </Route>
            <Route exact path="/cart">
                 <Cart/>
            </Route>
      </Switch>
  
    </div>
  );
}

export default App;
