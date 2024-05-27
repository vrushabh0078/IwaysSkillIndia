import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Image from './Components/Image/Image';
import About from './Components/Middle/About';
import DrKalam from './Components/DrKalam/DrKalam';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';



function App() {
  return (

    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path='/signUp' element = {<SignUp/>} />
          </Routes>
        <Image/>
        <About/>
        <DrKalam/>
        <Form/>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;