import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus, iPost } from './post.model';
import { iDeletePostResponse } from 'src/types/PostResponse';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  getAllPosts(): iPost[] {
    return this.postsService.getAllPosts();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto): iPost {
    return this.postsService.createPost(createPostDto);
  }

  @Get('/:id')
  getPostById(@Param('id') id: string): iPost {
    return this.postsService.getPostById(id);
  }

  @Delete('/:id')
  deletePostById(@Param('id') id: string): iDeletePostResponse {
    return this.postsService.deletePostById(id);
  }

  @Patch('/:id/status')
  updatePostStatus(
    @Param('id') id: string,
    @Body('status') status: PostStatus,
  ) {
    return this.postsService.updatePostStatus(id, status);
  }
}
