import React from 'react';
import { render } from 'react-dom';
import BlogOverview from './blog-overview.js';

render(
    React.createFactory(BlogOverview)(window.blogOverviewProps),
    document.getElementById('blog-overview-app')
);
