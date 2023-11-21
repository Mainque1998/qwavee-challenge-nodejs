"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Producto_1 = require("./Entity/Producto");
let AppService = exports.AppService = class AppService {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    getAllProductos() {
        return this.productosRepository.find();
    }
    async createProducto(p) {
        const newP = await this.productosRepository.create(p);
        return this.productosRepository.save(newP);
    }
    async updateProducto(id, p) {
        const oldP = await this.productosRepository.findOneBy({ id: id });
        this.productosRepository.merge(oldP, p);
        return this.productosRepository.save(oldP);
    }
    async deleteProducto(id) {
        await this.productosRepository.delete(id);
        return true;
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Producto_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map