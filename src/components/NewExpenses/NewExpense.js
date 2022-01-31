import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const newExpenseItem = (newExpense) => {
        props.sendNewExpense(newExpense);
    }

    return(
        <div className='new-expense'>
            <ExpenseForm sendNewExpense={newExpenseItem} />
        </div>
    );
}

export default NewExpense;