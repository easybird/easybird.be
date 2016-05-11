import React from 'react';
import { VIEWPORT, getViewPortCategory } from '../helpers/view-port-helper.js';
import ArticleList from '../../../node_modules/easyblog/lib/api/article-list/article-list.js';
import TeaserCard from '../teaser/teaser-card.js';

class BlogOverview extends React.Component {

    constructor(props) {
        super(props);

        this.viewPort = "";

        this.state = {
            list1: this.props.articles.length > 0 ? [this.props.articles[0]] : [],
            list2: this.props.articles.length > 1 ? [this.props.articles[1]] : [],
            list3: this.props.articles.length > 2 ? [this.props.articles[2]] : []
        };

        this.splitArticles = (articles, viewPort) => this._splitArticles(articles, viewPort);
        this.handleResize = () => this._handleResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.viewPort = getViewPortCategory(window.innerWidth);
        this.splitArticles(this.props.articles, this.viewPort);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    _handleResize() {
        var newViewPort = getViewPortCategory(window.innerWidth);
        if (newViewPort !== this.viewPort) {
            this.viewPort = newViewPort;
            this.splitArticles(this.props.articles, newViewPort);
        }
    }

    _splitArticles(articles, viewPort) {
        let {list1, list2, list3} = this.state;
        list1 = [];
        list2 = [];
        list3 = [];

        if (viewPort != VIEWPORT.LARGE) {
            articles.forEach(article => {
                if (list1.length === list2.length) {
                    list1.push(article)
                }
                else {
                    list2.push(article)
                }
            });
        } else {
            articles.forEach(article => {
                if (list1.length === (list2.length + list3.length) / 2) {
                    list1.push(article)
                }
                else if (list2.length === list3.length) {
                    list2.push(article)
                }
                else {
                    list3.push(article)
                }
            });
        }

        this.setState({
            list1: list1,
            list2: list2,
            list3: list3
        })

    }

    render() {
        const {list1, list2, list3} = this.state;
        const {teaserCardData} = this.props;

        const teaserCard =
            <TeaserCard
                cardLink = {teaserCardData.cardLink}
                photoUrl = {teaserCardData.photoUrl}
                title = {teaserCardData.title}
                text = {teaserCardData.text}
            />;

        return (
            <div className="grey lighten-4">
                <div className="row">
                    <div className="col s12 m5 l3">
                        <ArticleList articles= {list1} />
                    </div>
                    <div className="col s12 m5 l4">
                        <ArticleList articles= {list2} />
                    </div>
                    <div className="col m2 l3 hide-on-med-and-down">
                        {teaserCard}
                        <ArticleList articles= {list3} />
                    </div>
                    <div className="col m2 hide-on-small-and-down">
                        <div className="toc-wrapper">
                            {this.viewPort === VIEWPORT.MEDIUM && teaserCard}
                        </div>
                    </div>
                </div>
                <div className="row hide-on-med-and-up">
                    <div className="col s12">
                        {teaserCard}
                    </div>
                </div>
            </div>
        )
    }
}

BlogOverview.propTypes = {
    articles: React.PropTypes.array.isRequired,
    teaserCardData: React.PropTypes.object.isRequired
};
export default BlogOverview;
