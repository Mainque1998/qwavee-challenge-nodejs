import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDTO } from './DTO/Producto.DTO';

@Controller('productos')
export class AppController {
  constructor(private appService: AppService) {}
  

  @Get()
  findAll() {
    return this.appService.getAllProductos()
  }

  @Post()
  create(@Body() dto: ProductoDTO) {
    return this.appService.createProducto(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: ProductoDTO) {
    return this.appService.updateProducto(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteProducto(id);
  }
}
