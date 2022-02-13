/// Metadata for internal/external posts.
export interface PostData {
  name: string;
  description: string;
  date: string;
  content: string;
}

const posts: Array<PostData> = [
  {
    name: 'This is a title',
    description: 'This is a description',
    date: Date(),
    content: 'Test content for rendering the page.',
  },
  {
    name: 'This is a another title',
    description: 'This is a description',
    date: Date(),
    content: 'Test content for rendering the page.',
  },

];

/// Return all of the posts.
export function GetAllPosts(): Array<PostData> {
  return posts;
}
