import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

class StepSlider extends React.Component {
  state = {
    value: 5,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.updateLabel(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider value={value} min={1} max={5} step={1} onChange={this.handleChange} />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider)