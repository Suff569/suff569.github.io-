var path = require("path");
module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        libraryTarget: "commonjs2" // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "url-loader?name=app/images/[name].[ext]"}
        ]
    },
    externals: {
        react: "commonjs react" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};
