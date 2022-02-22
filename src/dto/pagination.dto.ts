import { IsInt, IsOptional, IsString } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @IsOptional()
  page?: number;

  @IsInt()
  @IsOptional()
  perPage?: number;

  @IsString()
  @IsOptional()
  search?: string;
}
