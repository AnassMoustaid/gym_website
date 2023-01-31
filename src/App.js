import React from 'react';
import Home from './Components/home';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Login from './Components/auth/login'
import ForgotPassword from './Components/auth/ForgotPassword';
import ResetPassword from './Components/auth/Resetpassword';
import Prices from './Components/prices/prices';
import Blogpage from './Components/blog/blogpage';
import BlogArticle from './Components/blog/Bloglist/blogarticle';
// admin section
import AdminReegister from './Components/Adminregister';
import AddMember  from './pages/Addmember';
import MemberList from './pages/Memberlist';
import BlogPanel from './pages/Blogpanel';
import ReceivedMessages from './pages/Receivedmessages';
import Logout from './pages/Logout';
import AdminDashboard from './Components/admindashboard/Admindashboard';
// user section 
import CreateNote from './Components/userdashboard/Createnote';
import Notes from './Components/userdashboard/Notes';
import NotePage from './Components/userdashboard/Notepage';
import ChangePassword from './Components/userdashboard/Changepassword';
import Notebar from './Components/userdashboard/Notebar';
import ProfileInfo from './Components/userdashboard/Profileinfo';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />}  /> 
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/adminregister' element={<AdminReegister />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/blogpage' element={<Blogpage />} />
        <Route path='/blogarticle/:id' element={<BlogArticle/>} />
        {/* admin dashboard routes  */}
        <Route path='/admindashboard' element={<AdminDashboard/>}  />
        <Route path='/admindashboard/addmember' element={<AddMember/>}   />
        <Route path='/admindashboard/memberlist' element={<MemberList />}   />
        <Route path='/admindashboard/receivedmessages' element={<ReceivedMessages/>}   />
        <Route path='/admindashboard/blogpanel' element={<BlogPanel />}   />
        <Route path='/admindashboard/logout' element={<Logout />} />
        {/* user dashboard routes */}
        <Route path='/userdashboard' element={<Notebar />} />
        <Route path='/userdashboard/notes' element={<Notes/>} />
        <Route path='/userdashboard/createnote' element={< CreateNote/>} />
        <Route path='/userdashboard/notepage/:id' element={<NotePage/>} />
        <Route path='/userdashboard/changepassword' element={<ChangePassword/>} />
        <Route path='/userdashboard/profile' element={<ProfileInfo />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
