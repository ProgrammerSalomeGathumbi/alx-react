const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = required('clean-webpack-plugin')

module.exports = {
  mode: 'development', 
  entry:{
     header: './modules/header/header.js',
     body: './modules/body/body.js',
     footer: './modules/footer/footer.js',
     shared: 'jquery',     
  },	  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,		  
  },
   optimization: {
      splitChunks: {
        chunks: 'all',
	},
   },		   
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
    ],	
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, './public'),	  
    port: 8564, 
    open: true, 
  },
  devtool: 'inline-source-map',    
};

