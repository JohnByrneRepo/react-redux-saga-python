import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router';

import List from '@material-ui/core/List'

class DetailsComponent extends React.Component {
  static propTypes = {
    mockDataSaga: PropTypes.object
  }

  findWhere(array, criteria) {
    return array.find(item => Object.keys(criteria).every(key => item[key] === criteria[key]))
  }

  render() {
    const { data } = this.props.mockDataSaga
    console.log(data)

    return (
      <div className="table">
        <List className="list">
          Details for { data.filter(item => item.id === this.props.match.params.id)[0].name }
        </List>
      </div>
    )
  }
}

export default withRouter(DetailsComponent)
