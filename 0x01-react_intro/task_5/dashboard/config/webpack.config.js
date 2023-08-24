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
	    loader: ['file-loader', 'image-webpack-loader'],
            options: {
	            byPassOnDebug: true,
                    disable: true, 				   
	    },		    
	},
	],	
      },
      {
        test: /\.(js|jsx)$/,
	exclude: /node_modules/,
        use: ["babel -loader"],	
      },   
    ],	
	},
resolve: {
   extensions: ["*", ".js", ".jsx"],	 
	 },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
    }),
    ],
  devServer: {
    static: './dist',	  
    port: 8564, 
    open: true, 
    hot: true,
  },
  devtool: 'inline-source-map',   
};
