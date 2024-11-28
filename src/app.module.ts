import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { AuthModule } from './auth/auth.module';
import { MemoryLocalModule } from './games/local/memory-local/memory-local.module';
import { SequenceLocalModule } from './games/local/sequence-local/sequence-local.module';
import { GuessLocalModule } from './games/local/guess-local/guess-local.module';
import { MemoryPvpModule } from './games/pvp/memory-pvp/memory-pvp.module';
import { GuessPvpModule } from './games/pvp/guess-pvp/guess-pvp.module';
import { SequencePvpModule } from './games/pvp/sequence-pvp/sequence-pvp.module';
import { CommonModule } from './common/common.module';


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
    MemoryLocalModule,
    SequenceLocalModule,
    GuessLocalModule,
    MemoryPvpModule,
    GuessPvpModule,
    SequencePvpModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
