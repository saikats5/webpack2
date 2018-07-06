# webpack2

npm view webpack versions
npm view webpack versions --json

shift + ! to create HTML Shortcut

webpack ./src/app.js ./dist/app.bundle.js
webpack ./src/app.js ./dist/app.bundle.js -p//minified version for production
webpack ./src/app.js ./dist/app.bundle.js -p --watch//watch

npm cache clean --force

issue in webpack:
./node_modules/.bin/webpack
"scripts": {
    "build": "webpack"
}

"dev": "webpack -d --watch"//development mode with watch true
"prod": "webpack -p"//production mode - minified version

HtmlWebpackPlugin is used to create dynamic index.html file inside dist folder

css-loader is to load css in js file but as js file can't recognize css so using style-loader
use(latest)/loaders(deprecated still in use) and , with array instead of ! can be used inside modules in webpack config

webpack reads loader from the end of the array

npm view extract-text-webpack-plugin versions //for check the versions