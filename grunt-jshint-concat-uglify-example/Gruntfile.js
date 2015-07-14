module.exports = function(grunt){

	grunt.initConfig({
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: "dist/application.map",
				banner: "/* Anastasios Zouzias 2015*/\n"
			},
			target: {
				src: "dest/application.js",
				dest: "dist/application.min.js"
			},
			util: {
				src: "src/util.js",
				dest: "dist/util.min.js"
			}	
		},
		jshint: {
			options : {
				eqeqeq : true, /* Only ===, not ==*/
				curly: true,  /* Use curly everywhere*/
				undef: true
			},
			target: {
				src : "src/*.js"
			}
		},
		concat: {
			options: {
				seperator: ";"
			},
			target: {
				src: ["src/application.js", "src/util.js"],
				dest: "dest/application.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	/* Run tasks : jshint, concat and uglify*/
	grunt.registerTask("default", ["jshint", "concat", "uglify"]);

}
