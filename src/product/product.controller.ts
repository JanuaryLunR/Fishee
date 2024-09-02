import { Body, Param, UseGuards } from '@nestjs/common/decorators';
import { Controller, Get, Query, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { FindOneResponse, GetBestsellersResponse, GetByNameRequest, GetByNameResponse, GetNewResponse, PaginateAndFilterResponse, SearchRequest, SearchResponse } from './types';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @ApiOkResponse({ type: PaginateAndFilterResponse })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get()
  paginateAndFilter(@Query() query) {
    return this.productService.paginateAndFilter(query);
  }

  @ApiOkResponse({ type: FindOneResponse })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get('find/:id')
  getById(@Param('id') id: number) {
    return this.productService.findById(id);
  }

  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get('search') //Post????????
  search(@Body() { search }: { search: string }) {
    return this.productService.searchByString(search);
  }

  @ApiOkResponse({ type: GetByNameResponse })
  @ApiBody({ type: GetByNameRequest })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get('name')
  getByName(@Body() { name }: { name: string }) {
    return this.productService.findByName(name);
  }

  @ApiOkResponse({ type: GetBestsellersResponse })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get('bestsellers')
  getBestseller() {
    return this.productService.bestsellers();
  }

  @ApiOkResponse({ type: GetNewResponse })
  @UseGuards(AuthenticatedGuard) //Only authenticated users
  @Get('new')
  getNew() {
    return this.productService.new();
  }
}
