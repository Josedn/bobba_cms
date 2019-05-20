import React from 'react';
import Footer from '../Generic/Footer';
import GenericHeader from '../Generic/GenericHeader';
import NewsPreview from '../Generic/NewsPreview';
import Navigator from '../Navigator/Navigator';
import Me from './Me';
import Radio from './Radio';

class MePage extends React.Component {
    render() {
        return (
            <div className="generic">
                <GenericHeader />
                <Navigator />
                <div className="column_container">
                    <article className="left_column user">
                        <Me />
                    </article>
                    <article className="right_column">
                        <Radio />
                    </article>
                </div>
                <article>
                    <NewsPreview />
                    <NewsPreview />
                </article>
                <Footer />
            </div>
        );
    }
}

export default MePage;