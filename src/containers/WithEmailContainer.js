import { connect } from 'react-redux';
import { login } from '../store/actions/actions';
import WithEmail from '../components/WithEmail';

const mapDispatchToProps = dispatch => ({
	onLogin: user => {
		return dispatch(login(user));
	}
});

const WithEmailContainer = connect(
	null,
	mapDispatchToProps
)(WithEmail);

export default WithEmailContainer;
