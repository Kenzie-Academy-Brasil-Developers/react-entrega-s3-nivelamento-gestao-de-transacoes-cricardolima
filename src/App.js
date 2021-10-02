import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {

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
        />
        <Display 
          entries={transactions.filter(item => item.quantity > 0)}
          exits={transactions.filter(item => item.quantity < 0)}
          transactions={transactions}
          showExit={showExit}
          setShowExit={setShowExit}        
        />
      </header>
    </div>
  );
}

export default App;
