module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      },
      scss: {
        src: ['css/src/*.scss'],
        dest: 'css/main.scss'
      },
    },
    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['main.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['css/*.sass'],
        tasks: ['concat', 'sass'],
      },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};
