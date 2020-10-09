import React, {Component} from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import GB from '../img/gateau-basque.jpg';

class Dessert extends Component{
    render() {
        return (
        <div className='home'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-12'>

                    <CardDeck>
  <Card>
    <Card.Img variant="top" src={GB} />
    <Card.Body>
      <Card.Title>Gateau basque</Card.Title>
      <Card.Text>
        Gateau a base de crème patissiere originaire du Pays basque.
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="./img/gateau-basque.jpg" />
    <Card.Body>
      <Card.Title>Plat</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Dessert</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
                    </div>
                </div>
            </div>
            


        </div>

        ); 
    
    }
}
export default Dessert;
