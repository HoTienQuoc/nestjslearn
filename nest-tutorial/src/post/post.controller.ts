import { PostService } from './post.service';
import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { PostDocument } from './schemas/post.schema';

@Controller('posts')
@UseInterceptors(ClassSerializerInterceptor)
export class PostController {
    constructor(private readonly postService: PostService){}

    @Post()
    create(@Body() postBody: PostDocument){
        return this.postService.create(postBody);
    }
}
