import UserResolver from './User.resolver';
import PostResolver from './Post.resolver';
import GroupResolver from './Group.resolver';
import CommentResolver from './Comment.resolver';

export default {
  resolvers: [
    UserResolver,
    PostResolver,
    CommentResolver,
    GroupResolver,
  ],
};