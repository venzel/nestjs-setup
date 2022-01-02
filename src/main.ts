import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

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
