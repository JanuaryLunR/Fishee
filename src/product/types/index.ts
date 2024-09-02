import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../product.model';

// 1:41:28 time

class Products {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  product_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Product, isArray: true })
  rows: Products;
}

export class Bestsellers extends Products {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Product, isArray: true })
  rows: Bestsellers;
}

export class New extends Products {
  @ApiProperty({ example: true })
  new: boolean;
}


export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: Product, isArray: true })
  rows: New;
}

export class SearchResponse extends PaginateAndFilterResponse {}
export class SearchRequest extends PaginateAndFilterResponse {
  @ApiProperty({ example: 'Name 3000' })
  search: string;
}

export class GetByNameResponse extends Products {}
export class GetByNameRequest extends PaginateAndFilterResponse {
  @ApiProperty({ example: 'Name 3000' })
  name: string;
}

export class FindOneResponse extends Products {}

export interface IProductQuery {
  limit: string,
  offset: string,
};