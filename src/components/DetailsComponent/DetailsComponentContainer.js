import { connect } from 'react-redux'

import DetailsComponent from './DetailsComponent'

const mapStatetoProps = state => {
  return {
    mockDataSaga: state.mockDataSaga
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DetailsComponent)
