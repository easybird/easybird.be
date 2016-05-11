import React from 'react';

class TeaserText extends React.Component {

    render() {
        return (
            <p className="brown-text">
                {this.props.text}
            </p>
        )
    }
}

TeaserText.propTypes = {
    text: React.PropTypes.string.isRequired
};
export default TeaserText;
