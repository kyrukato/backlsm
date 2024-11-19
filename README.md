<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 1. Para crear el proyecto
 2. Instalar yarn ```yarn install```
 3. Desintstalar la librería prettier para evitar los errores de identación 
 ```yarn remove prettier eslint-config-prettier eslint-plugin-prettier```
 4. Instalar las librerías class-validator y class-transformer
 ```yarn add class-validator class-transformer```
 5. Crear archivo de las variables de entorno
 6. insertar el url a la conexión a la BD
DATABASE_URL="postgresql://yourUser:yourPassword@localhost:5432/yourdatabaseName?schema=public"
 7. Instalar las variables de entorno
 ```yarn add @nestjs/config```
 8. Importar el root en el modulo de app
 ConfigModule.forRoot()
 9. Instalar el driver para manejar la BD de postgres
 ```yarn add @nestjs/typeorm typeorm pg```
 10. Configurar el driver en el app.module
 TypeOrmModule.forRoot({
  type: 'postgres', //Especificamos el tipo de BD a utilizar
  url: process.env.DATABASE_URL, //Le asignamos el URL de la conexión a la BD
  autoLoadEntities: true, //Carga automaticamente las entidades
  synchronize: true, //Sincroniza los cambios de manera automatica
 }),
 11. Crear el archivo semilla
 12. En los recursos en las entidades poner el decorador @Entity() y designar las columnas que tendrá la tabla
 12. En el servicio de dicho recurso importar la(s) entidad(es)
 TypeOrmModule.forFeature([Dictionary])




 PARA CLONAR EL PROYECTO
 1. Clonar el repositorio
 2. Instalar yarn
 ```yarn install```
 3. Crear el archivo de las variables de entorno .env
 4. Insertar el URL de la conexión a la BD
 DATABASE_URL="postgresql://[yourUser]:[yourPasswor]@localhost:5432/[yourdatabaseName]?schema=public"
 5. Abrir porstges
 6. Levantar el servicio de la api
 ```yarn start:dev```
 7. Ejecutar el arvhivo semilla para poblar la BD


