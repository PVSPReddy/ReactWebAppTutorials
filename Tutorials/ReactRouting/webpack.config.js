module.exports = {
    entry: './App/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'App/Components/Main.jsx',
            Nav: 'App/Components/Nav.jsx',
            Weather: 'App/Components/Weather.jsx',
            About: 'App/Components/About.jsx',
            Examples: 'App/Components/Examples.jsx',
            WeatherForm: 'App/Components/WeatherForm.jsx'
        },
        extensions: ['', '.js', '.jsx'],
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015' ]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};

// module.exports = {
//     entry: './public/app.js',
//     output: {
//         path: __dirname,
//         filename: './public/bundle.js'
//     },
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     }
// };