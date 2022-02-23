import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/dto/pagination.dto';
import { ProductDto } from 'src/dto/product.create.dto';
import { ProductUpdateDto } from 'src/dto/product.update.dto';

@Injectable()
export class ProductService {
  createProduct(product: ProductDto, products: ProductDto[]): ProductDto[] {
    products.push(product);
    return products;
  }

  findAll(
    products: ProductDto[],
    query: PaginationDto,
  ): ProductDto | ProductDto[] {
    const findProductBySearch = products.find((product) => {
      const searchTrim = query.search.trim();
      const productName = product.productName.trim();
      if (productName === searchTrim) {
        return product;
      }
    });

    if (!findProductBySearch) {
      return products;
    }
    return findProductBySearch;
  }

  findOne(productId: number, products: ProductDto[]): ProductDto {
    const filterProduct = products.find(
      (product) => product.productId === productId,
    );
    return filterProduct;
  }

  updateProduct(
    productId: number,
    product: ProductDto,
    products: ProductDto[],
  ) {
    const findProductById = products.findIndex(
      (product) => product.productId === productId,
    );

    const copyProduct = [...products];
    copyProduct[findProductById] = product;
    products = copyProduct;

    return products;
  }

  updateServicePatch(
    Id: number,
    product: ProductUpdateDto,
    products: ProductDto[],
  ) {
    const productIndex = products.findIndex(
      (product) => product.productId === Id,
    );

    const productFind = products.find((product) => product.productId === Id);

    Object.keys(product).forEach((key) => {
      if (productFind[key]) {
        productFind[key] = product[key];
      }
    });

    products.splice(productIndex, 1, productFind);

    return products;
  }

  deleteService(productId: number, products: ProductDto[]) {
    const getProductById = products.findIndex(
      (product) => product.productId === productId,
    );
    products.splice(getProductById, 1);
    return products;
  }
}
