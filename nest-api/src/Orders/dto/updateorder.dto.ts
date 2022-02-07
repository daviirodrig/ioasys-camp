import { CreateOrderDto } from './createorder.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
