import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return ( <div>
            <h1> Contacts List </h1> 
            </div>
        )
    }
}

React.render( < App / > , document.getElementById('app'));