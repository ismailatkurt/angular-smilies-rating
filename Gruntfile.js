module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('bower.json'),

    minBanner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    '(c) <%= pkg.author %>, <%= pkg.homepage %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> */\n',

    uglify: {
      options: {
        report: 'min',
        banner: '<%= minBanner %>'
      },
      angularSmiliesRating: {
        files: {
          'dist/angular-smilies-rating.min.js': [
            'dist/angular-smilies-rating.js'
          ]
        }
      }
    },

    replace: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: ['src/angular-smilies-rating.js','src/angular-smilies-rating.css'],
          dest: 'dist/'
        }]
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      angularSmiliesRating: {
        files: [{
          'dist/angular-smilies-rating.js': 'dist/angular-smilies-rating.js'
        }, {
          expand: true,
          src: ['dist/angular-smilies-rating.js']
        }]
      }
    },

    watch: {
      all: {
        files: ['dist/*', 'demo/*'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['src/*js', 'src/*.html'],
        tasks: ['js']
      }
    },

    serve: {
      options: {
        port: 9000
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['js']);

  grunt.registerTask('js', ['replace', 'ngAnnotate', 'uglify']);

};
