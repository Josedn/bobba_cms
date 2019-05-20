import React from 'react';

class GenericHeader extends React.Component {
    render() {
        return (
            <header>
                <div className="header_container">
                    <div className="logo">
                        <img alt="Bobba" src="/web-gallery/images/ghosthead.png" />
                        <h1>Bobba</h1>
                    </div>
                    <p>
                        0 usuarios conectados
            </p>
                </div>
            </header>
        );
    }
}

export default GenericHeader;