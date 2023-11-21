import { AppService } from './app.service';
import { Producto } from './Entity/Producto';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    findAll(): Promise<Producto[]>;
    create(p: Producto): Promise<Producto>;
    update(id: number, p: Producto): Promise<Producto>;
    delete(id: number): Promise<boolean>;
}
