import React from 'react';
import firebase from "firebase";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage';
import Wallets from './pages/WalletsPage';
import Gallery from './pages/GalleryPage';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { NavigationProvider } from './providers/NavigationProvider/NavigationContext'

function App() {
  return (
    <Router >
      <NavigationProvider>
        <Sidebar />
        <Navbar />
      </NavigationProvider>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/wallets" component={Wallets}/>
        <Route path="/gallery" component={Gallery}/>
      </Switch>
    </Router>
  );
}

export default App;
