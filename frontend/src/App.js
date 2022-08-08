import './App.css';
import AddTask from './components/AddTask/AddTask';
import ShowTasks from './components/ShowTasks/ShowTasks';

function App() {
  return (
    <div className="App">
      <div className = "side-area"></div>
      <div className = "main-area">
        <AddTask/>
        <ShowTasks/>
        
      </div>
      <div className = "side-area"></div>
    </div>
  );
}

export default App;
