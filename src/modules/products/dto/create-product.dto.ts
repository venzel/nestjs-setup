import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MaxLength, Min, MinLength } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsOptional()
    @MaxLength(150)
    @MinLength(5)
    @ApiPropertyOptional()
    description?: string;

    @Min(1.0)
    @ApiProperty()
    price: number;

    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty()
    sku: string;

    @IsOptional()
    @ApiPropertyOptional()
    published?: boolean;
}
