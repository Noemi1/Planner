import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

	loading = false;
  @ViewChild('page1', {static: false}) page1!: ElementRef;

  orientacao: "l" | "landscape" | "p" | "portrait" = 'l';
  unit: "pt" | "px" | "in" | "mm" | "cm" | "ex" | "em" | "pc" | undefined = 'pt';
  format: "a4" = 'a4'


  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }
  async exportAsPDF() {
    // this.loading = true;
    let pdf =  new jsPDF(this.orientacao, this.unit, this.format);
    
    pdf.addPage();
    pdf.html(this.page1.nativeElement, {
      callback: (pdf) => {
        this.loading = false
        pdf.save('oi.pdf')
      }
    });




    // pdf.html(this.el.nativeElement, {
    //   callback: (pdf) => {
    //     // pdf.output('datauri');   
    //     // pdf.save('teste.pdf')
    //     // window.open(pdf.output('bloburl', '_self'))
    //     var blob = pdf.output("blob");
    //     var a = URL.createObjectURL(blob)
    //     console.log(blob)
    //     console.log(a)
    //     // window.open(a);
    //     this.loading = false;
    //   }
    // });
 }

}
