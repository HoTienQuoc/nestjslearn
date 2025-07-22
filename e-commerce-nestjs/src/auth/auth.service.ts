import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signup(createAuthDto:CreateAuthDto){
    //1 Create user
    const user = await this.usersService.create(createAuthDto);
    //2 Hash password
    //3 Save it to database
    //4 Generate Jwt
    const payload = {
      id: user.id,      
    }
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
  async signIn(){
    //1 find user by user's email
    //2 Compare password
    //3 Issue accessToken
     
  }
}
