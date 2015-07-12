# A minimalistic Grunt minification example

A minimalistic Gruntfile.js for minifying Javascript.

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
