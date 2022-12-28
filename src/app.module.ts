import { Module } from '@nestjs/common';
import { arrayBuffer } from 'stream/consumers';
import { BookModule } from './book/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
