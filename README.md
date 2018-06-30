# webpack2

npm view webpack versions
npm view webpack versions --json

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