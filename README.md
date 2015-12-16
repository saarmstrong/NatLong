[![Build Status](https://travis-ci.org/r-park/angular2-webpack-seed.svg?branch=master)](https://travis-ci.org/r-park/angular2-webpack-seed)


# Angular2 Webpack Seed

- Angular `2.0.0-beta.0`
- Gulp `4.0.0-alpha.2`
- Jasmine
- Karma
- SASS
- Typescript `~1.7.5`
- Webpack
- Webpack Development Server


## Features
- Inline external HTML templates into typescript component files (optional)
- Inline and autoprefixes external SCSS files into typescript component files (optional)
- Inject styles into `index.html` (optional)
- Inject script tags into `index.html`
- Bundle and minify release builds


## Getting Started
### Prerequisites
- `node >=4.2`

### Installing Global Dependencies
```bash
$ npm install -g karma-cli
```

##### Webpack
```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
```
This is optional if you only intend to use the provided gulp tasks.

##### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp
```


### Installing Project-local Dependencies
```bash
$ npm install
```


## Commands
#### Develop
```bash
$ gulp
```
- Start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```bash
$ gulp lint
```

#### Test (single-run)
```bash
$ gulp test
```

#### Test (watch mode)
```bash
$ gulp test.watch
```

#### Build
```bash
$ gulp build
```

#### Dist build
```bash
$ gulp dist
```
Executes the following:
- `gulp lint`
- `gulp test`
- `gulp build`
