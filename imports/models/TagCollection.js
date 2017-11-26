import { Mongo } from 'meteor/mongo'

const TagCollection = new Mongo.Collection('Tag')

TagCollection.attachSchema(
    new SimpleSchema({
    title: {
      type: String
    },
    createdAt: {
      type: Date,
      denyUpdate: true
    }
  })
)

// Collection2 already does schema checking
TagCollection.allow({
  insert : () => true,
  update : () => true,
  remove : () => true
})

export default TagCollection
