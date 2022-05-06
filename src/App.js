import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Register from './Components/Authentication/Register/Register';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Menubar from './Components/Shared/Menubar/Menubar';


function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
         <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
