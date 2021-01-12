import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import * as ngrok from 'ngrok';

async function bootstrap() {
  (global as any).WebSocket = require('ws');
  (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  const app = await NestFactory.create(AppModule);

  
  app.setGlobalPrefix('Multichain-Midgard');
  const options = new DocumentBuilder().setTitle('Multichain Midgard REST Api').setDescription('Thor Chain Multichain Midgard API').setVersion('1.0.0').build();
  const  document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('app',app,document);
  app.useGlobalPipes(new ValidationPipe());


  const url =  await ngrok.connect(3001);
  console.log(url);

  await app.listen(3001);
}
bootstrap();
