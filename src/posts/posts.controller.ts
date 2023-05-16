import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(createPostDto);
  }

  @Get('/:id')
  getPostById(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postsService.getPostById(id);
  }

  @Delete('/:id')
  deletePostById(@Param('id', ParseIntPipe) id): Promise<void | object> {
    return this.postsService.deletePostById(id);
  }
}
