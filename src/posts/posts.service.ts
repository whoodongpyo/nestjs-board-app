import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status-enum';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(createPostDto);
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.getAllPosts();
  }

  async getPostById(id: number): Promise<Post> {
    return this.postRepository.getPostById(id);
  }

  async updatePostStatus(id: number, status: PostStatus): Promise<Post> {
    return this.postRepository.updatePostStatus(id, status);
  }

  async deletePostById(id: number): Promise<void | object> {
    return await this.postRepository.deletePostById(id);
  }
}
