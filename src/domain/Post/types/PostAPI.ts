import {PostElement} from './Post';

export interface PostAPI {
  id: number;
  author: PostAuthorAPI;
  title: string;
  cover_image_url: string;
  elements: PostElementAPI[];
  created_at: string;
  updated_at: string;
}

export type PostAuthorAPI = {
  name: string;
  image_url: string;
};

export type PostElementAPI = {
  type: PostElement.Type;
  content: string;
};
