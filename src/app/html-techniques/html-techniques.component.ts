import { Component, OnInit } from '@angular/core';
import testCases from '../../assets/testcases.json';

@Component({
  selector: 'app-html-techniques',
  templateUrl: './html-techniques.component.html',
  styleUrls: ['./html-techniques.component.css']
})
export class HtmlTechniquesComponent implements OnInit {

  showTableOfContents: boolean;

  htmlTechniques: any;
  techniques: any;

  constructor() {
    this.showTableOfContents = false;
    this.htmlTechniques = testCases['htmlTechniques'];
    this.techniques = Object.keys(testCases['htmlTechniques']['techniques']);
  }

  ngOnInit(): void {
    
  }

}
