export function addLink(text) {
    return () => {
        Meteor.call('addLink', text);
    }
}

export function sayHello(name) {
    return {
        type: 'SAY_HELLO',
        name
    };
}