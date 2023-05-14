export interface Post {
  id: string;
  title: string;
  description: string;
  status: PostStatus;
}

export enum PostStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
