import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FRAG_NOTE } from './fragments';

// here we create a query opearation
const NOTE = gql`
  query Note($id: Int!) {
    note(id: $id) {
      ...FragNoteFields
    }
  }
  ${FRAG_NOTE}
`;

// We then can use the graphql container to pass the query results returned by MY_QUERY
// to a component as a prop (and update them as the results change)
export default graphql(NOTE, {
  options({ match: { params } }) {
    return {
      variables: {
        id: params.id,
      },
      fetchPolicy: 'cache-only',
    };
  },
  props({ data }) {
    return {
      note: data.note,
      isLoading: data.loading,
      error: data.error,
    };
  }
})(NodeListContainer);

function NodeListContainer({ note, isLoading, error }) {
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Something went wrong: {error.message}</span>;
  }

  return (
    <div>
      <p>id: {note.id}</p>
      <p>name: {note.name}</p>
      <p>read: {note.read}</p>
    </div>
  );
}
