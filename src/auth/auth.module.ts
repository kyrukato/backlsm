import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GuessLocalService } from 'src/games/local/guess-local/guess-local.service';
import { GuessLocalModule } from 'src/games/local/guess-local/guess-local.module';
import { MemoryLocalModule } from 'src/games/local/memory-local/memory-local.module';
import { SequenceLocalModule } from 'src/games/local/sequence-local/sequence-local.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    ConfigModule,
    GuessLocalModule,
    MemoryLocalModule,
    SequenceLocalModule,
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
  exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
