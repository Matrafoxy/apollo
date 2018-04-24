import { Mongo } from 'meteor/mongo';

let Comments = new Mongo.Collection('comments');

export default Comments;