// in client/main.js
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import { Meteor } from 'meteor/meteor';
import { initialize } from 'meteor/cultofcoders:apollo';

const { client } = initialize();

// client
//   .query({
//     query: gql`
//     {
//         posts(_id: "aninTvF8iYzGnRyzB") {
//           _id
//     }
//   }
//     `
//   })
//   .then(result => console.log(result));

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('app')
  );
});

const QUERY = gql`
 query {
  posts(_id: "aninTvF8iYzGnRyzB") {
    _id
    title
    comments {
      _id
    }
  }
}
`;

const App = () => (
    <Query query={ QUERY }>
    {({data, loading, error}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
     
      return data.posts.map(({ _id, title, comments }) => (
        <div key={ _id }>
          <p>{`${title}`}</p> 
          <div>
            <Comment comments={comments} />
          </div>
        </div>
      ));
    }}
  </Query>
);

// const Comments = (props) => (
//     <div>
//         props.comments.map(({ _id }) => (
//         <div key={ _id }>
//             <p>{`${_id}`}</p>
//         </div>
//     ));
//     </div>
// );

class Comment extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return this.props.comments.map(({ _id }) => (
            <div key={ _id }>
                <p>{`${_id}`}</p>
            </div>
        ));
    }
}