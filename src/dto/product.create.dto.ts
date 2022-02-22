import { IsBoolean, IsInt, IsString } from 'class-validator';

export class ProductDto {
  @IsInt()
  productId: number;

  @IsString()
  productName: string;

  @IsInt()
  price: number;

  @IsBoolean()
  isPromotion: boolean;

  @IsInt()
  quantity: number;
}
