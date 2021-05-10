import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './output-form.component.html',
  styleUrls: ['./output-form.component.css']
})
export class OutputFormComponent implements OnInit {
  //Inherited variables from parent (document-form)
  @Input() currDoc: string;
  @Input() phraseList: String[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  generate() {

  }

}
