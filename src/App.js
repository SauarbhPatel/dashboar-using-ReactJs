import { useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [toggle, setToggle] = useState({
    display: "block",
  });
  console.log(toggle);
  return (
    <div className="home">
      <Navbar toggleState={toggle} setToggle={setToggle} />
      <Dashboard toggleState={toggle}  setToggle={setToggle}/>
    </div>
  );
}

export default App;
