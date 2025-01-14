import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, SetMetadata, ParseUUIDPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUSerDto } from './dto/create-user.dto';
import { LoginUSerDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidRoles } from 'src/common/interface/valid-roles';
import { Auth } from 'src/common/decorators/auth.decorator.ts.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags("Users")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({summary: 'Crea un nuevo usuario', description:'Crea un nuevo usuario en la base de datos.'})
  @ApiResponse({status:201, description: 'Retorna la información básica del usuario y su token', example:{"email": "usuario@usuario.com",
  "name": "usuario",
  "id": "84019b25-a0db-4520-8ffc-1de3a68d372f",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MDE5YjI1LWEwZGItNDUyMC04ZmZjLTFkZTNhNjhkMzcyZiIsImlhdCI6MTczMjkyMjE3NSwiZXhwIjoxNzMyOTI5Mzc1fQ.1qj82xmr88Nweupe7U5wrgpLeNer07BzXNDFA5QGi0k"}})
  @ApiBody({type: CreateUSerDto})
  createUser(@Body() createUserDto:CreateUSerDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  @ApiOperation({summary: 'Inicio de sesión', description:'Permite crear un nuevo usuario en el sistema'})
  @ApiResponse({status: 200, description: 'Retorna información básica del usuario', isArray: true, example:{"email": "usuario@usuario.com",
  "name": "usuario",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0MDE5YjI1LWEwZGItNDUyMC04ZmZjLTFkZTNhNjhkMzcyZiIsImlhdCI6MTczMjkyMjE3NSwiZXhwIjoxNzMyOTI5Mzc1fQ.1qj82xmr88Nweupe7U5wrgpLeNer07BzXNDFA5QGi0k"}})
  @ApiBody({type: LoginUSerDto})
  loginUser(@Body() loginUserDto:LoginUSerDto) {
    return this.authService.login(loginUserDto);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Actualizar información del usuario', description:'Permite al usuario actualizar su nombre, correo y/o contraseña-'})
  @ApiResponse({status: 200, description: 'Retorna la información actualizada', example:{"id": "84019b25-a0db-4520-8ffc-1de3a68d372f",
  "email": "usuario@usuario.com",
  "name": "usuario",
  "isActive": true,
  "rol": "user"}})
  @ApiBody({type: UpdateUserDto})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto:UpdateUserDto){
    return this.authService.update(id,updateUserDto);
  }

  @Get(':id')
  @ApiOperation({summary: 'Información de usuario',description:'Permite al usuario obtener su información almacenada en el sistema'})
  @ApiResponse({status: 200, description: 'Retorna la información del usuario', example: {"id": "84019b25-a0db-4520-8ffc-1de3a68d372f",
  "email": "usuario@usuario.com",
  "name": "usuario",
  "isActive": true,
  "rol": "user"}})
  @ApiParam({name: 'id', description: 'ID del usuario que desea consultar su información', required: true, example:''})
  @ApiBearerAuth()
  @Auth(ValidRoles.user)
  findUser(@Param('id', ParseUUIDPipe) id:string){
    return this.authService.findUser(id)
  }

  /*@Get('private3')
  @Auth(ValidRoles.guest) //Para proteger la ruta se especifica el rol
  privateRoute3(
    @GetUser() user:User,
  ){
    return {
      ok: true,
      user,
    }
  }*/


}
