import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Homepage/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
