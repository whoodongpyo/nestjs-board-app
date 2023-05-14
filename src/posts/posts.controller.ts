import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { iPost } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  getAllPosts(): iPost[] {
    return this.postsService.getAllPosts();
  }

  @Post('/')
  createPost(@Body() createPostDto: CreatePostDto): iPost {
    return this.postsService.createPost(createPostDto);
  }
}
