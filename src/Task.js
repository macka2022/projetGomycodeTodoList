import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Encours from './Encours';
import CardGroup from 'react-bootstrap/CardGroup';
// import { useState } from 'react';

function Task({titre, description, etat , dataModifie}) {
  // const [es,setEs] =useState("macka")
// const dataModifies=()=>{
//   setEs("alpha")
  
// }

  return (
    <Card  className='g-task-one-individual' style={{margin:'50px 12px',width:'200px'}}>
         {/* <div style={{fontSize:"50px"}}>{es}fjjfjgjkkggkgkgg</div> */}
        {etat==="active" &&    <Encours/>}
        {!etat==="active" &&  <Card.Img  src='https://d3frsattnbx5l6.cloudfront.net/1540308872917-todolist-icon512.png' style={{marginLeft:"95%",backgroundColor:'orange',color:'white',width:'8%'}}></Card.Img> }
        <Card.Body>
         
          <Card.Title className='task-one-individual-titre'>{titre}</Card.Title>
          <Card.Text className='task-one-individual-description'>
          {description}
          </Card.Text>
        </Card.Body >
        <Card.Footer  className='task-one-individual-footer' style={{position:'relative', marginLeft:'', backgroundColor:'white'}}>
        <CardGroup >
          {etat==="active"  && <Button onClick={dataModifie} style={{width:'20%',marginLeft:"6%",backgroundColor:'blue',color:'white'}} variant="">Terminer</Button>}
         <Button onClick={dataModifie} style={{width:'20%',marginLeft:"6%",backgroundColor:'red',color:'white'}} variant="">Suprimer</Button>
         <Button  style={{width:'20%',marginLeft:"6%",backgroundColor:'orange',color:'white'}} variant="">Modifier</Button>
         </CardGroup>
        </Card.Footer>
     
     </Card>
  );
}

export default Task;