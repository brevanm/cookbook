import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';s
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
