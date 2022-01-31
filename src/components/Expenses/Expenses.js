import react,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css"

const Expenses = (props) => {
    console.log(props.expenses);
    return(
        <Card className="expense">
            {
                props.expenses.map(
                    e => (
                        <ExpenseItem date={e.date} title={e.title} amount={e.amount} key={e.id}/>
                    )
                )
            }
        </Card>
    );
}

export default Expenses;