import React from 'react';

export default ({ onClick, name }) => {
    return (
        <div>
            <h1>Welcome to the Meteor-react scaffold</h1>
            <h2>It's awesome</h2>
            <p>Click the button and check your console to see the action propagates :)</p>
            <button onClick={onClick}>Click to say Hello</button>
            {name ? 'Hello ' + name : null}
        </div>
    );
}