import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { FRAG_NOTE } from './fragments';

// here we create a query opearation
const NODE_LIST = gql`
  query NoteList {
    noteList {
      ...FragNoteFields 
    }
  }
  ${FRAG_NOTE}
`;

// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)
export default graphql(NODE_LIST, {
  props({ data }) {
    return {
      list: data.noteList,
      isLoading: data.loading,
      error: data.error,
    };
  }
})(NodeListContainer);

function NodeListContainer({ list, isLoading, error }) {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong: {error.message}</span>;
  }

  return (
    <ul>
      {list.map(item => (<li><Link to={`/notes/${item.id}`}>{item.name} {item.read}</Link></li>))}
    </ul>
  );
}
