import { connect } from 'react-redux';
import IndexHeader from '../components/IndexPage/IndexHeader';

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(IndexHeader);