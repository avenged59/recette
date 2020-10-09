import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './component/Menu';
import Home from './component/Home';
import Entree from './component/Entree';
import Plats from './component/Plats';
import Dessert from './component/Dessert';
import Footer from './component/Footer';
import Inscription from './component/Inscription';
import Compte from './component/Mon-compte';



function App(props) {

  return (
    <div>
     <Router>
        <Menu />    
        
        <Route path="/" exact component={Home}/>
        <Route path="/component/Entree" exact component={Entree}/>
        <Route path="/component/Plats" exact component={Plats}/>
        <Route path="/component/Dessert" exact component={Dessert}/>
        <Route path="/component/Inscription" exact component={Inscription}/>
        <Route path="/component/Mon-compte" exact component={Compte}/>
        <Footer />

      </Router>
    </div>
    
  );
}

export default App;
