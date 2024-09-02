import { Product } from './product.model';
import { IProductQuery } from './types';
export declare class ProductService {
    private ProductModel;
    constructor(ProductModel: typeof Product);
    paginateAndFilter(query: IProductQuery): Promise<{
        count: number;
        rows: Product[];
    }>;
    findById(id: number): Promise<Product>;
    findByName(name: string): Promise<Product>;
    searchByString(str: string): Promise<{
        count: number;
        rows: Product[];
    }>;
    bestsellers(): Promise<{
        count: number;
        rows: Product[];
    }>;
    new(): Promise<{
        count: number;
        rows: Product[];
    }>;
}
