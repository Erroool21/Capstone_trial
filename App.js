import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/HomeFolder/Home.js';
import PassengerForm from './components/PagesFolder/passengerForm.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/passengerForm' element={<PassengerForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
