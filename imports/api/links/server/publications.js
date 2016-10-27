import Links from '../collection';

Meteor.publish('getLinks', function () {
  return Links.find();
});