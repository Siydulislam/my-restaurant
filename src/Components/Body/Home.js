import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {
    render() {
        document.title = "My Restaurant";
        return (
            <div>
                <Loading></Loading>
            </div>
        )
    }
}

export default Home;