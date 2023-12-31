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
const id_not_found_1 = require("./Customs exceptions/id.not.found");
let AppService = exports.AppService = class AppService {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    getAllProductos() {
        return this.productosRepository.find();
    }
    getAllFirstNProductos(n) {
        return this.productosRepository.find({ order: { nombre: "ASC" }, take: n });
    }
    async getAllLastNProductos(n) {
        const last = await this.productosRepository.count() - n;
        return this.productosRepository.find({ order: { nombre: "ASC" }, skip: last });
    }
    getAllProductosWithMinPrecio(n) {
        return this.productosRepository.findBy({ precio: (0, typeorm_2.LessThan)(n) });
    }
    getAllProductosWithMaxPrecio(n) {
        return this.productosRepository.findBy({ precio: (0, typeorm_2.MoreThan)(n) });
    }
    getAllProductosThatContains(s) {
        return this.productosRepository.findBy([
            { nombre: (0, typeorm_2.Like)("%" + s + "%") },
            { descripcion: (0, typeorm_2.Like)("%" + s + "%") }
        ]);
    }
    async createProducto(p) {
        const newP = await this.productosRepository.create(p);
        return this.productosRepository.save(newP);
    }
    async updateProducto(id, p) {
        const oldP = await this.productosRepository.findOneBy({ id: id });
        if (oldP == null)
            throw new id_not_found_1.IdNotFound(id);
        this.productosRepository.merge(oldP, p);
        return this.productosRepository.save(oldP);
    }
    async deleteProducto(id) {
        if (await this.productosRepository.findOneBy({ id: id }) == null)
            throw new id_not_found_1.IdNotFound(id);
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