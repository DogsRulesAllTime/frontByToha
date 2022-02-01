import React, { useEffect, useState } from 'react';
import Form from './components/Form'
import MainContent from './components/MainContent'

export default function App() {
  const [login, setLogin] = useState(null);
  const [psw, setPsw] = useState(null);
  


  return (
    <div className="main-container">
        <Form />
        <MainContent />
    </div>
  )  
}

