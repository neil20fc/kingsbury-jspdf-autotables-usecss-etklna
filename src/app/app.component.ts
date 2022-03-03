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
    this.doc.fromHTML(document.getElementById('title').innerHTML);
    //this.doc.fromHTML(document.getElementById("table42"), 15, 40);
    this.doc.autoTable({
      html: '#table42',
      startY: 40,
      theme: 'grid',

      useCss: true,
      columnStyles: {
        0: { cellWidth: 'auto' },
        1: { cellWidth: 30 },
      },
    });

    this.doc.autoTable({
      html: '#tableDatos',
      useCss: true,
      startY: this.doc.lastAutoTable.finalY + 10,
    });
  }
}
