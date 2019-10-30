import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './LoginForm.css';


class LoginForm extends React.Component {
  state = {
    userName: '',
    userNameError: false,
  };

  handeleChangeLogin = (event) => {
    event.preventDefault();
    const { target } = event;
    this.setState({
      userName: target.value.trimRight(),
    });
  }

  handeleSubmit = () => {
    const { userName } = this.state;
    const { submitName, history } = this.props;
    if (userName.length === 0) {
      this.setState({
        userNameError: true,
      });
    } else {
      submitName(userName);
      this.setState({
        userName: '',
        userNameError: false,
      });
      history.push('/list');
    }
  }

  render() {
    const { userName, userNameError } = this.state;
    return (
      <div className="container">
        <Paper>
          <form
            onSubmit={() => this.handeleSubmit()}
            className="form"
          >
            <TextField
              className="input"
              id="outlined-name"
              label="Name"
              value={userName}
              onChange={this.handeleChangeLogin}
              margin="normal"
              variant="outlined"
              error={userNameError}
            />
            <Button variant="contained" type="submit" color="primary" className="submit-button">
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submitName: PropTypes.func,
}.isRequaired;

export default LoginForm;
