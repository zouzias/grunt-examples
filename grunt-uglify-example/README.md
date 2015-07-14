# Javascript Minification using Grunt

A minimalistic Gruntfile.js for minifying Javascript. This project will minify the javascript files `src/util.js` and `src/application.js`.

Install npm modules first.
```
npm install
```


To minify src/application.js, type

```
grunt uglify:target
```

To minify src/util.js, type
```
grunt uglify:util
```

To minify both files (src/{util,application}.js), type

```
grunt uglify
```
