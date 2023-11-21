import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './Entity/Producto';

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
    const newP = await this.productosRepository.create(p)
    return this.productosRepository.save(newP);
  }

  async updateProducto(id: number, p: Producto)
  {
    const oldP = await this.productosRepository.findOneBy({id: id});
    this.productosRepository.merge(oldP, p)
    return this.productosRepository.save(oldP);
  }

  async deleteProducto(id: number)
  {
    await this.productosRepository.delete(id);
    return true;
  }
}
