import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { iPost, PostStatus } from './post.model';
import {
  iDeletePostResponse,
  iPatchPostResponse,
} from 'src/types/PostResponse';
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
    const post = this.posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException(`Can't find Post. (id: ${id})`);
    }

    return post;
  }

  deletePostById(id: string): iDeletePostResponse {
    const postToBeDeleted = this.getPostById(id);

    this.posts = this.posts.filter((post) => post.id !== postToBeDeleted.id);

    return {
      statusCode: 200,
      success: '게시글이 정상적으로 삭제되었습니다.',
      deletedPost: postToBeDeleted,
    };
  }

  updatePostStatus(id: string, status: PostStatus): iPatchPostResponse {
    const post = this.getPostById(id);

    if (!post) {
      return {
        error: '수정하려는 게시글이 존재하지 않습니다.',
      };
    }

    post.status = status;

    return {
      success: '게시글이 성공적으로 수정되었습니다.',
      updatedPost: post,
    };
  }
}
