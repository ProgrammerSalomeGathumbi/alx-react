const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxAssetSize: 1000000,
  },	
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|jpcg|gif|svg)$/i,
        type: 'asset/resource',	       
        use: [		     
          {
            loader: ['file-loade', 'image-webpack-loader'],
            options: {
              byPassOnDebug: true,		    
              disable: 'true', 
            },
          },
        ],
      },
  },     
};
