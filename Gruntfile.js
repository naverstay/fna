module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            templates: {
                files: ['jade/*.jade'],
                tasks: ['jade'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles/main_global.css': 'sass/main_global.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        },
        svg_sprite: {
            complex: {

                // Target basics 
                expand: true,
                src: ['svg-history/*.svg'],
                dest: 'styles/',

                // Target options 
                options: {
                    shape: {
                        dimension: {			// Set maximum dimensions 
                            maxWidth: 32,
                            maxHeight: 32
                        },
                        spacing: {			// Add padding 
                            padding: 5
                        },
                        dest: 'svg/'	// Keep the intermediate files 
                    },
                    mode: {
                        view: {			// Activate the «view» mode 
                            bust: false,
                            render: {
                                scss: true		// Activate Sass output (with default options) 
                            }
                        },
                        symbol: false		// Activate the «symbol» mode 
                    }
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
};