import { Produto } from "./produto.model";
import { Tributacao } from "./tributacao.model";

export class PlanejamentoProduto {
    id: number = 0;
    planejamento_Id: number = 0;
    produtoTributacao_Id?: number;
    rentabilidade?: number;
    rentabilidadeLiquida?: number;
    montanteAtual?: number;
    sugerido?: number;
    planoAcao?: number;
    produto: Produto = new Produto;
    tributacao: Tributacao = new Tributacao;
}

export class PlanejamentoProdutoRequest {
    rentabilidade: number = '' as unknown as number;
    montanteAtual: number = '' as unknown as number;
    produto: Produto = new Produto;
    tributacao: Tributacao = new Tributacao;
}