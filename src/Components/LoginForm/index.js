import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { submitName } from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  submitName: (name) => dispatch(submitName(name)),
});

const connectedLoginForm = connect(null, mapDispatchToProps)(LoginForm);

export {
  connectedLoginForm as LoginForm,
};
