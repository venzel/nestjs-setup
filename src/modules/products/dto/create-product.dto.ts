import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    description?: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    sku: string;

    @ApiPropertyOptional()
    published?: boolean;
}
