module.exports = function coco (app) {
    app.use(function (request, response, next) {
        response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        response.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/ffmpeg-core',
//     createProxyMiddleware({
//       target: 'https://github.com/ffmpegwasm/ffmpeg.wasm/releases/download/v0.10.0/ffmpeg-core.js',
//       changeOrigin: true,
//     })
//   );
// };