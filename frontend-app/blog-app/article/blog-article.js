import React from 'react';
import ArticlePage from '../../../node_modules/easyblog/lib/api/article-page/article-page.js';

class BlogArticle extends React.Component {

    render() {
        return (
            <ArticlePage article = {this.props.article} />
        )
    }
}

BlogArticle.propTypes = {
    article: React.PropTypes.object.isRequired
};
export default BlogArticle;
