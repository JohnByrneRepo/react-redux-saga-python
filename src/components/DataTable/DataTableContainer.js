import { connect } from 'react-redux'
import DataTable from './DataTable'
import { update } from '../../sagas/mockDataSaga/reducer'

const mapStatetoProps = state => {
  return {
    mockDataSaga: state.mockDataSaga
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterVotes: (value) => {
      dispatch(update(value))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DataTable)
