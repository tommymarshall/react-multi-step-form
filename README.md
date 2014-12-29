# React Multi-Step Form
============

If you are new to Gulp, Browserify, or build tools in general be sure to check out the [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context and the [Wiki](https://github.com/greypants/gulp-starter/wiki) for some additional background knowledge.

### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp to start development

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `build` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.
- `build` includes the following tasks: `['browserify', 'fonts', 'sass', 'images', 'markup']`
- Compile and move these files to `build/` folder, and be served on your localhost at port 3000.
- Run appropriate tasks on when source files change and refresh the browser.
