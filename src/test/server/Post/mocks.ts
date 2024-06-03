import {Post, PostAPI, PostElement} from '@/domain';

const post: Post = {
  id: 1,
  author: {
    imageURL: 'https://github.com/willperes.png',
    name: 'Willian Peres',
  },
  coverImageURL:
    'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rsrwji2o2jQJcleZ.png',
  createdAt: new Date('2024-06-03T16:12:31.159Z'),
  elements: [
    {
      content:
        'React Native, developed by Facebook, has transformed the landscape of mobile app development. It allows developers to build natively-rendered mobile apps using JavaScript and React. This article explores the advantages, key features, development process, challenges, and future trends of React Native app development.',
      type: PostElement.Type.Paragraph,
    },
    {content: 'Introduction to React Native', type: PostElement.Type.Title},
    {
      content:
        'https://img.reintech.io/variants/kz86wzzobcsqyp0akeila3v0vo27/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b',
      type: PostElement.Type.Image,
    },
    {content: 'Cross-Platform Compatibility', type: PostElement.Type.Subtitle},
    {
      content:
        'React Native is a popular framework for building mobile applications that work on both iOS and Android platforms. By leveraging JavaScript and React, developers can create apps that provide a native-like experience, all while using a single codebase. This cross-platform capability significantly reduces development time and costs.',
      type: PostElement.Type.Paragraph,
    },
  ],
  title: 'Advantages and Challenges of React Native App Development',
  updatedAt: new Date('2024-06-03T16:40:53.211Z'),
};

const postAPI: PostAPI = {
  author: {
    image_url: 'https://github.com/willperes.png',
    name: 'Willian Peres',
  },
  cover_image_url:
    'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*rsrwji2o2jQJcleZ.png',
  created_at: '2024-06-03T16:12:31.159Z',
  elements: [
    {
      content:
        'React Native, developed by Facebook, has transformed the landscape of mobile app development. It allows developers to build natively-rendered mobile apps using JavaScript and React. This article explores the advantages, key features, development process, challenges, and future trends of React Native app development.',
      type: PostElement.Type.Paragraph,
    },
    {
      content: 'Introduction to React Native',
      type: PostElement.Type.Title,
    },
    {
      content:
        'https://img.reintech.io/variants/kz86wzzobcsqyp0akeila3v0vo27/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b',
      type: PostElement.Type.Image,
    },
    {
      content: 'Cross-Platform Compatibility',
      type: PostElement.Type.Subtitle,
    },
    {
      content:
        'React Native is a popular framework for building mobile applications that work on both iOS and Android platforms. By leveraging JavaScript and React, developers can create apps that provide a native-like experience, all while using a single codebase. This cross-platform capability significantly reduces development time and costs.',
      type: PostElement.Type.Paragraph,
    },
  ],
  id: 1,
  title: 'Advantages and Challenges of React Native App Development',
  updated_at: '2024-06-03T16:40:53.211Z',
};

export const postMocks = {post, postAPI};
