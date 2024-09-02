declare class Products {
    id: number;
    product_manufacturer: string;
    price: string;
    parts_manufacturer: string;
    vendor_code: string;
    name: string;
    description: string;
    images: string;
    in_stock: number;
    bestseller: boolean;
    new: boolean;
    popularity: number;
    createdAt: string;
    updatedAt: string;
}
export declare class PaginateAndFilterResponse {
    count: number;
    rows: Products[];
}
export declare class Bestsellers extends Products {
    bestseller: boolean;
}
export declare class GetBestsellersResponse extends PaginateAndFilterResponse {
    count: number;
    rows: Bestsellers[];
}
export declare class New extends Products {
    new: boolean;
}
export declare class GetNewResponse extends PaginateAndFilterResponse {
    count: number;
    rows: New[];
}
export declare class SearchResponse extends PaginateAndFilterResponse {
}
export declare class SearchRequest extends PaginateAndFilterResponse {
    search: string;
}
export declare class GetByNameResponse extends Products {
}
export declare class GetByNameRequest extends PaginateAndFilterResponse {
    name: string;
}
export declare class FindOneResponse extends Products {
}
export interface IProductQuery {
    limit: string;
    offset: string;
}
export {};
