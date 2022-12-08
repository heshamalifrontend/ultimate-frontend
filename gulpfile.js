const gulp = require('gulp'); // content gulp
const concat = require('gulp-concat'); // content gulp-concat files in one file
const prefix = require('gulp-autoprefixer'); // content gulp-autoprefixer library
const sass = require('gulp-sass')(require('sass')); // content gulp-sass library
const pug = require('gulp-pug'); // content gulp compile pug
const livereload = require('gulp-livereload');  // content live reload to refresh in minute
const sourcemaps = require('gulp-sourcemaps'); // content for make a maps 
const uglify = require('gulp-uglify');  // content to minify a js file
const notify = require("gulp-notify"); // content to nitifcation when finish code
const zip = require('gulp-zip'); // content to compress file 









// html task
gulp.task('html',function(){
    return gulp.src('stage/html/*.pug') // content a developer file
            .pipe(pug({pretty: true})) // false to minify | true to not minify
            .pipe(concat("test.html"))
            .pipe(gulp.dest('dist/html')) // content a clint file
            .pipe(notify("html task is done!"))
            .pipe(livereload());
});




// sass task 
gulp.task('sass', function(){
    return gulp.src(['stage/css/**/*.scss','stage/css/**/*.css']) // content a developer file
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // compile sass
            .pipe(prefix('last 2 versions')) // prefixer a last 2 version
            .pipe(concat('main.css')) // concat all files in main.css file
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'))// content a clint file
            .pipe(notify("sass task is done!"))
            .pipe(livereload());
});



// js task
gulp.task('js', function(){
    return gulp.src('stage/js/*.js') // content a developer file
            .pipe(concat('main.js'))// concat all files in all.js file
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))// content a clint file
            .pipe(notify("js task is done!"))
            .pipe(livereload());
});



// compress file
gulp.task('compress',function(){
    return gulp.src('dist/**/*.*')
            .pipe(zip('website.zip'))
            .pipe(notify("files is compressed"))
            .pipe(gulp.dest('.'))
})


// watch task

gulp.task('watch', function(){
    require('./server.js')
    livereload.listen();
    gulp.watch('stage/html/*.pug' , gulp.series('html'));
    gulp.watch(['stage/css/**/*.scss','stage/css/**/*.css'] , gulp.series('sass')); 
    gulp.watch('stage/js/*.js' , gulp.series('js'));
    gulp.watch('dist/**/*.*',gulp.series('compress'))
});



