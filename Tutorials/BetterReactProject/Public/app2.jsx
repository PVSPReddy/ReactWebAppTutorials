var React = require('react');
var ReactDOM = require('react-dom');
//the obove two lines are to be added only when using webpack package

// var GreeterMessage = require('./Components/GreeterMessage');

// var GreeterForm = require('./Components/GreeterForm');

var Greeter = require('./Components/Greeter');

var firstName = "Venkata Sivaprasad Reddy";

ReactDOM.render(
    // <Greeter name="Siva Prasad"/>, // this is also working
    <Greeter name={firstName}/>,
    document.getElementById('app')
);