module.exports = function(grunt){

	grunt.initConfig({
		uglify: { /* Minifies JS code */
			options: {
				mangle: true,
				compress: true,
				sourceMap: 'dist/application.map',
				banner: '/* Anastasios Zouzias 2015*/\n'
			},
			target: {
				src: 'dest/application.js',
				dest: 'dist/application.min.js'
			}
		},
		jshint: { /* Checks Javascript for error */
			options : {
				eqeqeq : true, /* Only ===, not ==*/
				curly: true,  /* Use curly everywhere*/
				undef: true
			},
			target: {
				src : 'src/*.js'
			}
		},
		concat: { /* Concats the following files to dest/application.js */
			options: {
				seperator: ';'
			},
			target: {
				src: ['src/application.js', 'src/util.js'],
				dest: 'dest/application.js'
			}
		},
		clean: { /* Clean dest and dist directories*/
			target: ['dist', 'dest']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	/* Run tasks : jshint, concat and uglify*/
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('rebuild', ['clean', 'default']);

}
