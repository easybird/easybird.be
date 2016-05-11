import React from 'react';

class TeaserTitle extends React.Component {

    render() {
        return (
            <h6 className="light-green-text">
                {this.props.title}
            </h6>
        )
    }
}

TeaserTitle.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default TeaserTitle;
