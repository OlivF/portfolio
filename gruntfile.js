module.exports = function (grunt) {
    // Charge les plugins Grunt automatiquement
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
        // Configuration des tâches
		copy: {
			dist: {
				src: ['*.html', 'img/*', 'citations/*', 'fonts/*'], 
				// Vous pouvez bien sûr rajouter d'autres fichiers selon les besoins
				dest: 'dist/'
			}
		},
		// La configuration
		clean: {
			dist: ['dist/*']
		},
		less: {
		  development: {
			options: {
			  compress: true,
			  yuicompress: true,
			  optimization: 2
			},
			files: {
			  "css/styles-concat.css": "less/main.less" // destination file and source file
			}
		  }
		},
		watch: {
		  styles: {
			files: ['less/*.less'], // which files to watch
			tasks: ['less'],
			options: {
			  nospawn: true
			}
		  }
		},
		useminPrepare: {
			html: {
				src: ['index.html']
			},
			options: {
				flow: {
					steps: {
						js: ['uglifyjs'],
						css: ['cssmin'],
					},
					post: {}
				}
			}
		},
		usemin: {
			html: 'dist/index.html'
		}
		
    });
	
	// La liste de tâches est vide, nous la remplirons par la suite.
    grunt.registerTask('default', [
		'less', 
		'clean:dist', 
		'copy:dist',
		'useminPrepare',
		'cssmin', 
		'uglify',
		'usemin',
		
		'watch'
	]);
};