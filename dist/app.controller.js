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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const Producto_DTO_1 = require("./DTO/Producto.DTO");
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    findAll() {
        return this.appService.getAllProductos();
    }
    findAllFirstN(n) {
        return this.appService.getAllFirstNProductos(n);
    }
    findAllLastN(n) {
        return this.appService.getAllLastNProductos(n);
    }
    findAllWithMinPrecio(n) {
        return this.appService.getAllProductosWithMinPrecio(n);
    }
    findAllWithMaxPrecio(n) {
        return this.appService.getAllProductosWithMaxPrecio(n);
    }
    findAllThatContains(s) {
        return this.appService.getAllProductosThatContains(s);
    }
    create(dto) {
        return this.appService.createProducto(dto);
    }
    update(id, dto) {
        return this.appService.updateProducto(id, dto);
    }
    delete(id) {
        return this.appService.deleteProducto(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('primeros/:n'),
    __param(0, (0, common_1.Param)('n', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllFirstN", null);
__decorate([
    (0, common_1.Get)('ultimos/:n'),
    __param(0, (0, common_1.Param)('n', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllLastN", null);
__decorate([
    (0, common_1.Get)('mayor/:n'),
    __param(0, (0, common_1.Param)('n', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllWithMinPrecio", null);
__decorate([
    (0, common_1.Get)('menor/:n'),
    __param(0, (0, common_1.Param)('n', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllWithMaxPrecio", null);
__decorate([
    (0, common_1.Get)('contiene/:s'),
    __param(0, (0, common_1.Param)('s')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllThatContains", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Producto_DTO_1.ProductoDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Producto_DTO_1.ProductoDTO]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "delete", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('productos'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map