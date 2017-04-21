//Load gulp
import gulp from 'gulp'
import creds from './creds.js'

//Load gulp plugins
import babel from 'gulp-babel'
import rename from 'gulp-rename'
import spsave from 'gulp-spsave' //upload to SharePoint


gulp.task('move-build',()=>{
    return gulp.src(['./build/**/*.*','!./build/index.html'])
        .pipe(rename(function(path){
            path.basename = "main";
        }))
        .pipe(gulp.dest('./deploy'))
});

gulp.task('upload-to-sp',['move-build'], ()=>{
    return gulp.src(["./deploy/**/*.*"])
    .pipe(spsave({
        siteUrl: "https://omahasharepointusergroup.sharepoint.com/sites/dev",
        folder: "SiteAssets/contactform",
        flatten: false
    }, creds));
});

//Watcher task. This will watch for any changes in the scenario1.js and scenario2.js files and then run the upload-to-sp task.
gulp.task('default', ()=>{
    return gulp.watch(['./build/index.html'], ['upload-to-sp']);
})


