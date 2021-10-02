import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [entries, setEntries] = useState([]);

  const [exits, setExities] = useState([])

  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
])

  const [showExit, setShowExit] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Form 
          setTransactions={setTransactions} 
          transactions={transactions} 
          entries={entries} 
          setEntries={setEntries}
          exits={exits} 
          setExities={setExities} 
        
        />
        <Display 
          entries={entries}
          exits={exits}
          transactions={transactions}
          showExit={showExit}
          setShowExit={setShowExit}        
        />
      </header>
    </div>
  );
}

export default App;
