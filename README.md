# Meteor and everything react scaffold

## React
visit [here](https://facebook.github.io/react/docs/hello-world.html) for more info

## Redux (UI data)
visit [here](http://redux.js.org/) for more info

## React-router
visit [here](https://github.com/ReactTraining/react-router/blob/master/docs/API.md) for more info

## Interact with publications
1. actionCreators => visit [here](https://medium.com/modern-user-interfaces/how-we-redux-part-3-domain-890964824fec#.3yd37zjql)
2. dispatch actions => visit [here](https://medium.com/modern-user-interfaces/how-we-redux-part-4-reducers-and-stores-f4a0ebcdc22a#.wze74pm8q)

## Interact with persisted data (Domain data)
1. ActionCreators => call Meteor methods => return data. Explanation and example [here](https://medium.com/modern-user-interfaces/how-we-redux-part-3-domain-890964824fec#.3yd37zjql)
2. Dispatch actions by using the action creators => More info [here](https://medium.com/modern-user-interfaces/how-we-redux-part-4-reducers-and-stores-f4a0ebcdc22a#.wze74pm8q)

## Use the ddp-analyzer in dev
  - install it from npm - npm install -g ddp-analyzer
  - start the proxy - ddp-analyzer-proxy
  - Then start your meteor app as shown below
```
  export DDP_DEFAULT_CONNECTION_URL=http://localhost:3030
  meteor --settings settings.json
```

## Security in Meteor app
more [here](https://guide.meteor.com/security.html)
  1. Methods: Any data that comes in through Method arguments needs to be validated, and Methods should not return data the user shouldn’t have access to.
  2. Publications: Any data that comes in through publication arguments needs to be validated, and publications should not return data the user shouldn’t have access to.
  3. Served files: You should make sure none of the source code or configuration files served to the client have secret data.
