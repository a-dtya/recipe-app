
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar';
import Auth from './pages/auth';
import CreateRecipe from './pages/create-recipe';
import Home from './pages/home'
import SavedRecipes from './pages/saved-recipe';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/create" element={<CreateRecipe/>}></Route>
          <Route path="/saved" element={<SavedRecipes/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
