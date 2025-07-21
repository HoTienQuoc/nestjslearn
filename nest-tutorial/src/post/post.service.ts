import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private catModel: Model<Post>) {}

    async create(createCatDto: PostDocument): Promise<Post> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Post[]> {
        return this.catModel.find().exec();
    }
}
