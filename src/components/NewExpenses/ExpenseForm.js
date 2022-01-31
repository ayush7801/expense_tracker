import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let titleElement = document.getElementById('title');
        let amountElement = document.getElementById('amount');
        let dateElement = document.getElementById('date');

        let newExpense = {
            title : titleElement.value,
            amount : amountElement.value,
            date : new Date(dateElement.value)
        }
        props.sendNewExpense(newExpense);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" id='title'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number"  id='amount' min="0.01" step="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" id='date'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;