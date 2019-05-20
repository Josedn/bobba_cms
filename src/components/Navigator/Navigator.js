import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../actions';

class Navigator extends React.Component {

    onLogOut = event => {
        event.preventDefault();
        const { dispatch } = this.props;
        
        dispatch(logOut());
    }

    render() {
        return (
            <nav>
                <div className="full_container">
                    <ul>
                        <li><Link className="selected" to="/me">Jose</Link></li>
                        <li><Link to="/articles">Comunidad</Link></li>
                        <li className="rightside logout"><Link to="/" onClick={this.onLogOut}>Salir</Link></li>
                        <li className="rightside"><Link to="/manage">Opciones</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigator;