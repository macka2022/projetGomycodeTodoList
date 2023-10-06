import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import useRecuperation from './useRecuperation';
import axios from 'axios';
import Task from './Task';
import { useState,useEffect } from 'react';
const TaskList = () => {
  
    const {donnee , isLoading , erreur} = useRecuperation("http://localhost:8000/data")
  
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
      if (donnee) {
        setTasks(donnee);
      }
    }, [donnee]);

    const modifierDonnees = (id) => {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, etat: "nonactive" } : task
      );
  
      setTasks(updatedTasks);
  
      const findDonnee = donnee && donnee.find((d) => d.id === id);
   
       axios
            .patch(`http://localhost:8000/data/${findDonnee.id}`, {etat:"nonactive"})
            .then(response => {
              console.log('Réponse du serveur :', response.data);
            })
            .catch(error => {
             console.error('Erreur lors de la requête PATCH :', error.message);
            });
        }
    return (  
      <Table striped='columns'>
      <thead>
        <tr>
          <th># INDEX</th>
          <th>Titre</th>
          <th>Description</th>
          <th>Etat</th>
          <th style={{width:'550px'}}>Action</th>
          
        </tr>
      </thead>
      <tbody>  
    
    {erreur && <Card.Footer>Une erreur de serveur</Card.Footer>}
      {isLoading && <Card.Footer>Les Donnes est en telechargement</Card.Footer>}
        {
           tasks
           
            && tasks.map( donne =>(
           <Task key={donne.id} {...donne} dataModifie={()=>modifierDonnees(donne.id)}/>
           
    ))
    }
    </tbody>
</Table>
    );
}
 
export default TaskList;

