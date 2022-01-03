import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import { AppModule } from './modules/app.module';
import { winstonConfig } from './configs/winston.config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';

async function bootstrap() {
    const logger = WinstonModule.createLogger(winstonConfig);

    const app = await NestFactory.create(AppModule, { logger });

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        })
    );

    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    const { httpAdapter } = app.get(HttpAdapterHost);

    app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

    const config = new DocumentBuilder()
        .setTitle('NestJs setup')
        .setDescription('Building a REST API with NestJS and Prisma')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, { customSiteTitle: 'NestJs setup with prisma' });

    await app.listen(3000);
}
bootstrap();
