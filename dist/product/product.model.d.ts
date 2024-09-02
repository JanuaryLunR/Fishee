import { Model } from "sequelize-typescript";
export declare class Product extends Model {
    product_manufacturer: string;
    price: number;
    parts_manufacturer: string;
    vendor_code: string;
    name: string;
    description: string;
    images: string;
    in_stock: number;
    bestseller: boolean;
    new: boolean;
    popularity: number;
}
