import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
/*  1 commencer , -1 terminer ,  0 encours */
import TaskList from './TaskList';
import Home from './Home';

function App() {
  return (
    <div className='App'>
    <Home/>
      <TaskList/>
    </div>
    
    
  );
}

export default App;
