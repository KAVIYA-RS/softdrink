
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
function App() {
  return (
    <div >
      <Header/>
     
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>} exact/>
          <Route path='/service' element={<Service/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/signup' element={<Signup/>}/>
        </Routes>
     
      
    </div>
  );
}

export default App;
