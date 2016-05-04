import React from 'react';
import { render } from 'react-dom';
import BlogArticle from './blog-article.js';

render(
    React.createFactory(BlogArticle)(window.blogArticleProps),
    document.getElementById('blog-article-app')
);
