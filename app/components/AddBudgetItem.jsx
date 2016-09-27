import React, { PropTypes } from 'react'
import { Grid } from 'react-flexbox-grid/lib/index'
import BdgtCloseButton from './BdgtCloseButton'

const AddBudgetItem = (props) => {
    return (
        <Grid>
            <BdgtCloseButton position='end' handleClick={props.handleCloseButtonClick} />
        </Grid>
    )
}

AddBudgetItem.propTypes = {
    handleCloseButtonClick: PropTypes.func
}

export default AddBudgetItem
