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
import MyProfile from './pages/myProfile/profile';
import RechargeIncome from './components/RechargeIncome/RechargeIncome';
import Invitation from './components/Invitation/Invitation';
import AdminRoute from './routes/adminRoutes';
import Dashboard from './pages/Admin/AdminDashbord/AdminDashbord.js';
import AllUsers from './pages/Admin/AllUsers/AllUsers.js';
import PaidUsers from './pages/Admin/PaidUsers/PaidUsers.js';
import UnpaidUsersList from './pages/Admin/UnpaidUserslist/UnpaidUserslist.js';
import BlockedUsers from './pages/Admin/BlockedUsers/BlockedUsers.js';
import DownlineUsers from './pages/Admin/DownlineUsers/DownlineUsers.js';
import ActivationReport from './pages/Admin/ActivationReport/ActivationReport.js';
import ActivateUserForm from './pages/Admin/ActivateUserForm/ActivateUserForm.js';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin.js';
import AddDeduct from './pages/Admin/AddDeduct.js/AddDeduct.js';
import ChangePassword from './pages/Admin/ChangePassword/ChangePassword.js';
import AllWithdrawRequest from "./pages/Admin/AllWithdrawRequest/AllWithdrawRequest.js";

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
        <Route path='user/recharge-mobile' element={<Recharge/>}/>
        <Route path='user/invite' element={<Invitation/>}/>
        <Route path='user/recharge-income' element={<RechargeIncome/>}/>
        <Route path='user/ifsc-details' element={<IFSCDetails/>}/>
        <Route path='user/transaction-status' element={<TransactionStatus/>}/>
        <Route path='user/account-balance' element={<AccountBalance/>}/>
        <Route path='user/level-income' element={<LevelIncomeTrxn/>}/>
        <Route path='user/matching-income' element={<MatchingIncome/>}/>
        <Route path='user/tree' element={<UserTree/>}/>
        <Route path='user/packages' element={<Package/>}/>
        <Route path='user/my-profile' element={<MyProfile/>}/>
        <Route path='user/package-details' element={<Package_Info/>}/>
      </Route>

 
      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/change-password" element={<ChangePassword/>} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-paid-users" element={<PaidUsers />} />
          <Route path="admin/all-unpaid-users-list" element={<UnpaidUsersList />} />
          <Route path="admin/blocked-users" element={<BlockedUsers />} />
          <Route path="admin/downline-users" element={<DownlineUsers />} />
          <Route path='admin/add-deduct' element={<AddDeduct/>}/>
          <Route path="admin/activation-report" element={<ActivationReport />} />
          <Route path="admin/activate-user" element={<ActivateUserForm />} />
          <Route path="admin/withdrawal-requests" element={<AllWithdrawRequest />} />

      </Route>



      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/services' element={<Services/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path="/admin/login" element={<AdminLogin/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    

     </Routes>
    </div>
    </div>
  );
}

export default App;