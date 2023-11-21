import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Producto } from './Entity/Producto';

@Controller('productos')
export class AppController {
  constructor(private appService: AppService) {}
  

  @Get()
  findAll() {
    return this.appService.getAllProductos()
  }

  @Post()
  create(@Body() p: Producto) {
    return this.appService.createProducto(p);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() p: Producto) {
    return this.appService.updateProducto(id, p);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.appService.deleteProducto(id);
  }
}
