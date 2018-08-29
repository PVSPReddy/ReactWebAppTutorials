var React = require('react');

//Step 2
var GreeterForm = React.createClass({

    onFormSubmit : function(e)
    {
        e.preventDefault();
        // var uName = "", uMessage="";
        var _uName = this.refs.userName.value;
        var _uMessage = this.refs.userMessage.value;
        var updates = {};
        if(typeof _uName === 'string' && _uName.length > 0)
        {
            updates.name = _uName;
            // updates.uName = _uName;// this dont make the update in the state of caller because the parameter name should be same it should be name not uName
        }
        if(_uMessage.length > 0)
        {
            updates.message = _uMessage;
            // updates.uMessage = _uMessage;// this dont make the update in the state of caller because the parameter message should be same it should be name not uMessage
        }
        // this.props.onFormSubmission(_uName, _uMessage);
        this.props.onFormSubmission(updates);
    },

    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter Name" ref="userName"/>
                    <input type="message" placeholder="Enter Message" ref="userMessage"/>
                    <input type="submit" value="Submit Name"></input>
                </form>
            </div>
        );
    }
});

module.exports = GreeterForm;