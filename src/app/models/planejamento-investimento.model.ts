import { Investimento } from "./investimento.model";
import { Tributacao } from "./tributacao.model";

export class PlanejamentoInvestimento {
    id: number = 0;
    planejamento_Id: number = 0;
    investimentoTributacao_Id?: number;
    rentabilidade?: number;
    rentabilidadeLiquida?: number;
    montanteAtual?: number;
    sugerido?: number;
    planoAcao?: number;
    investimento: Investimento = new Investimento;
    tributacao: Tributacao = new Tributacao;
}

export class PlanejamentoInvestimentoRequest {
    rentabilidade: number = 0;
    montanteAtual: number = 0;
    investimento: Investimento = new Investimento;
    tributacao: Tributacao = new Tributacao;
}