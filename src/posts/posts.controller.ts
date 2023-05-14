import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { iPost } from './post.model';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  getAllPosts(): iPost[] {
    return this.postsService.getAllPosts();
  }

  @Post('/')
  createPost(
    @Body('title') title: string,
    @Body('description') description: string,
  ): iPost {
    return this.postsService.createPost(title, description);
  }
}
