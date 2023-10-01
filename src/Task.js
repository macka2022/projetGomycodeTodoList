import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Task() {
  
  return (
    <Card  className='g-task-one-individual' style={{margin:'50px 12px'}}>
        <Card.Img src='im.png'className='task-one-individual-img' style={{width:'3%'}}></Card.Img>
        <Card.Body>
          <Card.Title className='task-one-individual-titre'>Aller au marche</Card.Title>
          <Card.Text className='task-one-individual-description'>
          Acheter des fournitures scolire
          </Card.Text>
        </Card.Body >
        <Card.Footer  className='task-one-individual-footer' style={{position:'relative', marginLeft:'0%', backgroundColor:'white'}}>
          <Button style={{width:'20%',marginLeft:"75%",backgroundColor:'blue',color:'white'}} variant="">Commencer</Button>{' '}
        </Card.Footer>
     </Card>
  );
}

export default Task;