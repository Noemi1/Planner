export class Produto {
    id: number = 0;
    empresa_Id: number = 0;
    tipoAtivo_Id: number = 0;
    tipoRisco_Id: number = 0;
    tipoLiquidez_Id: number = 0;
    taxaADM: number = 0;
    taxaPfee: number = 0;
    cm?: boolean;
    descricao: string = '';
}

export var produtos: Produto[] = [
    { id: 1, empresa_Id: 1, tipoAtivo_Id: 1, tipoRisco_Id: 1, tipoLiquidez_Id: 1, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Reserva de Emergência' },
    { id: 2, empresa_Id: 1, tipoAtivo_Id: 1, tipoRisco_Id: 2, tipoLiquidez_Id: 4, taxaADM: 2.00000000, taxaPfee: 20.00000000, cm: true, descricao: 'C.A. Conservador' },
    { id: 3, empresa_Id: 1, tipoAtivo_Id: 2, tipoRisco_Id: 3, tipoLiquidez_Id: 3, taxaADM: 2.00000000, taxaPfee: 20.00000000, cm: true, descricao: 'C.A. Moderado' },
    { id: 4, empresa_Id: 1, tipoAtivo_Id: 2, tipoRisco_Id: 4, tipoLiquidez_Id: 4, taxaADM: 2.00000000, taxaPfee: 20.00000000, cm: true, descricao: 'C.A. Arrojado' },
    { id: 7, empresa_Id: 1, tipoAtivo_Id: 1, tipoRisco_Id: 5, tipoLiquidez_Id: 2, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Mesa Proprietária (You Capital)' },
    { id: 8, empresa_Id: 1, tipoAtivo_Id: 2, tipoRisco_Id: 3, tipoLiquidez_Id: 5, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Private Equity Imobiliário' },
    { id: 10, empresa_Id: 1, tipoAtivo_Id: 1, tipoRisco_Id: 3, tipoLiquidez_Id: 2, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Private Equity Gado' },
    { id: 11, empresa_Id: 1, tipoAtivo_Id: 1, tipoRisco_Id: 3, tipoLiquidez_Id: 2, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Private Equity Usina Solar' },
    { id: 14, empresa_Id: 1, tipoAtivo_Id: 3, tipoRisco_Id: 3, tipoLiquidez_Id: 2, taxaADM: 0.00000000, taxaPfee: 0.00000000, cm: false, descricao: 'Previdência em Dólar' },
];