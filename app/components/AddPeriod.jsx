import React, { Component } from 'react'
import { Input, Button, Col, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'

export default class AddPeriod extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Col mdOffset={11} md={1} xsOffset={11} xs={1}>
                    <Link to="/" className="btn btn-lg glyphicon glyphicon-remove-circle"></Link>
                </Col>
                <Col mdOffset={3} md={6} xsOffset={1} xs={10}>
                    <h2>Create a new period</h2>
                    <Input type="text" label="Start date"/>
                    <Input type="text" label="End date"/>
                    <Button bsStyle="primary">Submit</Button>
                    <Button bsStyle="default">Cancel</Button>
                </Col>
            </div>
        )
    }
}
