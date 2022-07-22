export class Tributacao {
    id: number = 0;
    nome: string = '';
    aliquota: number = 0;
}

export var tributacao: Tributacao[] = [
    { id: 1, aliquota: 22.50000000, nome: 'Até 180 dias' },
    { id: 2, aliquota: 20.00000000, nome: 'De 181 a 360 dias' },
    { id: 3, aliquota: 17.50000000, nome: 'De 361 a 720 dias' },
    { id: 4, aliquota: 15.00000000, nome: 'Acima de 720 dias' },
    { id: 5, aliquota: 20.00000000, nome: 'Day Trade' },
    { id: 6, aliquota: 15.00000000, nome: 'Position/Swing Trade' },
    { id: 7, aliquota: 20.00000000, nome: 'Venda de Cotas' },
    { id: 8, aliquota: 0.00000000, nome: 'Dividendos' },
    { id: 9, aliquota: 35.00000000, nome: 'VGBL até 2 anos' },
    { id: 10, aliquota: 30.00000000, nome: 'VGBL de 2 a 4 anos' },
    { id: 11, aliquota: 25.00000000, nome: 'VGBL de 4 a 6 anos' },
    { id: 12, aliquota: 20.00000000, nome: 'VGBL de 6 a 8 anos' },
    { id: 13, aliquota: 15.00000000, nome: 'VGBL de 8 a 10 anos' },
    { id: 14, aliquota: 10.00000000, nome: 'VGBL 10  anos ou mais' },
    { id: 15, aliquota: 0.00000000, nome: 'VGBL Prog. Saque de até R$ 2.141,98' },
    { id: 16, aliquota: 7.50000000, nome: 'VGBL Prog. Saque de R$ 2.141,99 até R$ 3.179,98' },
    { id: 17, aliquota: 15.00000000, nome: 'VGBL Prog. Saque de R$ 3.179,99 até R$ 4.219,93' },
    { id: 18, aliquota: 22.50000000, nome: 'VGBL Prog. Saque de 4.219,94 até R$ 5.247,77' },
    { id: 19, aliquota: 27.50000000, nome: 'VGBL Prog. Saque acima de R$ 5.247,77' },
    { id: 20, aliquota: 35.00000000, nome: 'PGBL até 2 anos' },
    { id: 21, aliquota: 30.00000000, nome: 'PGBL de 2 a 4 anos' },
    { id: 22, aliquota: 25.00000000, nome: 'PGBL de 4 a 6 anos' },
    { id: 23, aliquota: 20.00000000, nome: 'PGBL de 6 a 8 anos' },
    { id: 24, aliquota: 15.00000000, nome: 'PGBL de 8 a 10 anos' },
    { id: 25, aliquota: 10.00000000, nome: 'PGBL 10  anos ou mais' },
    { id: 26, aliquota: 0.00000000, nome: 'PGBL Prog. Saque de até R$ 2.141,98' },
    { id: 27, aliquota: 7.50000000, nome: 'PGBL Prog. Saque de R$ 2.141,99 até R$ 3.179,98' },
    { id: 28, aliquota: 15.00000000, nome: 'PGBL Prog. Saque de R$ 3.179,99 até R$ 4.219,93' },
    { id: 29, aliquota: 22.50000000, nome: 'PGBL Prog. Saque de 4.219,94 até R$ 5.247,77' },
    { id: 30, aliquota: 27.50000000, nome: 'PGBL Prog. Saque acima de R$ 5.247,77' },
    { id: 31, aliquota: 0.00000000, nome: 'Até R$1.903,98 mensal' },
    { id: 32, aliquota: 7.50000000, nome: 'De R$1.903,99 até R$2.826,65 mensal' },
    { id: 33, aliquota: 15.00000000, nome: 'De R$2.826,66 até R$3.751,05 mensal' },
    { id: 34, aliquota: 22.50000000, nome: 'De R$3.751,06 até R$4.664,68 mensal' },
    { id: 35, aliquota: 27.50000000, nome: 'Acima de R$4.664,68 mensal' },
    { id: 36, aliquota: 0.00000000, nome: 'Isento PF' },
];