export enum PostType {
  External,
  Internal,
}

/// Metadata for internal/external posts.
export interface PostData {
  name: string;
  description: string;
  date: string;
  content: string;
  type: PostType;
  linksTo: string;
}

const posts: Array<PostData> = [
  {
    name: 'Utilizing Github Actions to build and test your project on multiple platforms.',
    description: 'How I built and tested a C++ application on three different platforms.',
    date: new Date(2020, 11, 21).toLocaleDateString(),
    content: '',
    type: PostType.External,
    linksTo: 'https://levelup.gitconnected.com/utilizing-github-actions-to-build-and-test-on-multiple-platforms-a7fe3aa6ce2a',
  },
  {
    name: 'How to clean your sockets.',
    description: 'Cleaning up and simplifying your sockets in socket.io using routes & controllers.',
    date: new Date(2019, 4, 13).toLocaleDateString(),
    content: '',
    type: PostType.External,
    linksTo: 'https://betterprogramming.pub/how-i-cleaned-my-sockets-108503649bb3',
  },

];

/// Return all of the posts.
export function GetAllPosts(): Array<PostData> {
  return posts;
}
