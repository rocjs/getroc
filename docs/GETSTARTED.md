# Get started

## Install
Make sure you have node 4.x or higher and npm 3.x or higher on your system.
```
$ npm install -g roc
```
`roc` will now be available globally on your system.

## Create new Redux and React project
Create directory for your app:
```
$ mkdir react-app && cd react-app
```
Bootstrap app starting point:
```
$ roc init web-react
```
Tip: `web-react` is an alias to `vgno/roc-base-web-react`, a [repository location](https://github.com/vgno/roc-template-web-react) on Github. This template then uses the [roc-web-react](https://github.com/vgno/roc-web-react) extension. You _can_ create your own extensions and teamplates, but that is outside the scope of this guide.  

## Development mode
```
$ roc dev
```
While this command is running the following is at your disposal:
- See your app running at http://localhost:3002
- Manage your BrowserSync instance at http://localhost:3003. Connect as many different devices as you like
- Live reloading is active, and code can be live-edited and will be live-pushed to your browser

## View (dynamic) configuration options
```
$ roc dev --help
```

This prints all options that you can use to configure your current application. They are defined by the extensions that we use; currently `roc-web-react` in this guide. The runtime `cli` parameters are compatible with permanent values in `roc.config.js`.

## Default project structure
The basic template defines this for you, but you may modify it to use an entirely different structure easily through `roc.config.js`.
```

├── app
│   ├── components
│   │   ├── content
│   │   │   ├── index.js
│   │   │   └── style.scss
│   ├── redux
│   │   └── reducers.js
│   ├── routes
│   │   └── index.js
│   └── screens
│       ├── app
│       │   ├── index.js
│       │   └── style.scss
│       ├── about
│           └── index.js
│           └── style.scss
├── public
│   └── favicon.png
├── roc.config.js
├── README.md
└──  package.json
```
`app/components` - components of the application  
`app/redux` - source related to data flow  
`app/routes` - react router mapping  
`app/screens` - components mapped to routes
`public` - files served directly from web server  
`roc.config.js` - application configuration  
`package.json` - `npm` package data

## Default project configuration
This configuration is the default fetched directly from `roc-base-web-react`.
```
module.exports = {
    config: {
        applicationName: 'chosen title',
        port: 3000,
        serve: ['public', 'build/client'],
        favicon: 'favicon.png',
        build: {
            reducers: 'app/redux/reducers.js',
            routes: 'app/routes/index.js'
        }
    }
};
```

## Change application configuration
Permanent configurations belonging to your application should be defined in `roc.config.js`. This way one does not have to specify them on the `cli` every time.

## Build production bundles
```
$ roc build
```

## Start production bundles
```
$ roc start
```

## How to: add a route
`...`

## How to: add a component
`...`

## How to: add an action
Actions should be dispatched whenever a change should happen in the application.
`...`

## How to: add a reducer
Reducers process actions and update the state of your store.
`...`

## How to: modify elements in document `<head>`
`roc-web-react` uses React Helmet. You may use this to modify the appropriate settings easily from your components.
`...`

## Related documentation references
- [Redux](https://github.com/rackt/redux) (dataflow)
- [React](https://facebook.github.io/react/) (views)
- [React router](https://github.com/rackt/react-router) (routing to components)
- [React helmet](https://github.com/nfl/react-helmet) (document head modifier)
- [React fetcher](https://github.com/markdalgleish/react-fetcher) (data fetcher)
- [CSS Modules](https://github.com/css-modules/css-modules) ()
- [Redux-fetcher](https://github.com/vgno/redux-fetcher)
- [Redux-api-middleware](https://github.com/vgno/redux-api-middleware)
