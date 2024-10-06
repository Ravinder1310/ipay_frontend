import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homePage/homePage';
import { Route, Routes } from "react-router-dom";
import About from './pages/about/about';
import ContactUs from './pages/contackUs/contactUs';
import Services from './pages/services/services';
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Recharge from './pages/Recharge';
import FundTransfer from './components/fundTransfer/fundTransfer';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/recharge-mobile' element={<Recharge/>}/>
      <Route path='/fund-transfer' element={<FundTransfer/>}/>
     </Routes>
    </div>
  );
}

export default App;
