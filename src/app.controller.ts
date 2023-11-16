import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('productos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return [0,0,0];
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return true;
  }
}
