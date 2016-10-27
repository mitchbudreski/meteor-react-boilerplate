import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from '../imports/ui/store';
import App from '../imports/ui/App';

Meteor.startup(() => {
    render((
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App} />
          </Router>
        </Provider>
    ), document.getElementById('app'));
});