/*global module:false*/
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-preprocess');

    // Project configuration.
    grunt.initConfig({
        meta : {
            version : '0.1.0',
            banner : '/*! PROJECT_NAME - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://PROJECT_WEBSITE/\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'YOUR_NAME; Licensed MIT */'
        },
        preprocess : {
            development : {
                files: {
                    'build/webclient/lib/WeEvent.js': 'lib/webclient/lib/WeEvent.js',
                    'build/client/js/app/app.js': 'lib/client/js/app/app.js'
                },
                options: {
                    context: {
                        DEVELOPMENT: true
                    }
                }
            },
            production : {
                files: {
                    'build/webclient/lib/WeEvent.js': 'lib/webclient/lib/WeEvent.js',
                    'build/client/js/app/app.js': 'lib/client/js/app/app.js'
                },
                options: {
                    context: {
                        PRODUCTION: true
                    }
                }
            }
        },
        concat : {
            views: {
                src: [
                    'lib/webclient/lib/views/MainTitleView.js',
                    'lib/webclient/lib/views/ListEventsView.js',
                    'lib/webclient/lib/views/AbstractDesktopView.js',
                    'lib/webclient/lib/views/EventDashboardView.js',
                    'lib/webclient/lib/views/EventSessionsView.js',
                    'lib/webclient/lib/views/DisabledEventFormView.js',
                    'lib/webclient/lib/views/EditEventFormView.js'
                    ],
                dest: 'build/webclient/lib/views.js'
            }
        },
        watch : {
            less : {
                files : "lib/client/templates/*.html",
                tasks : "handlebars"
            },
            tasks : {
                files : "lib/client/less/**/*.less",
                tasks : "less"
            }
        },
        coffee : {
            compile : {
                files : {
                    'target/server/server.js' : ['lib/server/server.coffee'],
                    'target/server/logger.js': ['lib/server/logger.coffee'],
                    'target/server/schema.js': ['lib/server/schema.coffee']
                }
            }
        },
        less : {
            production : {
                files : {
                    "lib/client/css/bootstrap.css" : "lib/client/less/bootstrap.less"
                }
            }
        },
        handlebars : {
            compile : {
                options : {
                    wrapped : true,
                    namespace : "JST",
                    processName: function(filename) {
                        var pieces = filename.split("/");
                        var file = pieces[pieces.length - 1];
                        var fileName = file.split(".")[0];
                        return fileName;
                    }
                },
                files : {
                    "lib/client/js/app/templates.js" : ["lib/client/templates/*.html"],
                    "build/webclient/templates/templates.js": ["lib/webclient/templates/*.html"]
                }
            }
        },
        copy : {
            target : {
                files : [
                    {expand: true, cwd: 'lib/client', src: ['**'], dest: 'target/client/'},
                    {expand: true, cwd: 'build/client/js/app', src: ['**'], dest: 'target/client/js/app'},
                    {expand: true,
                        cwd: 'lib/webclient',
                        src: ['*.html', 'bootstrap-theme/**', 'css/**', 'img/**', 'js/**', 'lib/Ajax.js', 'lib/model/*.js', 'lib/Router.js'],
                        dest: 'target/webclient'},
                    {expand: true, cwd: 'build/webclient', src: ['**'], dest: 'target/webclient'}
                ]
            }
        },
        clean: {
            build: ["target", "build"]
        }
    });

    // Default task.
    grunt.registerTask('development', ['preprocess:development', 'concat', 'coffee', 'less', 'handlebars', 'copy']);
    grunt.registerTask('production', ['preprocess:production', 'concat', 'coffee', 'less', 'handlebars', 'copy']);
    grunt.registerTask('prepare', ['clean']);

};
