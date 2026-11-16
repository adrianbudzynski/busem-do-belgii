const gulp = require('gulp');
const rsync = require('gulp-rsync');

gulp.task('views', function() {
    return gulp.src('src/**/*.handlebars')
        .pipe(gulp.dest('dist'));
});

gulp.task('sync.dev', () => {
    return gulp.src(['dist/**', 'public/**', 'app.js', 'package.json'])
        .pipe(rsync({
            hostname: 's13.mydevil.net',
            destination: '~/domains/dev.busemdobelgii.pl/public_nodejs/',
            username: 'adrian2700',
            //dryrun: true
        }));
});

gulp.task('sync.prod', () => {
    return gulp.src(['dist/**', 'public/**', 'app.js', 'package.json'])
        .pipe(rsync({
            hostname: 's13.mydevil.net',
            destination: '~/domains/busemdobelgii.pl/public_nodejs/',
            username: 'adrian2700',
            //dryrun: true
        }));
});

gulp.task('deploy.dev', [
    'views',
    'sync.dev'
]);

gulp.task('deploy.prod', [
    'views',
    'sync.prod'
]);