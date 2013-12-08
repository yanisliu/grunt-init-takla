/*
 * grunt-init-takla
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Yanis Liu
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a takla plugin.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_: 组件名.\n' +
  '_description_: 文件头的描述.\n' + 
  '_Page name_: 页面的名称，默认是common.\n';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'takla'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    {
      name: 'pageName',
      message: 'Page name',
      default: 'common', 
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.'
    },
    init.prompt('author_name')
  ], function(err, props) {
    // A few additional properties.
    props.taklajson = 'takla.json';

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'takla-plugin',
      version: '0.0.0-ignored',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      devDependencies: {
        'grunt-contrib-concat': '~0.3.0',
      },
    });

    // Generate jquery.json file.
    init.writePackageJSON(props.taklajson, props, function(pkg, props) {
      if ('pageName' in props) { pkg.pageName = props.pageName; }
      return pkg;
    });

    // All done!
    done();
  });

};
