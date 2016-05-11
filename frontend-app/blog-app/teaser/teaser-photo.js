import React from 'react';

class TeaserPhoto extends React.Component {

    render() {
        return (
            <img className="circle responsive-img valign" src={this.props.photoUrl}/>
        )
    }
}

TeaserPhoto.propTypes = {
    photoUrl: React.PropTypes.string.isRequired
};
export default TeaserPhoto;
