var Greeter = React.createClass({

    getDefaultProps : function()
    {
        return{
            name: 'React Web Application'
        }
    },

    render : function()
    {
        var nameFromProps = this.props.name;
        return(
            <div>
                <h1>Hello World this is Third Tutorial</h1>
                <h2>Welcome {nameFromProps} </h2>
                <h4>This is a react component</h4>
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