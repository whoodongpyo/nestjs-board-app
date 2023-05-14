import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { iPost, PostStatus } from './post.model';
import { iDeletePostResponse } from 'src/types/PostResponse';
import { v1 as uuid } from 'uuid';

@Injectable()
export class PostsService {
  private posts: iPost[] = [];

  getAllPosts(): iPost[] {
    return this.posts;
  }

  createPost(createPostDto: CreatePostDto) {
    const { title, description } = createPostDto;
    const post: iPost = {
      id: uuid(),
      title,
      description,
      status: PostStatus.PUBLIC,
    };

    this.posts.push(post);
    return post; // 생성한 게시글 정보를 확인용으로 전달하기
  }

  getPostById(id: string): iPost {
    return this.posts.find((post) => post.id === id);
  }

  deletePostById(id: string): iDeletePostResponse {
    const postToBeDeleted = this.getPostById(id);

    if (!postToBeDeleted) {
      return {
        error: '삭제하려는 게시글이 존재하지 않습니다.',
      };
    }

    this.posts = this.posts.filter((post) => post.id !== id);

    const post = this.getPostById(id);
    if (post) {
      return {
        error: '삭제하려는 게시글이 정상적으로 삭제되지 않았습니다.',
        postToBeDeleted,
      };
    }

    return {
      success: '게시글이 정상적으로 삭제되었습니다.',
      deletedPost: postToBeDeleted,
    };
  }
}
