import React, {Component} from 'react';

export default class BudgetItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    render() {
        const editing = this.state.editing;

        return (
            <div>
                {editing ? this.renderEdit() : this.renderBudgetItem()}
            </div>
        );
    }

    renderEdit = () => {
        return (
            <div>
                <label>{this.props.itemName}</label>
                <input type="text" autoFocus={true}
                    defaultValue={this.props.amount} onBlur={this.finishEdit}
                    onKeyPress={this.checkEnter} />
            </div>
        );
    }

    renderBudgetItem = () => {
        const onDelete = this.props.onDelete;

        return (
            <div onClick={this.edit}>
                <span className="name-amount">{this.props.itemName} - ${this.props.amount}</span>
                {onDelete ? this.renderDelete() : null}
            </div>
        )
    }

    renderDelete = () => {
        return (
            <button className="btn btn-sm btn-default pull-right glyphicon glyphicon-minus delete" onClick={this.props.onDelete}></button>
        );
    }

    edit = () => {
        this.setState({ editing: true });
    }

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        this.props.onEdit(e.target.value);

        this.setState({ editing: false });
    }
}
