import { Repository } from 'typeorm';
import { Producto } from './Entity/Producto';
export declare class AppService {
    private productosRepository;
    constructor(productosRepository: Repository<Producto>);
    getAllProductos(): Promise<Producto[]>;
    getAllFirstNProductos(n: number): Promise<Producto[]>;
    getAllLastNProductos(n: number): Promise<Producto[]>;
    getAllProductosWithMinPrecio(n: number): Promise<Producto[]>;
    getAllProductosWithMaxPrecio(n: number): Promise<Producto[]>;
    getAllProductosThatContains(s: string): Promise<Producto[]>;
    createProducto(p: Producto): Promise<Producto>;
    updateProducto(id: number, p: Producto): Promise<Producto>;
    deleteProducto(id: number): Promise<boolean>;
}
