import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // Only increment if counter is less than 20
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter +1);
      setCounter(prevCounter => prevCounter +1 );
    }
  };

  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1); // No need for a condition here
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
