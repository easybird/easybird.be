import React from 'react';
import ArticleList from '../../../node_modules/easyblog/lib/api/article-list/article-list.js';

class BlogOverview extends React.Component {

    render() {
        return (
            <ArticleList articles= {this.props.articles} />
        )
    }
}

BlogOverview.propTypes = {
    articles: React.PropTypes.array.isRequired
};
export default BlogOverview;
