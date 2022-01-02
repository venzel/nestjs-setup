import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from '../configs/winston.config';
import { LoggerInterceptor } from '../shared/interceptors/logger.interceptor';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';

@Module({
    imports: [WinstonModule.forRoot(winstonConfig), WinstonModule.forRoot(winstonConfig), PrismaModule, ProductsModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggerInterceptor,
        },
    ],
})
export class AppModule {}
