import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light'); 

const toggleMode=()=>{
  if(mode=='light')
  {
    setmode('black');
    document.body.style.backgroundColor='#082440';
    showAlert("Dark Mode Enabled","success");
    document.title="TextUtils-Dark Mode";
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","success");
    document.title="TextUtils-Light Mode";
  }
};
const [alert, setalert] = useState(null);
const showAlert=(message,type)=>{
 setalert({
   text:message,
   type:type
 })
 setTimeout(()=>{
 setalert(null);
 },1500);
 
}
  return (
    <Router>

 <Navbar  title={"TextUtils"} textAbout={"About Us"} mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
          <Routes>
          <Route exact path="/about" element={ <About /> }/>
          <Route exact path="/" element={
      <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode}  />}/>
        </Routes>

</Router>
  );
}

export default App;
