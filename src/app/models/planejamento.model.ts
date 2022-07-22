export class Planejamento {
    id: number = 0;
    cliente_Id: number = 0;
    usuario_Id: number = 0;
    data: Date = new Date;
    taxaSelic?: number;
    taxaIPCA?: number;
    cm?: boolean;
    descricao: string = '';
}