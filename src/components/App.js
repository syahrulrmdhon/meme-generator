import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/style.css';

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
                    <h1>Selamat Datang di Meme Generator</h1>
                </div>
                <div style={{textAlign: 'center'}}>
                {
                    this.props.memes.slice(0,this.state.memeLimit).map((meme, index) => {
                        return (
                            <h4 key={index}>{meme.name}</h4>
                        )
                    })
                }
                    <button className='form-control btn-info' onClick={() => this.onclicks()}>Load More....</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return state;
}

export default connect(mapStateToProps, null)(App);
