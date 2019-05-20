import React from 'react';
import Footer from '../Generic/Footer';
import IndexTeaser from './IndexTeaser';
import IndexHeader from './IndexHeader';
import NewsPreview from '../Generic/NewsPreview';

class IndexPage extends React.Component {
    render() {
        return (
            <div className="index">
                <IndexHeader/>
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