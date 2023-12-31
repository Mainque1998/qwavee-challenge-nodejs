import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, MoreThan, LessThan, Repository } from 'typeorm';
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

  getAllFirstNProductos(n: number)
  {
    return this.productosRepository.find({order: { nombre: "ASC" }, take: n});
  }

  async getAllLastNProductos(n: number)
  {
    const last = await this.productosRepository.count() - n;
    return this.productosRepository.find({order: { nombre: "ASC" }, skip: last});
  }

  getAllProductosWithMinPrecio(n: number)
  {
    return this.productosRepository.findBy({precio: LessThan(n)});
  }

  getAllProductosWithMaxPrecio(n: number)
  {
    return this.productosRepository.findBy({precio: MoreThan(n)});
  }

  getAllProductosThatContains(s: string)
  {
    return this.productosRepository.findBy([
      { nombre: Like ("%"+s+"%") },
      { descripcion: Like ("%"+s+"%") }
    ]);
  }

  async createProducto(p: Producto)
  {
    const newP = await this.productosRepository.create(p)
    return this.productosRepository.save(newP);
  }

  async updateProducto(id: number, p: Producto)
  {
    const oldP = await this.productosRepository.findOneBy({id: id});
    if(oldP == null)
      throw new IdNotFound(id);
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
