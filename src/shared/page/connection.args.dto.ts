import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class ConnectionArgsDto {
    @IsOptional()
    @IsNumber()
    @ApiPropertyOptional()
    first: number;

    @IsOptional()
    @IsNumber()
    @ApiPropertyOptional()
    last: number;

    @ApiPropertyOptional()
    after: string;

    @ApiPropertyOptional()
    before: string;
}
