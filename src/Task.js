import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Encours from './Encours';
import CardGroup from 'react-bootstrap/CardGroup';
// import { useState } from 'react';

function Task({id, titre, description, etat , dataModifie}) {
  // const [es,setEs] =useState("macka")
// const dataModifies=()=>{
//   setEs("alpha")
  
// }

  return (
    <tr>
      <td>{id}</td>
      <td>{titre}</td>
      <td>{description}</td>
      <td> {etat==="active" &&    <Encours/>}</td>
      <td>
      
          {etat==="active"  && <Button onClick={dataModifie} style={{width:'',marginLeft:"6%",backgroundColor:'blue',color:'white'}} variant="">Terminer</Button>}
         <Button onClick={dataModifie} style={{width:'',marginLeft:"6%",backgroundColor:'red',color:'white'}} variant="">Suprimer</Button>
         <Button  style={{width:'',marginLeft:"6%",backgroundColor:'orange',color:'white'}} variant="">Modifier</Button>
         
      </td>
    </tr>
    
  );
}

export default Task;