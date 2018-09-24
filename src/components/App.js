import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';
import MemeItem from './MemeItem';

class App extends Component {
    constructor() {
        super();

        this.state = {
            memeLimit: 15
        }
    }
    onclicks() {
        this.setState({
            memeLimit: this.state.memeLimit + 5
        })
    }
    render() {
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <h1>Bikin Memes</h1>
                </div>
                <div className="row h-100 justify-content-center align-items-center">
                {
                    this.props.memes.slice(0,this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem key={index} meme={meme}/>
                        )
                    })
                }
                    <button className='form-control btn-info load' onClick={() => this.onclicks()}>Load More....</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return state;
}

export default connect(mapStateToProps, null)(App);
