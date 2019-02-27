module.exports = {
    entry: './src/js/app.js', //file di entrata per il webpack
    output: { //file che viene creato dopo la compilazione
        path: __dirname + '/dist',
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
            use: [
                // {
                //     loader: "babel-loader", exclude: /node_modules/, query: {presets:['es2015']}
                // },
                {
                    loader: "css-loader"
                }
            ]
        }]
    }
};