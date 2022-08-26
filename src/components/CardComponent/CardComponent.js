import Card from 'react-bootstrap/Card';

const CardComponent = ({ nombre, posicion, numero, img }) => {
  return (
    <Card style={{ width: '100%', backgroundColor: '#9b0006', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px', backgroundImage: `url(${img})`}}>
      <Card.Body>
      <Card.Text style={{color:'#ffffff'}}>
          {numero}
        </Card.Text>
      <Card.Text style={{color:'#fff201'}}>
          {posicion}
        </Card.Text>
        <Card.Title style={{color:'#ffffff'}}>{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;