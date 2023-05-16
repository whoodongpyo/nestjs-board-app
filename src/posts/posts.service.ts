import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(private postRepository: PostRepository) {}

  async getPostById(id: number): Promise<Post> {
    const found = await this.postRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException(`Can't find Post. (id: ${id})`);
    }

    return found;
  }
}
