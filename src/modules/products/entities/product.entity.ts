import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Product, Prisma } from '@prisma/client';

export class ProductEntity implements Product {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional({ nullable: true })
    description: string;

    @ApiProperty({ type: String })
    price: Prisma.Decimal;

    @ApiProperty()
    sku: string;

    @ApiPropertyOptional({ default: false })
    published: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
