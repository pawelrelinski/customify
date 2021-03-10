import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './modules/product/Product.entity';
import { Connection } from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "customify",
      "entities": [ProductEntity],
      "synchronize": true,
      "autoLoadEntities": true
    }),
    ProductModule,
    AuthModule,
    UserModule
  ],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule {

  constructor(private connection: Connection) {
  }

}
