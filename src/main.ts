import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
        .setTitle("API Documentation")
        .setDescription("Documentación de endpoints para la API del sistema web interactivo para el aprendizade de LSM")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  );
  app.enableCors({
    origin: [
      'https://lsm-front.vercel.app', // tu dominio en producción
      'http://localhost:4200',        // opcional para pruebas locales
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
