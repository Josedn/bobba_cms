import React from 'react';
import Footer from '../Generic/Footer';
import GenericHeader from '../Generic/GenericHeader';
import Register from './Register';
import Welcome from './Welcome';

class MePage extends React.Component {
    render() {
        return (
            <div className="register">
                <GenericHeader />
                <div className="column_container">
                    <article className="left_column">
                        <Register />
                    </article>
                    <article className="right_column">
                        <Welcome />
                    </article>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MePage;