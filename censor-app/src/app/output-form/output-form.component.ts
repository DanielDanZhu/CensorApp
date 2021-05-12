import { Component, OnInit, Input } from '@angular/core';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-child',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent implements OnInit {
  //Inherited variables from parent (document-form)
  @Input() currDoc: string;
  @Input() phraseList: string[] = [];
  output: string;
  outputGenerated: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  //Handles actual replacement
  generate() {
    if (this.currDoc == null) {
      alert("No document submitted")
      return
    }
    this.output = this.currDoc;
    for (let phrase of this.phraseList) {
      var reg = new RegExp(phrase, 'ig');
      this.output = this.output.replace(reg, "XXXX")
    }
    this.outputGenerated = true;
  }

  download() {
    var data = new Blob([this.output], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(data, 'output.txt');
  }

}
