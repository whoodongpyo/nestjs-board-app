import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/:id')
  getPostById(@Param('id') id: number): Promise<Post> {
    return this.postsService.getPostById(id);
  }
}
