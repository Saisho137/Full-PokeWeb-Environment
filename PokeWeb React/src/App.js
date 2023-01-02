import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Search from "./components/Search"
import Pokedex from "./components/Pokedex";
import Login from "./components/Login";
import UserContext from "./components/context/userContext";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [user, setUser] = useState("")
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"
            element={
              <Search />
            } />
          <Route path="/pokedex"
            element={
              <Pokedex />
            } />
          <Route path="/signin"
            element={
              <Login />
            } />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
