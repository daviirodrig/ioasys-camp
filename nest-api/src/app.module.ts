import { Module } from '@nestjs/common';
import { OrdersModule } from './Orders/orders.module';

@Module({
  imports: [OrdersModule],
})
export class AppModule {}
