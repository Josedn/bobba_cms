import React from 'react';

class Navigator extends React.Component {
    render() {
        return (
            <nav>
                <div className="full_container">
                    <ul>
                        <li><a className="selected" href="/me">Jose</a></li>
                        <li><a href="/articles">Comunidad</a></li>
                        <li className="rightside logout"><a href="/logout">Salir</a></li>
                        <li className="rightside"><a href="/manage">Opciones</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigator;