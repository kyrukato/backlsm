import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUSerDto } from './dto/create-user.dto';
import { LoginUSerDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from './decorators/raw-headers.decorator';
import { getuid } from 'process';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interface/valid-roles';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto:CreateUSerDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto:LoginUSerDto) {
    return this.authService.login(loginUserDto);
  }


  @Get('private3')
  @Auth() //Para proteger la ruta se especifica el rol
  privateRoute3(
  @GetUser() user:User,
  ){
    return {
      ok: true,
      user,
    }
  }

}
