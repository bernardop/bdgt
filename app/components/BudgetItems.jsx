import React, {Component} from 'react';
import BudgetItem from './BudgetItem.jsx'

export default class BudgetItems extends Component {
    render() {
        const items = this.props.items;

        return (
            <div className="row">
                <ul className="col-md-3 budget-items">{items.map(this.renderBudgetItem)}</ul>
            </div>
        );
    }

    renderBudgetItem = (budgetItem) => {
        return (
            <li className="budget-item" key={budgetItem.id}>
                <BudgetItem itemName={budgetItem.name}
                    amount={budgetItem.amount}
                    onEdit={this.props.onEdit.bind(null, budgetItem.id)}
                    onDelete={this.props.onDelete.bind(null, budgetItem.id)} />
            </li>
        );
    }
}
