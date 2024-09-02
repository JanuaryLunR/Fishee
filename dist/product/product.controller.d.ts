import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    paginateAndFilter(query: any): Promise<{
        count: number;
        rows: import("./product.model").Product[];
    }>;
    getById(id: number): Promise<import("./product.model").Product>;
    search({ search }: {
        search: string;
    }): Promise<{
        count: number;
        rows: import("./product.model").Product[];
    }>;
    getByName({ name }: {
        name: string;
    }): Promise<import("./product.model").Product>;
    getBestseller(): Promise<{
        count: number;
        rows: import("./product.model").Product[];
    }>;
    getNew(): Promise<{
        count: number;
        rows: import("./product.model").Product[];
    }>;
}
