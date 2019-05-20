import React from 'react';
import Logo from './Logo';

class GenericHeader extends React.Component {
    render() {
        return (
            <header>
                <div className="header_container">
                    <Logo />
                    <p>
                        0 usuarios conectados
                    </p>
                </div>
            </header>
        );
    }
}

export default GenericHeader;