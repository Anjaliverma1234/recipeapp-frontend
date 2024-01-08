import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Recipe/component/common/Navbar';
import Home from './Recipe/pages/Home';
import Recipes from './Recipe/pages/Recipes';
import RecipeDetails from './Recipe/component/RecipeDetails';
import Login from './Recipe/component/auth/Login';
import Signup from './Recipe/component/auth/Signup';

function App() {
  return (
   
    <>
     
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path='/navbar' element={<Navbar/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/recipes' element={<Recipes/>}/>
     <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
     <Route path='/' element={<Login/>}/>
     <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
