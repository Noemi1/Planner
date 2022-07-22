export class Investimento {
    id: number = 0;
    tipoAtivo_Id: number = 0;
    tipoRisco_Id: number = 0;
    tipoLiquidez_Id: number = 0;
    descricao: string = '';
}

export let investimentos: Investimento[] = [
    { id: 1, tipoAtivo_Id: 1, tipoLiquidez_Id: 1, tipoRisco_Id: 1, descricao: 'Poupança' },
    { id: 2, tipoAtivo_Id: 1, tipoLiquidez_Id: 1, tipoRisco_Id: 1, descricao: 'Tesouro' },
    { id: 3, tipoAtivo_Id: 1, tipoLiquidez_Id: 1, tipoRisco_Id: 1, descricao: 'RF (CDB/LCI/LCA)' },
    { id: 4, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 3, descricao: 'Previdência (VGBL)' },
    { id: 5, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 3, descricao: 'Debêntures/COE' },
    { id: 6, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 2, descricao: 'Fundo RF' },
    { id: 7, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 4, descricao: 'FII' },
    { id: 8, tipoAtivo_Id: 2, tipoLiquidez_Id: 3, tipoRisco_Id: 4, descricao: 'FIM/FIC e afins' },
    { id: 9, tipoAtivo_Id: 2, tipoLiquidez_Id: 4, tipoRisco_Id: 4, descricao: 'FIA' },
    { id: 10, tipoAtivo_Id: 2, tipoLiquidez_Id: 4, tipoRisco_Id: 4, descricao: 'Ações' },
    { id: 11, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 5, descricao: 'Imóveis (Aluguel)' },
    { id: 12, tipoAtivo_Id: 3, tipoLiquidez_Id: 6, tipoRisco_Id: 4, descricao: 'Dólar/Ouro' },
    { id: 13, tipoAtivo_Id: 2, tipoLiquidez_Id: 5, tipoRisco_Id: 1, descricao: 'Criptoativos' },
    { id: 14, tipoAtivo_Id: 2, tipoLiquidez_Id: 5, tipoRisco_Id: 2, descricao: 'Outros' },
    { id: 15, tipoAtivo_Id: 1, tipoLiquidez_Id: 2, tipoRisco_Id: 3, descricao: 'Previdência (PGBL)' },
];

