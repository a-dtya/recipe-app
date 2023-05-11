
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar';
import Auth from './pages/auth';
import CreateRecipe from './pages/create-recipe';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Recipes</h1>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/create" element={<CreateRecipe/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
