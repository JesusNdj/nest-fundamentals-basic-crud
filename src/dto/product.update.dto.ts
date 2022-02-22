import { PartialType } from '@nestjs/swagger';

import { ProductDto } from './product.create.dto';

export class ProductUpdateDto extends PartialType(ProductDto) {}
