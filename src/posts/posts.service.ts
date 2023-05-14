import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  getAllPosts() {
    return this.posts;
  }
}
