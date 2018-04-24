import { Mongo } from 'meteor/mongo';

let Posts = new Mongo.Collection('posts');

export default Posts;