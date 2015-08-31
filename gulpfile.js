var gulp         = require('gulp')
,   watch        = require('gulp-watch')
,   uglify       = require('gulp-uglify')
,   rename       = require('gulp-rename')
,   plumber      = require('gulp-plumber');

gulp.task('default', ['generate']);

gulp.task('watch', function() {
    var watcher = gulp.watch(['plugin.js'], ['generate']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('generate', function() {
    gulp.src('plugin.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename('plugin.min.js'))
        .pipe(gulp.dest('bower_components/tinymce/plugins/begard'));

    gulp.src('plugin.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename('plugin.min.js'))
        .pipe(gulp.dest('./'));

    gulp.src('plugin.js')
        .pipe(plumber())
        .pipe(rename('plugin.js'))
        .pipe(gulp.dest('bower_components/tinymce/plugins/begard'));
});
