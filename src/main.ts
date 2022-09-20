import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { Schema } from 'mongoose';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
class AppModule {}

export const TrainingInformationSchema = new Schema({
  coach: { type: Schema.Types.ObjectId, ref: 'PersonModel' },
});

export const PersonSchema = new Schema({
  training: TrainingInformationSchema,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
