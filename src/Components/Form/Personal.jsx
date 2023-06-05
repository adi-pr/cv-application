import React, { Component } from 'react'

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='personalContainer'>
                <form onSubmit={this.handelSubmit}>
                <h1>Hello</h1>
                </form>
            </div>
         );
    }
}
 
export default Personal;