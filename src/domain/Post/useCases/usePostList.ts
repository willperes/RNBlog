import {useQuery} from '@apollo/client';
import {PostSummary, PostSummaryAPI} from '../types';
import {postQueries} from '../postQueries';
import {useEffect, useState} from 'react';
import {postAdapter} from '../postAdapter';

export function usePostList() {
  const [data, setData] = useState<PostSummary[]>([]);

  const query = useQuery<{posts: PostSummaryAPI[]}>(
    postQueries.FIND_LIST_SUMMARY,
  );

  useEffect(() => {
    const postListAPI = query.data?.posts;
    if (postListAPI) {
      const posts = postListAPI.map(postAdapter.mapSummaryApiToModel);
      setData(posts);
    }
  }, [query.data]);

  return {
    data,
  };
}
