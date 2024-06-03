import React from 'react';
import {fireEvent, postMocks, render, screen} from '@/test';
import {PostCard} from '../PostCard';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: () => ({
      ...originalModule.useNavigation,
      navigate: mockedNavigate,
    }),
  };
});

describe('<PostCard />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display the post title and cover image correctly', () => {
    render(<PostCard {...postMocks.post} />);

    const titleElement = screen.getByText(postMocks.post.title);
    expect(titleElement).toBeTruthy();

    const imageElement = screen.getByTestId('post-card-cover-image');
    expect(imageElement.props.src).toBe(postMocks.post.coverImageURL);
  });

  it('should navigate to the PostScreen when pressed on the card', () => {
    render(<PostCard {...postMocks.post} />);

    const pressableElement = screen.getByTestId(
      `post-card-${postMocks.post.id}`,
    );
    fireEvent.press(pressableElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostScreen', {postID: 1});
  });
});
