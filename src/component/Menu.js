import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component{
    render() {
        return (
<div className='Menu'>
    <div className="container-fluid">
    <div classname="row">
                <div classname="col-xl-12 col-lg-12 col-md-12">
                <nav className="navbar navbar-expand-lg navbar-dark py-0 ">
                    <Link className="navbar-brand" to="/">Recettes perso</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="basicExampleNav">
                        <ul className="navbar-nav mr-auto mx-auto">

                        <li className="nav-item active">
                            <Link className="nav-link navbar-text white-text" to="/">Accueil </Link>
                            <span className="sr-only">(current)</span>      
                        </li>
                                
                        <li className="nav-item">
                            <Link className="nav-link navbar-text white-text" to="/component/Entree">Entrée </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link navbar-text white-text" to="/component/Plats">PLat principal </Link>
                        </li>
                                
                        <li className="nav-item">
                            <Link className="nav-link navbar-text white-text" to="/component/Dessert">Déssert </Link>
                        </li>
                                
                        <li className="nav-item">
                            <Link className="nav-link navbar-text white-text" to="/component/Mon-compte">Mon compte </Link>
                        </li>
                    </ul>
                                
                        <nav className="navbar navbar-dark default-color ">
                            <form className="form-inline my-0 my-lg-0 ml-2 mr-0">
                                <input style={{height: 35, width: 150}} className="form-control " type="search" placeholder="recherche" aria-label="Search"/>
                                <button style={{height: 35, width:140 }} className="btn btn-outline-white btn-md  my-sm-0 ml-2" type="submit">rechercher</button>
                            </form>
                        </nav>
                                
                            <ul className="navbar-nav ml-auto nav-flex-icons">
                                <li className="nav-item avatar">
                                    <Link className="nav-link navbar-text white-text" to="/component/Mon-compte" >
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
                                        alt="avatar" height="40"/>
                                    </Link>
                                </li>
                            </ul>

                    </div>
                </nav>
                    
            </div>    
        </div>
    </div>
</div>

        );   
    
    }
}
export default Menu;