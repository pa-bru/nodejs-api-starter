nodejs-api-starter
===================

a simple starter to create a nodejs api with express
----------

Getting Started
-------------

### Install the app
```shell
$ npm install
```

### Run in Development
```shell
$ npm run dev
```

### Run in Production

First build the app
```shell
$ npm run build
```

Then serve the app
```shell
$ npm run serve
```

### Running Tests

To run all tests
```shell
$ npm run test
```

To run tests on files's changes
```shell
$ npm run test -- --watch
```

To run test of a specific file, install jest globally (`npm install -g jest`) and do a `jest your-file.js` or do this command
```shell
$ npm run test -- --findRelatedTests my-file.js
```

### Before publishing

```shell
$ npm run validate
```
... is a shortcut which runs eslint, tests and verify that packages aren't outdated.
