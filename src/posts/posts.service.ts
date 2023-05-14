import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  getAllPosts(): Post[] {
    return this.posts;
  }
}
