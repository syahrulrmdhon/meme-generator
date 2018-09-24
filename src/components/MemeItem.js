import React, { Component } from 'react';

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }
    render() {
        return (
            <div 
                className="meme-item"
                onMouseEnter={() => this.setState({hovered:true})}
                onMouseLeave={() => this.setState({hovered:false})}
            >
                <img className={this.state.hovered ? "meme-img dark-img" : "meme-img" } src={this.props.meme.url} alt={this.props.meme.name}/>
                <h5 className={this.state.hovered ? "meme-text" : "no-text"}>{this.props.meme.name}</h5>
            </div>
        );
    }
}

export default MemeItem;
