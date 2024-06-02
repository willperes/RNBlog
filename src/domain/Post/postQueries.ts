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

const FIND_POST = gql`
  query FindPost($postID: Int!) {
    post(id: $postID) {
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
  FIND_LIST_SUMMARY,
  FIND_POST,
};
