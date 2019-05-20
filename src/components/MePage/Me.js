import React from 'react';

class Me extends React.Component {
    render() {
        return (
            <>
                <div className="overlay">
                    <img alt="Jose"
                        src="//www.habbo.com/habbo-imaging/avatarimage?figure=hd-190-10.lg-3023-1408.ch-215-91.hr-893-45&size=l&direction=2&gesture=sml" />
                </div>
                <div className="user_info">
                    <h3>Jose</h3>
                    <p>yolo</p>
                    <button>
                        Entrar al hotel
                </button>
                </div>
            </>
        );
    }
}

export default Me;