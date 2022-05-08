import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register'; import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
 import PhoneDetails from './Components/PhoneDetails/PhoneDetails';
import Menubar from './Components/Shared/Menubar/Menubar';


function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<RequireAuth> <Blogs></Blogs></RequireAuth>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/phoneDetails/:id" element={<RequireAuth>
        <PhoneDetails></PhoneDetails>
        </RequireAuth>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
