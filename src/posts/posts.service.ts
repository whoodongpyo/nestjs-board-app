import { Injectable } from '@nestjs/common';
import { Post, PostStatus } from './post.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  getAllPosts(): Post[] {
    return this.posts;
  }

  createPost(title: string, description: string) {
    const post: Post = {
      id: uuid(),
      title,
      description,
      status: PostStatus.PUBLIC,
    };

    this.posts.push(post);
    return post; // 생성한 게시글 정보를 확인용으로 전달하기
  }
}
