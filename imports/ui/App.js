import React from 'react';
import { render } from 'react-dom';
import HelloWorldContainer from './containers/HelloWorldContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Nav />
                <ErrorMessage />*/}
                <HelloWorldContainer />
            </div>
        );
    }
}