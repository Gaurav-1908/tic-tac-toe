import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Board } from './components/Board';
import { useState } from "react";
// import { Header } from "./Header";
import { w3cwebsocket  } from "websocket";

const url = process.env.REACT_APP_SERVER_ADDRESS;
const client = new w3cwebsocket(url);


export default function App() {
  const [turn, setTurn] = useState("X");

  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  
  return (
    <>
    {/* <Header turn = {turn}/> */}
    <Board 
      turn = {turn}
      setTurn = {setTurn}
      />
    </>
   
  );
}

// export default App;