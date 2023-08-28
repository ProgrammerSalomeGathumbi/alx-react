const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: './src/index.js',
 
  output: {
        filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
	use: ['style-loader', 'css-loader'],       
      },
      {
        test: /\.(gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
	  {
	    loader: 'file-loader', 
            options: {
	            byPassOnDebug: true,
                    disable: true, 				   
	    },		    
	},
        'image-webpack-loader',
	],	
      },
      {
        test: /\.(js|jsx)$/,
	exclude: /node_modules/,
        use: ["babel-loader"],	
      },   
    ],
        
	},
resolve: {
   extensions: [".*", ".js", ".jsx"],	 
	 },
  plugins: [
    new HtmlWebpackPlugin({
      name: "index.html",
      inject:false,      
      template: './dist/index.html',
    }),
    ],
  devServer: {
    static: './dist',	  
    port: 8564, 
    open: true,
    compress: true, 
    hot: true,
  },
  devtool: 'inline-source-map',   
};
