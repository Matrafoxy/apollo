export default {
 
  Query: {
   users(_, args, { db }, ast) {
      return db.users.astToQuery(ast).fetch();
    },
    posts(_, args, { db }, ast) {
      $filters = {};
      // if (_id) {
      //   $filters = { _id };
      // }

      return db.posts.astToQuery(ast).fetch();
      // but you can do whatever you want here since ctx.db.posts is a Mongo.Collection
      // https://docs.meteor.com/api/collections.html
    },
  },
  Mutation: {
    addPost(_, { title }, { db }) {
     return db.posts.insert({
        title,
      });
    },
    addCommentToPost(_, { postId, text }, { db }) {
      const comment = {
        text,
        postId,
      };
      return db.comments.insert(comment);
    },
  },
  Subscription: {
    posts(_, args, { db }) {

      db.posts.find(
        {},
        {
          fields: { status: 1 },
        }
      );
    },
  },
};