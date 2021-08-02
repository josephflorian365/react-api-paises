import './App.css';
import Mainbar from './components/Mainbar';
import Paises from './components/Paises';
import Mainfooter from './Mainfooter';
import Nosotros from './Nosotros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Proyecto react</h1>
          <p>Invesigaciòn y Nuevas tecnologìas</p>
        </div>
      </header>
      <Mainbar/>
      <Nosotros/>
      <Paises/>
      <Mainfooter/>
    </div>
  );
}

export default App;
