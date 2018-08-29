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

    onFormSubmit : function(e)
    {
        e.preventDefault();
        var uName = this.refs.userName.value;
        this.refs.userName.value = "";
        if(typeof uName === 'string' && uName.length > 0)
        {
            this.setState({
                name: uName,
                message:'This is a message modified from props and set into state'
            });
        }
        // this.setState({
        //     name: uName,
        //     message:'This is a message modified from props and set into state'
        // });
        //alert(uName);
    },

    render : function()
    {
        var nameFromProps = this.props.name;
        var messageFromProps = this.props.message;
        var nameFromState = this.state.name;
        var messageFromState = this.state.message;
        return(
            <div>
                <h1>Hello World this is Fourth Tutorial</h1>
                <h2>Welcome {nameFromProps + "!"} </h2>
                <h4>This is a react component</h4>
                <h4>{messageFromProps + " by " + nameFromProps}</h4>
                <h4>{messageFromState + " by " + nameFromState}</h4>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="userName"/>
                    <input type="submit" value="Submit Name"></input>
                </form>
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