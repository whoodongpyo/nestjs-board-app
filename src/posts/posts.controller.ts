import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  getAllPosts(): Post[] {
    return this.postsService.getAllPosts();
  }
}
