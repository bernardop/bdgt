import React from 'react'
import { Input, Button } from 'react-bootstrap'

const AddPeriod = () => {
    return (
        <div>
            <Input type="text"/>
            <Input type="text"/>
            <Input type="text"/>
            <Button bsStyle="primary">Submit</Button>
            <Button bsStyle="default">Cancel</Button>
        </div>
    )
}

export default AddPeriod
