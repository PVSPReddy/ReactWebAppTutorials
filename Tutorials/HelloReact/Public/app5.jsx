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
        var uName = this.refs.userName.value;
        this.refs.userName.value = "";
        this.props.onFormSubmission(uName);
    },

    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="userName"/>
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

    onHandleFormSubmit : function(e)
    {
        var uName = e;
        if(typeof uName === 'string' && uName.length > 0)
        {
            this.setState({
                name: uName,
                message:'This is a message modified from props and set into state'
            });
        }
    },

    render : function()
    {
        var nameFromState = this.state.name;
        var messageFromState = this.state.message;
        return(
            <div>
                <h1>Hello World this is Fifth Tutorial - Nested Components</h1>
                <h2>Welcome {nameFromState + "!"} </h2>
                <h4>This is a react component</h4>
                <h4>{messageFromState + " by " + nameFromState}</h4>
                <GreeterMessage />
                <GreeterMessage name="Second Default Name" message="Second Default Message"/>
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