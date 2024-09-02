"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneResponse = exports.GetByNameRequest = exports.GetByNameResponse = exports.SearchRequest = exports.SearchResponse = exports.GetNewResponse = exports.New = exports.GetBestsellersResponse = exports.Bestsellers = exports.PaginateAndFilterResponse = void 0;
const faker_1 = require("@faker-js/faker");
const swagger_1 = require("@nestjs/swagger");
const product_model_1 = require("../product.model");
class Products {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence(2) }),
    __metadata("design:type", String)
], Products.prototype, "product_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12345 }),
    __metadata("design:type", String)
], Products.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence(2) }),
    __metadata("design:type", String)
], Products.prototype, "parts_manufacturer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.internet.password() }),
    __metadata("design:type", String)
], Products.prototype, "vendor_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.word() }),
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.lorem.sentence() }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.image.city() }),
    __metadata("design:type", String)
], Products.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    __metadata("design:type", Number)
], Products.prototype, "in_stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], Products.prototype, "bestseller", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], Products.prototype, "new", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123 }),
    __metadata("design:type", Number)
], Products.prototype, "popularity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-31T19:46:45.000Z' }),
    __metadata("design:type", String)
], Products.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-01-31T19:46:45.000Z' }),
    __metadata("design:type", String)
], Products.prototype, "updatedAt", void 0);
class PaginateAndFilterResponse {
}
exports.PaginateAndFilterResponse = PaginateAndFilterResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], PaginateAndFilterResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_model_1.Product, isArray: true }),
    __metadata("design:type", Array)
], PaginateAndFilterResponse.prototype, "rows", void 0);
class Bestsellers extends Products {
}
exports.Bestsellers = Bestsellers;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], Bestsellers.prototype, "bestseller", void 0);
class GetBestsellersResponse extends PaginateAndFilterResponse {
}
exports.GetBestsellersResponse = GetBestsellersResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], GetBestsellersResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_model_1.Product, isArray: true }),
    __metadata("design:type", Array)
], GetBestsellersResponse.prototype, "rows", void 0);
class New extends Products {
}
exports.New = New;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], New.prototype, "new", void 0);
class GetNewResponse extends PaginateAndFilterResponse {
}
exports.GetNewResponse = GetNewResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], GetNewResponse.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: product_model_1.Product, isArray: true }),
    __metadata("design:type", Array)
], GetNewResponse.prototype, "rows", void 0);
class SearchResponse extends PaginateAndFilterResponse {
}
exports.SearchResponse = SearchResponse;
class SearchRequest extends PaginateAndFilterResponse {
}
exports.SearchRequest = SearchRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name 3000' }),
    __metadata("design:type", String)
], SearchRequest.prototype, "search", void 0);
class GetByNameResponse extends Products {
}
exports.GetByNameResponse = GetByNameResponse;
class GetByNameRequest extends PaginateAndFilterResponse {
}
exports.GetByNameRequest = GetByNameRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Name 3000' }),
    __metadata("design:type", String)
], GetByNameRequest.prototype, "name", void 0);
class FindOneResponse extends Products {
}
exports.FindOneResponse = FindOneResponse;
;
//# sourceMappingURL=index.js.map