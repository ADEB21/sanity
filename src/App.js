import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/' exact="true"/>
      <Route element={<About/>} path='/about'/>
      <Route element={<SinglePost/>} path='/post/:slug'/>
      <Route element={<Post/>} path='/post'/>
      <Route element={<Projects/>} path='/projects'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
