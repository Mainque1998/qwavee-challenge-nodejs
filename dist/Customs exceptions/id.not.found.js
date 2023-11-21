"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNotFound = void 0;
const common_1 = require("@nestjs/common");
class IdNotFound extends common_1.HttpException {
    constructor(id) {
        super('El producto de identificador ' + id + ' no existe.', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.IdNotFound = IdNotFound;
//# sourceMappingURL=id.not.found.js.map