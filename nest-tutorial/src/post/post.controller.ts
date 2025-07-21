import { PostService } from './post.service';
import { Body, Controller, Post } from '@nestjs/common';
import { PostDocument } from './schemas/post.schema';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService){}

    @Post()
    create(@Body() postBody: PostDocument){
        return this.postService.create(postBody);
    }
}
