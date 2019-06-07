import React from 'react';
import { connect } from 'react-redux';
import LoggedRedirectorContainer from '../../../containers/LoggedRedirectorContainer';
import { getClientUrl } from '../../../controllers/BobbaProxy';

class ClientPage extends React.Component {

    render() {
        const { username, look } = this.props.loginContext;
        const src = getClientUrl(username, look);

        return (
            <div className="client">
              <LoggedRedirectorContainer />
              <iframe title='Bobba' src={src}>

              </iframe>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(ClientPage);