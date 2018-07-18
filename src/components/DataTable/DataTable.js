import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarBorder from '@material-ui/icons/StarBorder'
import Details from '@material-ui/icons/Details'
import StepSlider from '../StepSlider'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class DataTable extends React.Component {
  constructor(props){
    super(props);
    this.updateLabel = this.updateLabel.bind(this);
  }

  state = {
    votes: 5
  };

  static propTypes = {
    mockDataSaga: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  updateLabel = (value) => {
    this.setState({ votes: value });
    this.props.filterVotes(value);
  }

  createTable(data) {
    return [].concat(data)
      .sort((a, b) => parseInt(a.votes, 0) < parseInt(b.votes, 0))
      .map((row, i) => {
        let votes = [];
        for (var j = 0; j < row.votes; j++) {
          votes.push(<StarBorder key={`${i}-${j}`}/>);
        }
        return <ListItem key={i} className="row">
          <ListItemText inset className="col">{row.name}</ListItemText>
          <ListItemText inset className="col"><img src={row.image} /></ListItemText>
          <ListItemText inset className="col">
            {votes}
          </ListItemText>
          <ListItemIcon>
            <a onClick={() => this.context.router.history.push(`details/${row.id}`)} >
              <Details />
            </a>
          </ListItemIcon>
        </ListItem>
      });
  }

  render() {
    const { data } = this.props.mockDataSaga
    console.log(data)

    return (
      <div className="table">
        <Card>
          <CardContent>
            <div className="title">Product Search</div>
            <div className="slider">
              <div className="votes">Votes {this.state.votes}</div>
              <CardActions className="card-actions">
                <StepSlider updateLabel={this.updateLabel} />
              </CardActions>
            </div>
            <List className="list">
              {this.createTable(data)}
            </List>
          </CardContent>
        </Card>
      </div>
    )
  }
}
