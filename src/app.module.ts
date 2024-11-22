import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', //Especificamos el tipo de BD a utilizar
      url: process.env.DATABASE_URL, //Le asignamos el URL de la conexión a la BD
      autoLoadEntities: true, //Carga automaticamente las entidades
      synchronize: true, //Sincroniza los cambios de manera automatica
    }),
    SeedModule,
    DictionaryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
