import { User } from './../../user/entities/user.entity';
import { ManyToOne, OneToMany } from "typeorm";

export class Role {

    @OneToMany(()=>User, (user)=>user.role)
    users: User[];
}
