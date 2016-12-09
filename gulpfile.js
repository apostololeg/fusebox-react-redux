const fsbx = require('fuse-box');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const server = require('gulp-server-livereload');

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'sourcemaps.js.map',
        outFile: './build/sourcemaps.js.map',
    },
    outFile: './build/out.js',
    plugins: [
        fsbx.SVGPlugin(),
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ['latest'],
                plugins: [
                    ['transform-react-jsx']
                ]
            }
        })
    ]
});

gulp.task('build', () => {
    return fuseBox.bundle('>./components/index/index.jsx +react-dom');
})

gulp.task('start', ['build'], function() {
    gulp.src('build')
        .pipe(server({
            livereload: {
                enable: true,
                filter: (filePath, cb) => cb(filePath.endsWith('build/out.js'))
            }
        }));
    gulp.watch('src/**/*.**', () => {
        runSequence('build');
    });
});
