import React from 'react';
import { connect } from 'react-redux';

class Me extends React.Component {
    render() {
        const { username, motto, look } = this.props.loginContext;
        const lookUrl = '//www.habbo.com/habbo-imaging/avatarimage?figure=' + look + '&size=l&direction=2&gesture=sml';

        return (
            <>
                <div className="overlay">
                    <img alt={username} src={lookUrl} />
                </div>
                <div className="user_info">
                    <h3>{username}</h3>
                    <p>{motto}</p>
                    <button>
                        Entrar al hotel
                </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(Me);