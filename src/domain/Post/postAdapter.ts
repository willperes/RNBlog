import {Post, PostAPI} from './types';

function mapApiToModel(postAPI: PostAPI): Post {
  return {
    ...postAPI,
    coverImageURL: postAPI.cover_image_url,
    author: {
      ...postAPI.author,
      imageURL: postAPI.author.image_url,
    },
    createdAt: new Date(postAPI.created_at),
    updatedAt: new Date(postAPI.updated_at),
  };
}

export const postAdapter = {
  mapApiToModel,
};
