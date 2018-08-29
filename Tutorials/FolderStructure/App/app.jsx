var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <p> In this example we are deleting all the unnecessary files and moving the raw jsx files to App folder in pulbic folder we are only keeping index.html file and bundle.js file also made changes in webpack.config.js for app.jsx path which is in App folder</p>
    </div>,
    document.getElementById('app')
);