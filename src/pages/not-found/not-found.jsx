import React, {Component} from 'react'
import {Button, Row, Col} from 'antd'
import {connect} from 'react-redux'

import {setHeadTitle} from '../../redux/actions'
import './not-found.less'

/*
前台404页面
 */
class NotFound extends Component {

  goHome = () => {
    this.props.setHeadTitle('首页')
    this.props.history.replace('/home')
  }

  render() {
    return (

      <Row className='not-found'>
        <Col span={12} className='left'></Col>
        <Col span={12} className='right'>
          <h1>404</h1>
          <h2>Sorry, page doesn't exist</h2>
          <div>
            <Button type='primary' onClick={this.goHome}>
              Back to home
            </Button>
          </div>
        </Col>
      </Row>
    )
  }
}

export default connect(
  null,
  {setHeadTitle}
)(NotFound)