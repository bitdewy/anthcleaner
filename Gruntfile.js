'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['launch.js', 'lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    env: {
      options: {
        //Shared Options Hash
      },
      dev: {
        NODE_ENV: 'development',
      },
      build: {
        NODE_ENV: 'production',
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    },
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['env:dev', 'jshint', 'nodeunit']);

};
