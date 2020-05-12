import React from 'react';
// import './App.scss';
import Navbar from "./components/navbar";
import Baner from "./components/banner";
// import Tabs from "./components/tabs";

function App({children}) {
  return (
    <div className="App">
      <Navbar />
      <main role="main" className="container">
        <Baner />
        {children}
      </main>
    </div>
  );
}


export default App;

// componenta: league -> o lista de events(games), -> markets(tip de pariu) -> lista de oucome
// o liga
// lista de meciuri -> care contin un tip de pariu (market)
// lista de pariu contine rezultate posibile. un market are mai multe outcomeuri
//