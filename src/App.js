import React from "react";
import SignIn from "./components/signIn/SignIn";
import Dashboard from "./components/dashboard/Dashboard"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<SignIn/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>

    </Routes>



    </>
  );
}

export default App;
