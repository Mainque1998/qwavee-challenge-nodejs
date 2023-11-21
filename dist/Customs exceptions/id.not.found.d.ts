import { HttpException } from "@nestjs/common";
export declare class IdNotFound extends HttpException {
    constructor(id: number);
}
