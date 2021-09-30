import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {

  },
  textField: {
    width: '300px',
    marginLeft: '150px',
    '& label.Mui-focused': {
      color: 'grey',
    }
  },

  cssLabel: {
    color : 'grey',
    focused: {}
  },


  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'grey !important',
    focused: {}
  },

});

class ValidField extends React.Component {
  state = {
    name: 'InputMode',
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id={this.props.id}
          label={this.props.label}
          className={classes.textField}
          onChange={this.props.onChange}
          margin="normal"
          variant="outlined"
          type={this.props.type}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric"
          }}
          onKeyDown={this.props.onKeyDown}
          onSubmit={this.props.onKeyDown}
        />
      </form>
    );
  }
}

ValidField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ValidField);