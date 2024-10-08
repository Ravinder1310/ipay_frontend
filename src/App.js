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
import PrivateRoute from './routes/privateRoutes';
import Package from './pages/package/package';
import Package_Info from './pages/Package_Info/Package_Info';
import LevelIncomeTrxn from './components/LevelIncomeTrxn/LevelIncomeTrxn';
import MatchingIncome from './components/MatchingIncome/MatchingIncome';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <div className='wrapper'>
     <Routes>
      <Route path="/users/" element={<PrivateRoute/>}>
        <Route path='user/fund-transfer' element={<FundTransfer/>}/>
        <Route path='user/add-beneficiary' element={<AddBeneficiary/>}/>
        <Route path='user/fund-transfer' element={<FundTransfer/>}/>
        <Route path='user/refund-otp' element={<RefundOTP/>}/>
        <Route path='user/refund' element={<Refund/>}/>
        <Route path='user/ifsc-details' element={<IFSCDetails/>}/>
        <Route path='user/transaction-status' element={<TransactionStatus/>}/>
        <Route path='user/account-balance' element={<AccountBalance/>}/>
        <Route path='user/level-income' element={<LevelIncomeTrxn/>}/>
        <Route path='user/matching-income' element={<MatchingIncome/>}/>
        <Route path='user/tree' element={<UserTree/>}/>
        <Route path='user/packages' element={<Package/>}/>
        <Route path='user/package-details' element={<Package_Info/>}/>
      </Route>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/recharge-mobile' element={<Recharge/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    

     </Routes>
    </div>
    </div>
  );
}

export default App;