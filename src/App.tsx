import React, { useEffect, useState } from 'react';
import Form from './components/Form'
import MainContent from './components/MainContent'

export default function App() {
  const [, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  }, []);

  return (
    <div className="main-container">
        <Form />
        <MainContent />
    </div>
  )  
}