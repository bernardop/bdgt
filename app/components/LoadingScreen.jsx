import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import { Grid, Col, Row } from 'react-flexbox-grid'

const LoadingScreen = () => {
  return (
    <Grid>
      <Row around='xs' center='xs' middle='xs' className='loading-container'>
        <Col xs={12}>
          <CircularProgress size={2} />
        </Col>
      </Row>
    </Grid>
  )
}

export default LoadingScreen
