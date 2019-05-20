import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Generic/Footer';
import HeaderContainer from '../../containers/HeaderContainer';
import NewsPreviewSkeleton from '../Generic/NewsPreviewSkeleton';
import NewsPreview from '../Generic/NewsPreview';
import NavigatorContainer from '../../containers/NavigatorContainer';
import { tryGetLastNewsFake } from '../../controllers/BobbaProxy';
import { addNewsList } from '../../actions';

class ArticlePage extends React.Component {

    componentDidMount() {
        const { newsFetched, newsFetching } = this.props.newsContext;
        const { dispatch } = this.props;
        if (!newsFetched && !newsFetching) {
            tryGetLastNewsFake().then(list => {
                dispatch(addNewsList(list));
            });
        }
    }

    render() {
        const { news } = this.props.newsContext;
        let articlePreview = <><NewsPreviewSkeleton /><NewsPreviewSkeleton /></>;

        if (news.length > 0) {
            articlePreview = [];
            for (let i = 0; i < news.length; i++) {
                const currentArticle = news[i];
                articlePreview.push(<NewsPreview key={currentArticle.id} article={currentArticle} />);
            }
        }

        return (
            <div className="generic">
                <HeaderContainer />
                <NavigatorContainer />
                <div className="column_container">
                    <article className="left_column">
                        
                    </article>
                    <article className="right_column">
                        
                    </article>
                </div>
                <article>
                    <h1 className="blue">Últimas noticias</h1>
                    {articlePreview}
                </article>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    newsContext: state.news,
});

export default connect(mapStateToProps)(ArticlePage);