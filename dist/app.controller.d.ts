import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): number[];
    create(body: any): any;
    update(id: number, body: any): any;
    delete(id: number): boolean;
}
