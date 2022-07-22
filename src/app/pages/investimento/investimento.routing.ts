import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarLinhaInvestimentoComponent } from './adicionar-linha-investimento/adicionar-linha-investimento.component';
import { AdicionarLinhaProdutoComponent } from './adicionar-linha-produto/adicionar-linha-produto.component';
import { DeleteLinhaInvestimentoComponent } from './delete-linha-investimento/delete-linha-investimento.component';
import { DeleteLinhaProdutoComponent } from './delete-linha-produto/delete-linha-produto.component';
import { InvestimentoComponent } from './investimento.component';
import { RelatorioPreviewComponent } from './relatorio-preview/relatorio-preview.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  {
    path: '', component: InvestimentoComponent, children: [
      { path: 'adicionar-produto', component: AdicionarLinhaProdutoComponent },
      { path: 'remover-produto/:id', component: DeleteLinhaProdutoComponent },
      { path: 'adicionar-investimento', component: AdicionarLinhaInvestimentoComponent },
      { path: 'remover-investimento/:id', component: DeleteLinhaInvestimentoComponent },
    ]
  },
  {
    path: 'relatorio', component: RelatorioComponent, children: [
      { path: ':blob', component: RelatorioPreviewComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestimentoRoutingModule { }
