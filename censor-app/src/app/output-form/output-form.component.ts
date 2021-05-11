import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  generate() {
    this.output = this.currDoc;
    for (let phrase of this.phraseList) {
      this.output = this.output.replace(phrase, "XXXX")
    }
  }

}
