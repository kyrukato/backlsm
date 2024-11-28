import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

@Module({
  providers: [JwtStrategy],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy: 'jwt'}), //Definición de la estrategia como un JWT
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      //Función que se manda llamar cuando se intente registrar de manera asíncrona el módulo
      useFactory: ( configService:ConfigService ) => {
        return {
          secret: configService.get('JWT_SECRET'), //Llave para firmar los tokens utilizando una variable de entorno
          signOptions:{
            expiresIn: '2h', //Definición de la expiración del token
          }
        }
      }
    })
  ],
  exports: [JwtStrategy, PassportModule, JwtModule],
})
export class CommonModule {}
