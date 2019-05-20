import React from 'react';
import Footer from '../Generic/Footer';
import GenericHeader from '../Generic/GenericHeader';
import NewsPreview from '../Generic/NewsPreview';
import NavigatorContainer from '../../containers/NavigatorContainer';
import Me from './Me';
import Radio from './Radio';
import LoggedRedirectorContainer from '../../containers/LoggedRedirectorContainer';

class MePage extends React.Component {
    render() {
        return (
            <div className="generic">
                <LoggedRedirectorContainer/>
                <GenericHeader />
                <NavigatorContainer />
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