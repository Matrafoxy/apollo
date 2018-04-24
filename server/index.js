// file: server/index.js
import { initialize } from 'meteor/cultofcoders:apollo';
import './load.js';
import Posts from '../imports/db/posts/collection';
import Comments from '../imports/db/comments/collection';
import Groups from '../imports/db/groups/collection';
//import '../imports/db/links';
import '../imports/fixtures';

initialize();