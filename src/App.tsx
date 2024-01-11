import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Home from "./pages/Home";

function HomePage() {
  return (
    <>
      <div className="Home">
        <h1>Welcome to Instapets</h1> 
        
        <NavLink to="/login">
          <button className="Entrar">Fazer Login</button>
        </NavLink>     
        
        <NavLink to="/signup">
          <button className="NovaConta">Criar nova conta</button>
        </NavLink>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/icon" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;