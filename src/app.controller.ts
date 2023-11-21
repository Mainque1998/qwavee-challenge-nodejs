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
  
  @Get('primeros/:n')
  findAllFirstN(@Param('n', ParseIntPipe) n: number) {
    return this.appService.getAllFirstNProductos(n)
  }
  
  @Get('ultimos/:n')
  findAllLastN(@Param('n', ParseIntPipe) n: number) {
    return this.appService.getAllLastNProductos(n)
  }

  @Get('mayor/:n')
  findAllWithMinPrecio(@Param('n', ParseIntPipe) n: number) {
    return this.appService.getAllProductosWithMinPrecio(n)
  }

  @Get('menor/:n')
  findAllWithMaxPrecio(@Param('n', ParseIntPipe) n: number) {
    return this.appService.getAllProductosWithMaxPrecio(n)
  }

  @Get('contiene/:s')
  findAllThatContains(@Param('s') s: string) {
    return this.appService.getAllProductosThatContains(s)
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
