import { Component, Input } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-child',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent {
  //Inherited variables from parent (document-form)
  @Input() currDoc: string;
  @Input() phraseList: string[] = [];
  output: string;
  outputGenerated: boolean;

  //Handles actual replacement
  generate() {
    //err: no currDoc
    if (this.currDoc == null) {
      alert("No document submitted")
      return
    }
    this.output = this.currDoc;

    //handles case insensitve replacement
    for (let phrase of this.phraseList) {
      var reg = new RegExp(phrase.trim(), 'gi');
      this.output = this.output.replace(reg, "XXXX")
    }
    //shows download button
    this.outputGenerated = true;
  }

  //Allows users to download as .txt
  download() {
    var data = new Blob([this.output], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(data, 'output.txt');
  }

}
