import React from 'react'
import { PageHeader } from 'react-bootstrap'

const App = (props) => {
    return (
        <div>
            <PageHeader>BDGT <small>Never go out of budget again</small></PageHeader>
            {props.children}
        </div>
    )
}

export default App
