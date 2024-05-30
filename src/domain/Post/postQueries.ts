import {gql} from '@apollo/client';

const FIND_LIST = gql`
  query FindList {
    posts {
      id
      author {
        image_url
        name
      }
      title
      cover_image_url
      elements {
        type
        content
      }
      created_at
      updated_at
    }
  }
`;

export const postQueries = {
  FIND_LIST,
};
