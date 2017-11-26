import { Meteor } from 'meteor/meteor'

import TagCollection from '../models/TagCollection'

// TODO: import in server/index.js

Meteor.publish('Tag', function () {
  return TagCollection.find()
})
