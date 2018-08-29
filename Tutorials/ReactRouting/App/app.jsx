var React = require('react');
var ReactDOM = require('react-dom');
/*var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
*/
//Instead of all the above line you can simply use the following single line which gives the same values as the above lines
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Main = require('./Components/Main');
var Main = require('Main');//the path is declared in webpack.config.js file
var Weather = require('Weather');//the path is declared in webpack.config.js file
var About = require('About');//the path is declared in webpack.config.js file
var Examples = require('Examples');//the path is declared in webpack.config.js file


 

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);