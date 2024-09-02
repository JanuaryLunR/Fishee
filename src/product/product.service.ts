import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Product } from './product.model';
import { IProductQuery } from './types';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private ProductModel: typeof Product,
  ) { }

  async paginateAndFilter(query: IProductQuery): Promise<{ count: number; rows: Product[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    return this.ProductModel.findAndCountAll({
      limit,
      offset,
    });
  }

  async findById(id: number): Promise<Product> {
    return this.ProductModel.findByPk(
      id,
    );
  }

  async findByName(name: string): Promise<Product> {
    return this.ProductModel.findOne({
      where: { name },
    });
  }

  async searchByString(str: string): Promise<{ count: number; rows: Product[] }> {
    return this.ProductModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }

  async bestsellers(): Promise<{ count: number; rows: Product[] }> {
    return this.ProductModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: Product[] }> {
    return this.ProductModel.findAndCountAll({
      where: { new: true },
    });
  }
}
