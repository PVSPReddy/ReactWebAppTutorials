var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                <h2>Nav Component</h2>
                {/* <Link to="/" >Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link> */}

                {/* <a href="#/about">Go to About Page</a> */}

                {/* <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</Link>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link> */}

                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

            </div>
        );
    }
});

module.exports = Nav;

// var React = require('react');
// var Nav = require('Nav');

// var Main = React.createClass({
//     render: function(){
//         return(
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//             </div>
//         );
//     }
// });

// module.exports = Main;