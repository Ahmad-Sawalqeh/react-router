import React from 'react';
import { Route, NavLink, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <SlideRoutes location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

export default App;