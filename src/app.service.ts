import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './Entity/Producto';
import { IdNotFound } from './Customs exceptions/id.not.found';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ){}
  
  getAllProductos()
  {
    return this.productosRepository.find();
  }

  async createProducto(p: Producto)
  {
    if(p.nombre == null || p.precio == null || p.descripcion == null)
      throw new HttpException('Para añadir un producto los campos de nombre, precio y descripcion no pueden estar vacíos.',
      HttpStatus.BAD_REQUEST);
    const newP = await this.productosRepository.create(p)
    return this.productosRepository.save(newP);
  }

  async updateProducto(id: number, p: Producto)
  {
    const oldP = await this.productosRepository.findOneBy({id: id});
    if(oldP == null)
      throw new IdNotFound(id);
    if(p.id != null)
      throw new HttpException('No se puede actualizar el id de un producto.', HttpStatus.BAD_REQUEST);
    this.productosRepository.merge(oldP, p)
    return this.productosRepository.save(oldP);
  }

  async deleteProducto(id: number)
  {
    if(await this.productosRepository.findOneBy({id: id}) == null)
      throw new IdNotFound(id);
    await this.productosRepository.delete(id);
    return true;
  }
}
