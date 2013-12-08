'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('{%= taklajson %}'),
        concat: {
            commonJs: {
                src: ['tmpl/<%= pkg.pageName %>/<%= pkg.name %>.js'],
                dest: 'js/takla/widget/<%= pkg.pageName %>/<%= pkg.name %>/<%= pkg.name %>.js'
            },
            originalJs: {
                src: ['tmpl/original/<%= pkg.name %>.js'],
                dest: 'js/takla/widget/original/<%= pkg.name %>/default/<%= pkg.name %>.js'
            },
            commonCss: {
                src: ['tmpl/<%= pkg.pageName %>/<%= pkg.name %>.css'],
                dest: 'css/takla/widget/<%= pkg.pageName %>/<%= pkg.name %>/<%= pkg.name %>.css'
            },
            originalCss: {
                src: ['tmpl/original/<%= pkg.name %>.css'],
                dest: 'css/takla/widget/original/<%= pkg.name %>/default/<%= pkg.name %>.css'
            }
        }
    });

    // grunt.file.defaultEncoding = 'gbk';

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat']);

};
