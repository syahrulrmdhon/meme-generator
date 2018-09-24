import React, { Component } from 'react';

class MemeItem extends Component {
    render() {
        return (
            <div className="meme-item">
                <img className="meme-img" src={this.props.meme.url} alt={this.props.meme.name}/>
                <h5 className="meme-text">{this.props.meme.name}</h5>
            </div>
        );
    }
}

export default MemeItem;
