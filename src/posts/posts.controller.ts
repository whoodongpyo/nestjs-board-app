import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { iPost } from './post.model';
import { iDeletePostResponse } from 'src/types/PostResponse';

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

  @Get('/:id')
  getPostById(@Param('id') id: string): iPost {
    return this.postsService.getPostById(id);
  }

  @Delete('/:id')
  deletePostById(@Param('id') id: string): iDeletePostResponse {
    const result = this.postsService.deletePostById(id);
    return result;
  }
}
