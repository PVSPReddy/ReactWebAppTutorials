var React = require('react');

// var GreeterMessage = require('./GreeterMessage'); //this can be used as shown below as we have already defined the path in the webpac.config.js
var GreeterMessage = require('GreeterMessage');

// var GreeterForm = require('./GreeterForm'); //this can be used as shown below as we have already defined the path in the webpac.config.js
var GreeterForm = require('GreeterForm');

//Step 3
var Greeter = React.createClass({

    getDefaultProps : function()
    {
        return{
            name: 'React Web Application',
            message: 'This is a message from props'
        }
    },

    getInitialState : function(){
        return{
            name: this.props.name,
            message: this.props.message //'This is a message from current State'
        }
    },//this method initialize and sets state for this page.

    onHandleFormSubmit : function(e)//function(e,y)
    {
        this.setState(e);
        var uName = e.uName;
        var uMessage = e.uMessage;
        // if(typeof uName === 'string' && uName.length > 0)
        // {
        //     this.setState({
        //         name: uName
        //     });
        // }
        // if(typeof uMessage === 'string' && uMessage.length > 0)
        // {
        //     this.setState({
        //         message:uMessage
        //     });
        // }
    },

    render : function()
    {
        var nameFromState = this.state.name;
        var messageFromState = this.state.message;
        return(
            <div>
                <h1>Hello World this is Seventh Lesson</h1>
                <GreeterMessage name={nameFromState} message={messageFromState}/>
                <GreeterForm onFormSubmission={this.onHandleFormSubmit}/>
            </div>
        );
    }
});

module.exports = Greeter;