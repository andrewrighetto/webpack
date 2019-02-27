const path = require('path');

module.exports = {
    entry: './src/js/app.js', //file di entrata per il webpack
    output: { //file che viene creato dopo la compilazione
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/, //regex che prende tutti i file css
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }, {
            test: /\.js$/, //regex che prende tutti i file js
            loader: "babel-loader",
            exclude: path.resolve(__dirname, "./node_modules"),
            options: {
                presets: ['es2015']
            }
        }]
    }
};