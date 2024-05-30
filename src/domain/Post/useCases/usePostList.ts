import {useQuery} from '@apollo/client';
import {Post, PostAPI} from '../types';
import {postQueries} from '../postQueries';
import {useEffect, useState} from 'react';
import {postAdapter} from '../postAdapter';

export function usePostList() {
  const [data, setData] = useState<Post[]>([]);

  const query = useQuery<{posts: PostAPI[]}>(postQueries.FIND_LIST);

  useEffect(() => {
    const postListAPI = query.data?.posts;
    if (postListAPI) {
      const posts = postListAPI.map(postAdapter.mapApiToModel);
      setData(posts);
    }
  }, [query.data]);

  return {
    data,
  };
}
