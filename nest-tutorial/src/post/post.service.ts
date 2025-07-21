import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

    async create(createCatDto: PostDocument): Promise<Post> {
        const createdPost = new this.postModel(createCatDto);
        return createdPost.save();
    }

    async findAll(): Promise<Post[]> {
        return this.postModel.find().exec();
    }
}
