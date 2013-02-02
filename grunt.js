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
            dist : {
                src : ['<banner:meta.banner>', '<file_strip_banner:lib/FILE_NAME.js>'],
                dest : 'dist/FILE_NAME.js'
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
                    'target/server/data.js' : ['lib/server/data.coffee'],
                    'target/client/app.js' : ['lib/client/model.js', 'lib/client/view.js', 'lib/client/app.js']
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
                    "lib/client/js/app/templates.js" : ["lib/client/templates/*.html"]
                }
            }
        }

    });

    // Default task.
    grunt.registerTask('default', 'copy coffee less');

};
