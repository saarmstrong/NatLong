[![Build Status](https://travis-ci.org/r-park/angular2-webpack-seed.svg?branch=master)](https://travis-ci.org/r-park/angular2-webpack-seed)


# Angular2 Webpack Seed

## Stack
- Angular `2.0.0-alpha.52`
- Gulp `4.0.0-alpha.2`
- Jasmine
- Karma
- SASS
- Typescript `~1.7.3`
- Webpack
- Webpack Development Server


## Features
- Inline external HTML templates into typescript component files (optional)
- Inline and autoprefixes external SCSS files into typescript component files (optional)
- Inject styles into `index.html` (optional)
- Inject script tags into `index.html`
- Bundle and minify release builds


## Prerequisites
Node `~5.1`


## Installing Dependencies
```bash
$ npm install
```


#### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin`
```bash
$ ./node_modules/.bin/gulp
```


## Developing
```bash
$ gulp
```
This will start the Webpack development server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>.


## Manual Builds
```bash
$ gulp build
```
This will generate minified build artifacts into `/target` directory. Run `gulp serve` to start a BrowserSync server in this directory.


## Testing
```bash
$ gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.
