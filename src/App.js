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
import ScrollToTop from './components/ScrollToTop';
import AddBeneficiary from './components/walletRecharge/binaficiaryAccount';
import RefundOTP from './components/walletRecharge/RefundOTP';
import Refund from './components/walletRecharge/Refund';
import IFSCDetails from './components/walletRecharge/IFSCDetails';
import TransactionStatus from './components/walletRecharge/TransactionStatus';
import AccountBalance from './components/walletRecharge/AccountBalance';
import UserTree from './components/UserTree/UserTree';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <div className='wrapper'>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user-tree' element={<UserTree/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/recharge-mobile' element={<Recharge/>}/>
      <Route path='/fund-transfer' element={<FundTransfer/>}/>
      <Route path='/add-beneficiary' element={<AddBeneficiary/>}/>
      <Route path='/fund-transfer' element={<FundTransfer/>}/>
      <Route path='/refund-otp' element={<RefundOTP/>}/>
      <Route path='/refund' element={<Refund/>}/>
      <Route path='/ifsc-details' element={<IFSCDetails/>}/>
      <Route path='/transaction-status' element={<TransactionStatus/>}/>
      <Route path='/account-balance' element={<AccountBalance/>}/>

     </Routes>
    </div>
    </div>
  );
}

export default App;
