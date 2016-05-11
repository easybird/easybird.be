import React from 'react';
import TeaserPhoto from './teaser-photo.js';
import TeaserTitle from './teaser-title.js';
import TeaserText from './teaser-text.js';

class TeaserCard extends React.Component {

    render() {
        const { cardLink, photoUrl, title, text} = this.props;

        return (
            <a href={cardLink}>
                <div className="row card">
                    <div className=" card-content hide-on-med-only hide-on-large-only">
                        <div className="col l2 offset-l1">
                            <TeaserPhoto photoUrl={photoUrl} />
                        </div>
                        <div className="col l8 offset-l1">
                            <div className="row">
                                <TeaserTitle title={title} />
                            </div>
                            <div className="row">
                                <TeaserText text={text} />
                            </div>
                        </div>
                    </div>
                    <div className=" card-content hide-on-small-only">
                        <div className="row">
                            <TeaserPhoto photoUrl={photoUrl} />
                        </div>
                        <div className="row">
                            <TeaserTitle title={title} />
                        </div>
                        <div className="row">
                            <TeaserText text={text} />
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

TeaserCard.propTypes = {
    cardLink: React.PropTypes.string.isRequired,
    photoUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default TeaserCard;
