import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { CreateOrderDto } from './dto/createorder.dto';
import { UpdateOrderDto } from './dto/updateorder.dto';
import { Order } from './Entity/order.entity';

@Injectable()
export class OrdersService {
  private database: Order[] = [];

  create(createOrderDto: CreateOrderDto) {
    const newOrder: Order = {
      id: uuidV4(),
      ...createOrderDto,
    };

    this.database.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.database;
  }

  findOne(id: string) {
    return this.database.find((item) => item.id === id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    const index = this.database.findIndex((item) => item.id === id);
    const item = this.database[index];

    const updatedOrder = {
      ...item,
      ...updateOrderDto,
    };

    this.database[index] = updatedOrder;
    return updatedOrder;
  }

  remove(id: string) {
    const newOrders = this.database.filter((item) => item.id != id);

    this.database = newOrders;
    return newOrders;
  }
}
