var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
    render: funtion() {
        return <h1>Pet Appointments</h1>
    } //render
}); //MainInterface

ReactDOM.render(
    <MainInterface />,
    document.getElementById('petAppointments')
); //render