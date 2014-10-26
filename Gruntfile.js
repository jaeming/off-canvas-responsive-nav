module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.initConfig({
    uglify: {
     my_target: {
      files: {
       'js/script.js': ['javascripts/*.js']
        } //files
      } //my_target
    }, //uglify
    sass: {
        dist: {
            options: {
                sourcemap: true,
          compass: true
        }, //options
        files:{
         'stylesheets/style.css': 'sass/style.scss'
        } //files
      } //dist
    }, //sass
    haml: {                              // Task
    dist: {                            // Target
      files: {                         // Dictionary of files
        'index.html': 'index.haml'       // 'destination': 'source'
      }
    }
  },
    watch: {
        options: { livereload: true },
        scripts: {
            files: ['javascripts/*.js'],
            tasks: ['uglify']
      }, //script
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      }, //sass
      html: {
        files: ['*.haml'],
        task: ['haml']
      }
    } //watch
  }) //initConfig
  grunt.registerTask('default', ['haml', 'watch']);
} //exports