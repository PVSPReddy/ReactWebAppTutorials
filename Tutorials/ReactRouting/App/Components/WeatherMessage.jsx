var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
        return(
            <div>
                <p>The Temperature in India is 40 Degrees Centigrade</p>
            </div>
        );
    }
});

module.exports = WeatherMessage;