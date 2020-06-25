import React from "react";
import Weather from "./components/WeatehrComponent";
import "./App.css";

//Pegar dados
//Passar dados Para o component Render

function App() {
  let title = "Previsão do tempo";
  document.title = title;
  return (
    <>
      <h1>{title}</h1>
      <Weather></Weather>
    </>
  );
}

export default App;
