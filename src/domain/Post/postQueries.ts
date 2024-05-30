import {gql} from '@apollo/client';

const FIND_LIST_SUMMARY = gql`
  query FindList {
    posts {
      id
      author {
        image_url
        name
      }
      title
      cover_image_url
      created_at
    }
  }
`;

export const postQueries = {
  FIND_LIST_SUMMARY,
};
