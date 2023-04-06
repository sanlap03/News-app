import './App.css';

import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News key='general'  country='in' category='general' />}></Route>

            <Route path='/entertainment' element={<News key='entertainment'  country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health'  country='in' category='health' />}></Route>
            <Route path='/general' element={<News key='general'  country='in' category='general' />}></Route>
            <Route path='/sports' element={<News key='sports'  country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology'  country='in' category='technology' />}></Route>
          </Routes>
        </Router>
        
        
      </div>
    )
  }
}

