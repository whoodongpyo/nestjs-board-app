import { iPost } from 'src/posts/post.model';

export interface iDeletePostResponse {
  success?: string;
  error?: string;
  postToBeDeleted?: iPost;
  deletedPost?: iPost;
}

export interface iPatchPostResponse {
  success?: string;
  error?: string;
  updatedPost?: iPost;
}
