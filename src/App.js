import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
     
    </div>
  );
}

export default App;
