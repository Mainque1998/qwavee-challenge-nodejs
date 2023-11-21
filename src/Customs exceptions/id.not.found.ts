import { HttpException, HttpStatus } from "@nestjs/common";

export class IdNotFound extends HttpException {
    constructor(id: number) {
      super('El producto de identificador '+id+' no existe.', HttpStatus.NOT_FOUND);
    }
}