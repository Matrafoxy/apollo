import { Meteor } from 'meteor/meteor';

import Comments from './collection';
import Posts from '../posts/collection';

// Comments.addLinks({
//     'post': {
//         type: 'one',
//         collection: Posts,
//         field: 'postId'
//     },

// });