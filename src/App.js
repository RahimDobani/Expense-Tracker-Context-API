import './App.css';
import TotalTransaction from './component/TotalTransaction';
import Transaction from './component/Transaction';
import TransactionHistory from './component/TransactionHistory';
import {TransactionState} from './context/TransactionState'

function App() {
  return (
    <div className="App">
      <TransactionState>
      <div>
        <h1 className="font-bold text-4xl my-6">Expense Tracker</h1>
      </div>
      <TotalTransaction/>
      <Transaction/>
      <TransactionHistory/>
      </TransactionState>
    </div>
  );
}

export default App;
