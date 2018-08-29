var Greeter = React.createClass({
    render : function()
    {
        return(
            <div>
                <h1>Hello World this is Second Tutorial</h1>
                <h4>This is a react component</h4>
            </div>
        );
    }
});



ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);