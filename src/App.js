import React from 'react';
import './App.css';
import {
  Navbar,
  Header,
  Features,
  Download,
  Subcribe,
  Faq,
  Footer,
} from "./components";

function App() {
  return (
    <main>
     <header className="header-bg">
      <Navbar/>
      <Header/>
      
      </header> 
      <Features/>
      <Download/>
      <Subcribe/>
      <Faq/>
      <Footer/>
      <div>
     
    </div>
    </main>

   
  );
}

export default App;
