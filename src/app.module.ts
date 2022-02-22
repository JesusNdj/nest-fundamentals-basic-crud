import { Module } from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductService } from './product-service/product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
