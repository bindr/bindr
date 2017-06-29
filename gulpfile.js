// Gulp
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const path = require('path');
const del = require('del');
const runSequence = require('run-sequence');
const merge = require('merge-stream');
const typescript = require('typescript');

// Directories
const paths = {};

paths.root = path.join(__dirname, '.');
paths.metaJson = path.join(paths.root, 'meta.json');
paths.nodeModules = path.join(paths.root, 'node_modules');

paths.dist = path.join(paths.root, 'dist');
paths.publish = path.join(paths.root, 'publish');
paths.src = path.join(paths.root, 'src');

// Default Task
gulp.task('default', ['build']);

// Clean Build Dir
gulp.task('clean', function (callback) {
    const delPaths = [
        path.join(paths.dist, '**'),
        path.join(paths.publish, '**')
    ];
    
    return del(delPaths, {force: true}, callback);
});

// Build App
gulp.task('build', function (callback) {
    runSequence(
        'clean',
        ['compile', 'copy-files'],
        callback
    );
});

// Compile TS files
gulp.task('compile', function () {
    const compileSrc = path.join(paths.src, '**', '*.ts');
    const compileDest = paths.dist;
    const tsConfigPath = path.join(paths.root, 'tsconfig.json');
    
    const tsProject = plugins.typescript.createProject(tsConfigPath, {
        typescript: typescript
    });
    
    const tsResult = gulp.src(compileSrc)
        .pipe(plugins.cached('ts-compiled'))
        .pipe(plugins.sourcemaps.init())
        .pipe(tsProject());
    
    return tsResult
        .pipe(plugins.debug({title: 'compiled:'}))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(compileDest));
});

gulp.task('copy-files', function () {
    const extsToCopy = [
        '.html',
        '.css',
        '.scss',
        '.d.ts',
        '.json'
    ];
    
    const filesToCopy = extsToCopy
        .map(ext => `${paths.src}/**/*${ext}`);
    
    return gulp.src(filesToCopy)
        .pipe(gulp.dest(paths.dist));
});

