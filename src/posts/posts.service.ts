import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(createPostDto);
  }

  async getPostById(id: number): Promise<Post> {
    return this.postRepository.getPostById(id);
  }
}
