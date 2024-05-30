import {
  Post,
  PostAPI,
  PostAuthor,
  PostAuthorAPI,
  PostSummary,
  PostSummaryAPI,
} from './types';

function mapAuthorApiToModel(authorAPI: PostAuthorAPI): PostAuthor {
  return {
    ...authorAPI,
    imageURL: authorAPI.image_url,
  };
}

function mapApiToModel(postAPI: PostAPI): Post {
  return {
    ...postAPI,
    author: mapAuthorApiToModel(postAPI.author),
    coverImageURL: postAPI.cover_image_url,
    createdAt: new Date(postAPI.created_at),
    updatedAt: new Date(postAPI.updated_at),
  };
}

function mapSummaryApiToModel(postSummaryAPI: PostSummaryAPI): PostSummary {
  return {
    ...postSummaryAPI,
    author: mapAuthorApiToModel(postSummaryAPI.author),
    coverImageURL: postSummaryAPI.cover_image_url,
    createdAt: new Date(postSummaryAPI.created_at),
  };
}

export const postAdapter = {
  mapApiToModel,
  mapSummaryApiToModel,
};
