import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Prisma } from '@prisma/client';
import { ConnectionArgsDto } from 'src/shared/page/connection.args.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    findDrafts() {
        return this.prisma.product.findMany({ where: { published: false } });
    }

    findPage(connectionArgs: ConnectionArgsDto) {
        const where: Prisma.ProductWhereInput = { published: true };

        return findManyCursorConnection(
            (args) => {
                return this.prisma.product.findMany({ ...args, where });
            },
            () => this.prisma.product.count({ where }),
            connectionArgs,
            {
                recordToEdge: (record) => ({
                    node: new ProductEntity(record),
                }),
            }
        );
    }

    create(createProductDto: CreateProductDto) {
        return this.prisma.product.create({ data: createProductDto });
    }

    findAll() {
        return this.prisma.product.findMany({ where: { published: true } });
    }

    findOne(id: string) {
        return this.prisma.product.findUnique({ where: { id } });
    }

    update(id: string, updateProductDto: UpdateProductDto) {
        return this.prisma.product.update({
            where: { id },
            data: updateProductDto,
        });
    }

    remove(id: string) {
        return this.prisma.product.delete({ where: { id } });
    }
}
