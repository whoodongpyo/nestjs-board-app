import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  //
  // @Get('/')
  // getAllPosts(): iPost[] {
  //   return this.postsService.getAllPosts();
  // }
  //
  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createPost(@Body() createPostDto: CreatePostDto): iPost {
  //   return this.postsService.createPost(createPostDto);
  // }
  //

  @Get('/:id')
  getPostById(@Param('id') id: number): Promise<Post> {
    return this.postsService.getPostById(id);
  }

  // @Get('/:id')
  // getPostById(@Param('id') id: string): iPost {
  //   return this.postsService.getPostById(id);
  // }
  //
  // @Delete('/:id')
  // deletePostById(@Param('id') id: string): iDeletePostResponse {
  //   return this.postsService.deletePostById(id);
  // }
  //
  // @Patch('/:id/status')
  // updatePostStatus(
  //   @Param('id') id: string,
  //   @Body('status', PostStatusValidationPipe) status: PostStatus,
  // ) {
  //   return this.postsService.updatePostStatus(id, status);
  // }
}
