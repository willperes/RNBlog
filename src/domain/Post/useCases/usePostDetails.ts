import {useQuery} from '@apollo/client';
import {Post, PostAPI} from '../types';
import {postQueries} from '../postQueries';
import {useEffect, useState} from 'react';
import {postAdapter} from '../postAdapter';

export function usePostDetails(postID: number) {
  const [data, setData] = useState<Post>();

  const query = useQuery<{post: PostAPI}>(postQueries.FIND_POST, {
    variables: {postID},
  });

  useEffect(() => {
    const postAPI = query.data?.post;
    if (postAPI) {
      const post = postAdapter.mapApiToModel(postAPI);
      setData(post);
    }
  }, [query.data]);

  return {
    data,
  };
}
