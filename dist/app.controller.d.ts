import { AppService } from './app.service';
import { ProductoDTO } from './DTO/Producto.DTO';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    findAll(): Promise<import("./Entity/Producto").Producto[]>;
    create(dto: ProductoDTO): Promise<import("./Entity/Producto").Producto>;
    update(id: number, dto: ProductoDTO): Promise<import("./Entity/Producto").Producto>;
    delete(id: number): Promise<boolean>;
}
