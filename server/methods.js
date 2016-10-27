import Links from '../imports/api/links/collection';

Meteor.methods({
    addLink(text) {
        const newLinkId = Links.insert({ text });
        return newLinkId;
    }
});