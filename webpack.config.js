var webpack = require('webpack');

module.exports = {
	 entry: [
	    'script!jquery/dist/jquery.min.js',
	    'script!foundation-sites/dist/js/foundation.min.js',
	    './app/resources/assets/js/app.jsx'
	],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			// components
			TodoApp: 'app/resources/assets/js/components/TodoApp.jsx',
			TodoList: 'app/resources/assets/js/components/TodoList.jsx',
			Todo: 'app/resources/assets/js/components/Todo.jsx',
			AddTodo: 'app/resources/assets/js/components/AddTodo.jsx',

			// styles
			//applicationStyles: 'app/resources/assets/css/styles.css'
		},
		modeuleDirectories: ['node_modules', './app/resource/assets/js/components'],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}