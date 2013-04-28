/*global module:false*/
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

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
        lint : {
            files : ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
        },
        qunit : {
            files : ['test/**/*.html']
        },
        concat : {
            views: {
                src: [
                    'lib/webclient/lib/views/ListEventsView.js',
                    'lib/webclient/lib/views/EventDashboardView.js',
                    'lib/webclient/lib/views/EventSessionsView.js'],
                dest: 'lib/webclient/lib/views.js'
            }
        },
        min : {
            dist : {
                src : ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest : 'dist/FILE_NAME.min.js'
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
        jshint : {
            options : {
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                sub : true,
                undef : true,
                boss : true,
                eqnull : true,
                browser : true
            },
            globals : {}
        },
        uglify : {},
        coffee : {
            compile : {
                files : {
                    'target/server/server.js' : ['lib/server/server.coffee'],
                    'target/server/logger.js': ['lib/server/logger.coffee']
                }
            }
        },
        copy : {
            target : {
                files : {
                    'target/client/' : ['lib/client/*.html']
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
                    "lib/webclient/templates/templates.js": ["lib/webclient/templates/*.html"]
                }
            }
        }

    });

    // Default task.
    grunt.registerTask('default', 'concat coffee less handlebars');

};
