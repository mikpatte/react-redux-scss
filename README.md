# boilerplate setup for react with scss and redux

### Install dependencies
`yarn add deep-freeze-es6 history node-sass-chokidar npm-run-all react-autobind react-redux react-router react-router-dom react-router-redux redux`

## Add scripts for scss
Replace build and start scripts with:
 ```
"start-js": "react-scripts start",
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
"start": "npm-run-all -p watch-css start-js",
"build": "npm run build-css && react-scripts build",
 ```