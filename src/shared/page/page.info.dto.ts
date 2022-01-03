import { ApiProperty } from '@nestjs/swagger';

export class PageInfo {
    @ApiProperty()
    hasNextPage: boolean;

    @ApiProperty()
    hasPreviusPage: boolean;

    @ApiProperty()
    startCursor: string;

    @ApiProperty()
    endCursor: string;
}
