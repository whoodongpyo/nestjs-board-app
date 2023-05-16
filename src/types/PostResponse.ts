import { iPost } from 'src/posts/post-status-enum';

export interface iDeletePostResponse {
  statusCode?: number;
  success?: string;
  error?: string;
  postToBeDeleted?: iPost;
  deletedPost?: iPost;
}

export interface iPatchPostResponse {
  statusCode?: number;
  success?: string;
  error?: string;
  updatedPost?: iPost;
}
