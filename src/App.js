import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <div  className=' bg-black h-100 w-100'>
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
