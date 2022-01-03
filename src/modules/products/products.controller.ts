import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
@ApiTags('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get('drafts')
    @ApiOkResponse({ type: ProductEntity, isArray: true })
    async findDrafts() {
        const drafts = await this.productsService.findAll();
        return drafts.map((product) => new ProductEntity(product));
    }

    @Post()
    @ApiCreatedResponse({ type: ProductEntity })
    async create(@Body() createProductDto: CreateProductDto) {
        const product = await this.productsService.create(createProductDto);
        return new ProductEntity(product);
    }

    @Get()
    @ApiOkResponse({ type: ProductEntity, isArray: true })
    async findAll() {
        const products = await this.productsService.findAll();
        return products.map((product) => new ProductEntity(product));
    }

    @Get(':id')
    @ApiOkResponse({ type: ProductEntity })
    async findOne(@Param('id') id: string) {
        const product = await this.productsService.findOne(id);
        return new ProductEntity(product);
    }

    @Patch(':id')
    @ApiCreatedResponse({ type: ProductEntity })
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        const product = await this.productsService.update(id, updateProductDto);
        return new ProductEntity(product);
    }

    @Delete(':id')
    @ApiOkResponse({ type: ProductEntity })
    async remove(@Param('id') id: string) {
        const product = await this.productsService.remove(id);
        return new ProductEntity(product);
    }
}
