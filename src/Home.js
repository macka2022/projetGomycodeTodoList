import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
  const slide={
    border:'0px solid transparent', 
     margin:'200px 30%',
     top:'0px',
     display:'none'
     
  }
  
    return ( 
    <> 
    <Card className="bg-dark text-white">
      <Card.Img  style={{height:'700px'}}src="accueil.original.jpg" alt="Card image" />
      <Card.ImgOverlay className='bg-home-overlay'>
       
        <Card.Text style={{transform: 'translate(100%,100%)',width:'40%',margin:'10% 10%'}}>
        <h3  className='bg-home-overlay-text-h1'>
            {' '} Organisez enfin votre vie et votre travail.
          </h3>
        </Card.Text>
        <Card.Text className='bg-home-overlay-text'>Gagnez en concentration, en organisation  et en sérénité  avec Todoist
          . La 1ère application de gestion de tâches et de to do list.</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <CardGroup>
    <Card  className='card-global' style={{ border:'0px solid transparent'}}>
    <Card  className='card-global' style={{ border:'0px solid transparent', marginTop:'30%'}}>
      <Card.Header style={{ border:'0px solid transparent', backgroundColor:'transparent'}}>Le meilleur moyen d'avoir l'esprit libre.</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ border:'0px solid transparent'}}>
          <h2 style={{ border:'0px solid transparent'}}>
            {' '}
            Notez simplement vos tâches, telles qu'elles viennent. La reconnaissance du 
            langage naturel de Todoist, unique 
            en son genre, remplira instantanément votre liste de tâches.{' '}
          </h2>
          
        </blockquote>
      </Card.Body>
    </Card>
    
  </Card>
  <Card  className='card-global'>
 



  <Card className="bg-dark text-white" id="top_slide" style={slide}>
      <Card.Img  style={{ border:'0px solid transparent',height:''} }className='card-global'src='slides.png' alt="Card image" />
      <Card.ImgOverlay className=''>
       
       <Card style={{ border:'0px solid transparent',marginTop:'-2%', backgroundColor:'black'}}>
        <Card.Header style={{color:'white',backgroundColor:'blue'}}>Tache: </Card.Header>
        {/* <Card.Text style={{ border:'0px solid transparent',fontSize:'20px'}} className='card-global bg-home-overlay-text' >Gagnez en concentration, en organisation et en sérénité avec Todoist
          . La 1ère application de gestion de tâches et de to do list.</Card.Text>*/}
        </Card> 
      </Card.ImgOverlay>
    </Card>
   
  </Card>
  </CardGroup>
    </>   
     );
}
 
export default Home;