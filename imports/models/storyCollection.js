import { Mongo } from 'meteor/mongo'

const storyCollection = new Mongo.Collection('story')

storyCollection.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    image: {
      type: String
    },
    content: {
      type: String
    },
    tags: {
      type: Tag
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
)

// Collection2 already does schema checking
storyCollection.allow({
  insert : () => true,
  update : () => true,
  remove : () => true
})

export default storyCollection
