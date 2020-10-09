import React, {Component} from 'react';
import avatar from '../img/avatar.jpg'
import BG from '../img/mon-compte.jpg'
import './Mon-compte.css'

class Compte extends Component{
    render() {
        return (
<div className='img' style={{ backgroundImage:`url(${BG})` }}>
        <div className='Compte'>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-xl-12'>
                    
<div class="jumbotron text-center blue-gradient"> 
    <div className="container">
         <div className='row'>
            <div className='col-xl-3'>
                <img className='avatar' src={avatar} alt="avatar"/>
            </div>
        <div className='col-xl-8'>
             <h2>Nom de la personne</h2>
         </div>
    </div>        
  </div>
</div>
                            
                                 {/* fin jumbotron */}

                        <div className='row text-center'>
                        <div className='col-xl-12 '>

                        <h3>Mes informations</h3>
                        </div>
                        </div>

                        <div className='row '>
                            <div className='col-xl-12'>
                                <div className='row justify-content-center'>
                                    <div className="Col  xl={3} ">
                                        <p>Prénom: </p>
                                        <p>Nom: </p> 
                                        <p>Ville: </p>
                                        <p>adresse mail: </p>
                                    </div>

                                    <div className="Col  xl={3}">
                                        <p>Jean</p>
                                        <p>Charles</p>
                                        <p>Paris</p>
                                        <p>Jean@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row text-center '>
                            <div className='col-xl-12'>
                                <h3>Mes favoris</h3>
                          
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
</div>    

        ); 
    
    }
}
export default Compte;
