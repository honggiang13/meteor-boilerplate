import { Meteor } from 'meteor/meteor'

import storyCollection from '../models/storyCollection'

// TODO: import in server/index.js

Meteor.publish('story', function () {
  return storyCollection.find()
})
