import uuid from 'node-uuid';
import React, {Component} from 'react';
import Note from './Note.jsx'

const budgetItems = [
    {
        id: uuid.v4(),
        name: 'Mortgage',
        amount: 200.00
    },
    {
        id: uuid.v4(),
        name: 'Target',
        amount: 34.50
    },
    {
        id: uuid.v4(),
        name: 'Meijer',
        amount: 29.43
    }
];

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>{budgetItems.map(this.renderBudgetItems)}</ul>
            </div>
        );
    }

    renderBudgetItems(budgetItem) {
        return (
            <li key={budgetItem.id}>
                <Note itemName={budgetItem.name} amount={budgetItem.amount} />
            </li>
        );
    }
}
