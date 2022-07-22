import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Injectable({
    providedIn: 'root'
})
export class PDFService {




    constructor(
        private router: Router
    ) { }

}
