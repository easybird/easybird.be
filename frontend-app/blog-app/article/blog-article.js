import React from 'react';

class BlogArticle extends React.Component {

    render() {
        return (
            <div>
                This is a blog article: {this.props.test}
            </div>
        )
    }
}

BlogArticle.propTypes = {
    test: React.PropTypes.string.isRequired
};
export default BlogArticle;
