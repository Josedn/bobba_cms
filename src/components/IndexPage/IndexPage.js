import React from 'react';
import Footer from '../Generic/Footer';
import IndexTeaser from './IndexTeaser';
import NewsPreview from '../Generic/NewsPreview';
import IndexHeaderContainer from '../../containers/IndexHeaderContainer';

class IndexPage extends React.Component {
    render() {
        return (
            <div className="index">
                <IndexHeaderContainer/>
                <article className="teaser">
                    <IndexTeaser/>
                </article>
                <article>
                    <NewsPreview/>
                </article>
                <Footer />
            </div>
        );
    }
}

export default IndexPage;