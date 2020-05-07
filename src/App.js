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
        <div className="my-3 p-3 bg-white rounded shadow-sm">
            {children}
        </div>
      </main>
    </div>
  );
}


export default App;
