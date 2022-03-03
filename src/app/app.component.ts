import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('title', { static: false }) title: ElementRef;
  @ViewChild('pdfViewerAutoLoad', { static: true }) pdfViewerAutoLoad;

  doc = new jsPDF();

  ngOnInit() {
    this.createDoc();
    let res = this.doc.output('dataurlstring');
    document.getElementById('ivebeenframed').src = res;
  }

  downloadPDF() {
    this.doc.output('datauri', 'test.pdf');
  }

  createDoc() {
    //this.doc.fromHTML(document.getElementById('title').innerHTML);
    //this.doc.fromHTML(document.getElementById("table42"), 15, 40);

    this.doc.autoTable({
      html: '#tableTitle',
      useCss: true,
      startY: 10 + 10,
      theme: 'plain',
      didDrawCell: function(data) {
        if (data.column.index === 1 && data.cell.section === 'body') {
          
           var td = data.cell.raw;
           var img = td.getElementsByTagName('img')[0];
           var dim = data.cell.height - data.cell.padding('vertical');
           var textPos = data.cell.textPos;
           this.doc.addImage(img.src, textPos.x,  textPos.y, dim, dim);
        }
      }
    });

    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });

    this.doc.autoTable({
      html: '#tableDetencion',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });

    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });

    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
  }
}
