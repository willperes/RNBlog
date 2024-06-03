import React from 'react';
import {postMocks, render, screen} from '@/test';
import {PostCard} from '../PostCard';

describe('<PostCard />', () => {
  it('should display the post title and cover image correctly', () => {
    render(<PostCard {...postMocks.post} />);

    const titleElement = screen.getByText(postMocks.post.title);
    expect(titleElement).toBeTruthy();

    const imageElement = screen.getByTestId('post-card-cover-image');
    expect(imageElement.props.src).toBe(postMocks.post.coverImageURL);
  });
});
