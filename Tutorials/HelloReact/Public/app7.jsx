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
                <h4>This is a react component</h4>
                <h2>Welcome {nameFromState + "!"} </h2>
                <h4>{messageFromState + " by " + nameFromState}</h4>
            </div>
        );
    }
});

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
                <h1>Hello World this is Sixth Tutorial</h1>
                <GreeterMessage name={nameFromState} message={messageFromState}/>
                <GreeterForm onFormSubmission={this.onHandleFormSubmit}/>
            </div>
        );
    }
});

var firstName = "Venkata Sivaprasad Reddy";

ReactDOM.render(
    // <Greeter name="Siva Prasad"/>, // this is also working
    <Greeter name={firstName}/>,
    document.getElementById('app')
);