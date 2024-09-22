import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 5]);

  const showMax = () => {
    console.log('Changeing Max value');
    return Math.max(...arr);
  };

  const maxValue = useMemo(() => showMax(), [arr]);

  const AddToArray = () => {
    setArr([...arr, Math.round(count * Math.random())]);
  };

  return (
    <div className="App">
      <h1>Use Memo Hook</h1>
      <button onClick={() => setCount(count + 1)}> Add Count</button>
      <button onClick={AddToArray}>Add to Array</button>
      <h2>Count value : {count}</h2>
      <p>{JSON.stringify(arr)}</p>
      <p>{maxValue}</p>
    </div>
  );
}

export default App;
