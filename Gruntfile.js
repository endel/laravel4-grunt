module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			name: "axe red october",
			banner: '/* \n' +
				' * <%= pkg.homepage %>\n' +
				' * \n' +
				' * @build <%= grunt.template.today("m/d/yyyy") %>\n' +
				' */\n\n'
		},

		//copy: {
			//main: {
				//files: [{
					//expand: true,
					//flatten: true,
					//src: [
						//'components/jquery/jquery.js'
					//],
					//dest: 'public'
				//}]
			//}
		//},

		concat: {
			javascripts: {
				src: [
					// Vendor
					'components/jquery/jquery.js',
					// Application
					'assets/javascripts/**.js'
				],
				dest: 'public/app.js'
			},
			stylesheets: {
				src: [
					// Vendor
					// ...
					// Application
					'assets/stylesheets/**.css'
				],
				dest: 'public/app.css'
			}
		},

		/**
		 * combine & compress javascript files
		 */
		uglify: {
			javascripts: {
				files: {
					'public/app.min.js': '<%= concat.javascripts.src %>'
				},
				options: {
					preserveComments: 'some'
				}
			}
		},

		/**
		 * combine & compress css files
		 */
		cssmin: {
			combine: {
				files: {
					'public/app.min.css': '<%= concat.stylesheets.src %>'
				}
			}
		},

		jshint: {
			all: [
				'Gruntfile.js',
				'assets/javascripts/**.js'
			],
			options: {
				"browser": true,
				"evil" : false
				// "es5": true
			}
		},

		watch: {
			javascripts: {
				files: '<%= concat.javascripts.src %>',
				tasks: ['jshint', 'uglify'],
				options: {
					interrupt: true
				}
			},
			stylesheets: {
				files: '<%= concat.stylesheets.src %>',
				tasks: ['cssmin'],
				options: {
					interrupt: true
				}
			}
		}

	});

	// Default task.
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

	// Minify
	grunt.registerTask('min', ['uglify', 'cssmin']);
};
