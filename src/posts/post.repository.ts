import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status-enum';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, description } = createPostDto;

    const post = this.create({
      title,
      description,
      status: PostStatus.PUBLIC,
    });

    await this.save(post);

    return post;
  }

  async getPostById(id: number): Promise<Post> {
    const found = await this.findOne({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException(`Can't find Post. (id: ${id})`);
    }

    return found;
  }

  async deletePostById(id: number): Promise<void | object> {
    const deleteResult = await this.delete({ id: id });

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Can't find Post with id ${id}.`);
    }

    return {
      message: `id가 ${id}인 게시글이 성공적으로 삭제되었습니다.`,
    };
  }
}
