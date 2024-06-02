export interface Post {
  id: number;
  author: PostAuthor;
  title: string;
  coverImageURL: string;
  elements: PostElement[];
  createdAt: Date;
  updatedAt: Date;
}

export type PostAuthor = {
  name: string;
  imageURL: string;
};

export type PostElement = {
  type: PostElement.Type;
  content: string;
};

export namespace PostElement {
  export enum Type {
    Title = 'title',
    Subtitle = 'subtitle',
    Paragraph = 'paragraph',
    Image = 'image',
  }
}

export type PostSummary = Pick<
  Post,
  'id' | 'author' | 'title' | 'coverImageURL' | 'createdAt'
>;
