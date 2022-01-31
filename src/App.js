import react from 'react';
import { useState } from 'react/cjs/react.development';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {

  function ExpenseObject(eid,etitle,edate,eamount){
    this.id = eid;
    this.title = etitle;
    this.date = new Date(...[edate]);
    this.amount = eamount; 
  }

  let e1 = new ExpenseObject(1,"School Fees",[2022,1,17],500);
  let e2 = new ExpenseObject(2,"House Rent",[2022,1,18],5000);
  let e3 = new ExpenseObject(3,"Tution Fees",[2022,1,17],300);
  let e4 = new ExpenseObject(4,"Bus Fees",[2022,1,17],100);

  let expenseList = [e1,e2,e3,e4];

  let [expense,setExpense] = useState(expenseList);

  let [i,seti] = useState(5);
  const addNewExpense = (newExpense) => {
    newExpense = {
      id : i,
      ...newExpense
    }
    seti(i+1);
    let updatedExpense = [newExpense,...expense];
    setExpense(updatedExpense);
    console.log(expense);
  }

  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <NewExpense sendNewExpense={addNewExpense}/>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
