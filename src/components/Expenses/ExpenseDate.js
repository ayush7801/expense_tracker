import react from 'react';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    return (
        <div className="expense-item__date">{day}-{ month}-{ year}</div>
    );
}

export default ExpenseDate;