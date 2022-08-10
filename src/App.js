import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome firstname='Zaza' lastname='Vanderquack' age={16} />
      <hr />
      <Welcome firstname='Della' lastname='Duck' />
    </div>
  );
}

export default App;
