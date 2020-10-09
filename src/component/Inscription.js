import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from "mdbreact";
import "./Inscription.css";

class Inscription extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    

    return (
<div className='Inscription'>
  <div className='container-fluid'>
    <div classname='row'>
      <div classname='col-xl-12 col-lg-12 col-md-12'>
        <div id="classicformpage">
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <h1 className="h1-responsive font-weight-bold">
                      Inscrivez-vous!
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Vous pourrez voir les recettes que je trouve et teste au grès de mes recherches sur interne. Alors hésitez pas a jeté un coup d'oeil et inscrivez-vous si vous souhaitez les retrouver en un clic! 
                    </h6>
                    
                  </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Inscription:
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Pseudo"
                          icon="user"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Email"
                          icon="envelope"
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Mot de passe"
                          icon="lock"
                          type="password"
                        />
                        <div className=" text-center mt-4">
                          <MDBBtn className="insc" color="indigo">S'inscrire</MDBBtn> 
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

       
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Inscription;