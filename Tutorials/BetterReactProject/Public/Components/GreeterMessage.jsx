var React = require('react');

//Step 1
var GreeterMessage = React.createClass({
    getDefaultProps : function()
    {
        return{
            name: "default name",
            message: "default message"
        }
    },

    render: function(){
        var nameFromState = this.props.name;
        var messageFromState = this.props.message;
        return(
            <div>
                {/* <h1>This is a seventh example</h1> */}
                <h4>This is a react component</h4>
                <h2>Welcome {nameFromState + "!"} </h2>
                <h4>{messageFromState + " by " + nameFromState}</h4>
            </div>
        );
    }
});

module.exports = GreeterMessage;