import uuid from 'node-uuid';
import React, {Component} from 'react';
import BudgetItems from './BudgetItems.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            budgetItems: [
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
            ]
        };
    }

    render() {
        const budgetItems = this.state.budgetItems;

        return (
            <div>
                <button className="add-budget-item" onClick={this.addBudgetItem}>+</button>
                <BudgetItems items={budgetItems} onEdit={this.editBudgetItem}
                    onDelete={this.deleteBudgetItem} />
            </div>
        );
    }

    addBudgetItem = () => {
        this.setState({
            budgetItems: [...this.state.budgetItems, {
                id: uuid.v4(),
                name: 'Costco',
                amount: 231.98
            }]
        });
    }

    editBudgetItem = (itemId, amount) => {
        const budgetItems = this.state.budgetItems;
        const itemIndex = this.findBudgetItem(budgetItems, itemId);

        if (itemIndex < 0) {
            return;
        }

        budgetItems[itemIndex].amount = amount;

        // shorthand - {budgetItems} is the same as {budgetItems: budgetItems}
        this.setState({budgetItems});
    }

    findBudgetItem = (budgetItems, itemId) => {
        const itemIndex = budgetItems.findIndex((item) => item.id === itemId);

        if (itemIndex < 0) {
            console.warn('Failed to find budget item', budgetItems, itemId);
        }

        return itemIndex;
    }

    deleteBudgetItem = (itemId) => {
        const budgetItems = this.state.budgetItems;
        const itemIndex = this.findBudgetItem(budgetItems, itemId);

        if (itemIndex < 0) {
            return;
        }

        this.setState({
            budgetItems: budgetItems.slice(0, itemIndex).concat(budgetItems.slice(itemIndex + 1))
        });
    }
}
