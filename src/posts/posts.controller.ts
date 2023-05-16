import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostStatus } from './post-status-enum';
import { PostStatusValidationPipe } from './pipes/post-status-validation.pipe';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createPost(createPostDto);
  }

  @Get('/:id')
  getPostById(@Param('id', ParseIntPipe) id): Promise<PostEntity> {
    return this.postsService.getPostById(id);
  }

  @Patch('/:id/status')
  updatePostStatus(
    @Param('id', ParseIntPipe) id,
    @Body('status', PostStatusValidationPipe) status: PostStatus,
  ): Promise<PostEntity> {
    return this.postsService.updatePostStatus(id, status);
  }

  @Delete('/:id')
  deletePostById(@Param('id', ParseIntPipe) id): Promise<void | object> {
    return this.postsService.deletePostById(id);
  }
}
