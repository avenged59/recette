import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component{
    render() {
        return (
<footer className="Footer font-small white-text my-auto py-auto">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12'>  
                    <div className="container-fluid">
                        <div className="row">                                
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                    <h3 className="font-weight-bold mb-0">MDB</h3>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6">
                                    <ul className="list-unstyled d-flex justify-content-center mb-1 mt-2">
                                        <li className="mr-2">
                                             <Link className="white-text" to="/">Accueil </Link>
                                        </li>
                                            <li className="mr-2">
                                            <Link className="white-text" to="/component/Entree">Entrée </Link>
                                        </li>
                                                        
                                        <li className="mr-2">
                                            <Link className="white-text" to="/component/Plats">PLat principal </Link>
                                        </li>
                                                        
                                        <li className="mr-2">
                                            <Link className="white-text" to="/component/Dessert">Déssert </Link>
                                        </li>
                                                        
                                        <li className="mr-2">
                                            <Link className="white-text" to="/component/Mon-compte">Mon compte </Link>
                                        </li>
                                    </ul>
                            </div>
                            <div className=" col-xl-3 col-lg-3 col-md-3">
                            
                                    <div className="footer-copyright text-right bg-transparent white-text mt-2">© 2020.
                                    <a className="white-text" href="https://mdbootstrap.com/education/bootstrap/"> Tous droits réservés.</a>
                                    </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                               
</footer>
                
           
        

        );   
    
    }
}
export default Footer;