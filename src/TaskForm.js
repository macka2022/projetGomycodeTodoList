import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function TaskForm() {
    const [itemData, setItemData] = useState({
        titre: '',
        description: '',
        etat:'active'
      });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({
          ...itemData,
          [name]: value,
        });
      };
    
      const ajouterTache = async (e) => {
        
        try {
          const response = await axios.post('http://localhost:8000/data', itemData);
          console.log('Ajout réussi', response.data);
          setItemData({
            titre: '',
            description: '',
          });
        } catch (error) {
          console.error('Erreur lors de l\'ajout', error);
        }
      };
    
  return (
    <Form  >
    <Card.Header style={{backgroundColor:'blue', color:'white', fontSize:'32px'}}>Ajouter Votre Tache</Card.Header>
      <Form.Group className="mb-3" style={{width:'50%', margin:'50px 5%', height:'0%'}} controlId="exampleForm.ControlInput1">
        <Form.Label style={{marginLeft:'-600px', fontSize:'22px'}}>Titre de tache</Form.Label>
        <Form.Control type="text" placeholder="titre de tache"   value={itemData.titre}
        onChange={handleInputChange} name='titre' />
      </Form.Group>
      <Form.Group className="mb-3" style={{width:'50%', marginLeft:'5%'}} controlId="exampleForm.ControlTextarea1">
        <Form.Label  style={{marginLeft:'-620px', fontSize:'22px'}}>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={itemData.description} onChange={handleInputChange} />
      </Form.Group>
      <button onClick={ajouterTache} >Ajouter Task</button>
    </Form>
  );
}

export default TaskForm;