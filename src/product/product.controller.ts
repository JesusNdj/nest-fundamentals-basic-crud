import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductDto } from 'src/dto/product.create.dto';
import { ProductUpdateDto } from 'src/dto/product.update.dto';
import { PaginationDto } from 'src/dto/pagination.dto';
import { ProductService } from 'src/product-service/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  products = [
    {
      productId: 1,
      productName: 'Iphone X',
      price: 3000,
      isPromotion: true,
      quantity: 2000,
    },
    {
      productId: 2,
      productName: 'Mac',
      price: 10000,
      isPromotion: false,
      quantity: 500,
    },
  ];

  @Get()
  getAll(@Query() query: PaginationDto) {
    return this.productService.findAll(this.products, query);
  }

  @Get(':productId') // :isPromotion
  getOne(
    @Param(
      'productId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    productId: number,
  ) {
    return this.productService.findOne(productId, this.products);
  }

  @Post()
  createProduct(@Body() product: ProductDto): ProductDto[] {
    return this.productService.createProduct(product, this.products);
  }

  @Put(':productId')
  updateProduct(
    @Param(
      'productId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    productId: number,
    @Body() product: ProductDto,
  ): ProductDto[] {
    return this.productService.updateProduct(productId, product, this.products);
  }

  @Patch(':productId')
  updateProductPartial(
    @Param(
      'productId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    productId: number,
    @Body() product: Partial<ProductUpdateDto>,
  ): ProductUpdateDto[] {
    const id = Number(productId);
    return this.productService.updateServicePatch(id, product, this.products);
  }

  @Delete(':productId')
  deleteProduct(
    @Param(
      'productId',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    productId: number,
  ): ProductDto[] {
    return this.productService.deleteService(productId, this.products);
  }
}
