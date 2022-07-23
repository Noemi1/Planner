export class Planejamento {
    id: number = 0;
    cliente_Id: number = 0;
    usuario_Id: number = 0;
    data: Date  = '' as unknown as Date;
    taxaSelic: number = '' as unknown as number;
    taxaIPCA: number = '' as unknown as number;
    cm: boolean = false;
    descricao: string = '';
}