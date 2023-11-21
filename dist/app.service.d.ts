import { Repository } from 'typeorm';
import { Producto } from './Entity/Producto';
export declare class AppService {
    private productosRepository;
    constructor(productosRepository: Repository<Producto>);
    getAllProductos(): Promise<Producto[]>;
    createProducto(p: Producto): Promise<Producto>;
    updateProducto(id: number, p: Producto): Promise<Producto>;
    deleteProducto(id: number): Promise<boolean>;
}
