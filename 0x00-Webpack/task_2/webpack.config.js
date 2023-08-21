const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,		  
  },	
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          "file-loader"		     
          {
            loader: 'image-webpack-loader',
            options: {
              byPassOnDebug: true,		    
              disable: 'true', 
            },
          },
        ],
      },
  },     
};
