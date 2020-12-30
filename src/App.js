import './App.css';
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Prescriptions from './Components/Prescriptions'
import Banner from './Components/Banner'
import Pharmacies from './Components/Pharmacies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Route exact path='/' component={Banner} />
        <Route path='/prescriptions/' component={Prescriptions} />
        <Route path='/pharmacies/' component={Pharmacies} />
      </main>
    </div>
  );
}

export default App;
