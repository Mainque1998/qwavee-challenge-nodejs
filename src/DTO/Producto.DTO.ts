import { IsInt, IsString, IsNotEmpty, Min, IsNumber} from 'class-validator';

export class ProductoDTO {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsString()
  descripcion: string;
}