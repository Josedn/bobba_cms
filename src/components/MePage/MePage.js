import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Generic/Footer';
import GenericHeader from '../Generic/GenericHeader';
import NewsPreviewSkeleton from '../Generic/NewsPreviewSkeleton';
import NewsPreview from '../Generic/NewsPreview';
import NavigatorContainer from '../../containers/NavigatorContainer';
import MeContainer from '../../containers/MeContainer';
import Radio from './Radio';
import LoggedRedirectorContainer from '../../containers/LoggedRedirectorContainer';
import { tryGetLastNewsFake } from '../../controllers/BobbaProxy';
import { addNewsList } from '../../actions';

class MePage extends React.Component {

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
                articlePreview.push(<NewsPreview article={news[i]} />);
            }
        }

        return (
            <div className="generic">
                <LoggedRedirectorContainer />
                <GenericHeader />
                <NavigatorContainer />
                <div className="column_container">
                    <article className="left_column user">
                        <MeContainer />
                    </article>
                    <article className="right_column">
                        <Radio />
                    </article>
                </div>
                <article>
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

export default connect(mapStateToProps)(MePage);