import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*  1 commencer , -1 terminer ,  0 encours */
import TaskList from './TaskList';
import Home from './Home';
import TaskForm from './TaskForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navar from './Navar';

function App() {
  return (
    
    <div className='App'>
    <BrowserRouter>
    <Navar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/ajouter'element={<TaskForm/>}/>
      <Route path='/lister' element={<TaskList/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
