export default {
 
  Query: {
   users(_, args, { db }, ast) {
      return db.users.astToQuery(ast).fetch();
    },
    posts(_, {_id, title }, { db }, ast) {
      //console.log(args);
      $filters = {};
       if (_id) {
        $filters = { _id };
       }
        else {
        $filters = { title };
       }

       //console.log($filters);
      return db.posts.astToQuery(ast, { $filters }).fetch();
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