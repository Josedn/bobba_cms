import React from 'react';
import { connect } from 'react-redux';
import { changeMottoFake } from '../../../controllers/BobbaProxy';
import { RIEInput } from 'riek2';

class Me extends React.Component {

    constructor(props) {
        super(props);
        const { motto } = this.props.loginContext;
        this.state = {
            motto
        };
    }

    popClient = event => {
        event.preventDefault();
        window.open('/client', 'Bobba', 'width=980,height=600,location=no,status=no,menubar=no,directories=no,toolbar=no,resizable=no,scrollbars=no');
        return false;
    }

    handleChangeMotto = data => {
        const allegedMotto = data.motto;
        const { token } = this.props.loginContext;

        changeMottoFake(token, allegedMotto).then(response => {
            this.setState({ motto: response.motto });
        });
    }

    render() {
        const { username, look } = this.props.loginContext;
        const { motto } = this.state;
        const lookUrl = '//www.habbo.com/habbo-imaging/avatarimage?figure=' + look + '&size=l&direction=2&gesture=sml';

        return (
            <>
                <div className="overlay">
                    <img alt={username} src={lookUrl} />
                </div>
                <div className="user_info">
                    <h3>{username}</h3>
                    <p>
                        <RIEInput
                            value={motto}
                            change={this.handleChangeMotto}
                            classLoading="loading"
                            propName='motto' />
                    </p>
                    <img src="/web-gallery/images/pencil.svg" alt="editar datos" className="edit_icon" />
                    <button onClick={this.popClient}>
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