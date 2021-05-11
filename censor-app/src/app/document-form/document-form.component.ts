import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {
  @ViewChild('newDocument') newDocument;
  @ViewChild('newPhrase') newPhrase;
  currDoc: string;
  phraseList: String[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  //Updates document and clears document text input
  getDocument(text: string) {
    this.currDoc = text;
    this.newDocument.nativeElement.value = '';
  }

  //Clears document and clears document text input
  clearDocument() {
    this.currDoc = '';
    this.newDocument.nativeElement.value = '';
  }

  parsePhrase(text: string) {
    //Clears phrase text input
    this.newPhrase.nativeElement.value = '';

    let copy = text;
    while (copy.length != 0) {
      //Case: phrase in quotes/double quotes
      if (copy.indexOf('\'') == 0 || copy.indexOf('"') == 0) {
        let quote = copy.charAt(0);
        copy = copy.slice(1);
        this.phraseList.push(copy.substring(0, copy.indexOf(quote)))
        copy = copy.substring(copy.indexOf(quote)+1);
      }
      //Case: singular keyword
      else {
        //Special case for the last word
        if (copy.indexOf(" ") == -1) {
          this.phraseList.push(copy);
          break
        }
        this.phraseList.push(copy.substring(0, Math.min(copy.indexOf(' '))).replace(",", " "));
        copy = copy.substring(copy.indexOf(" ") + 1);
      }
      //Eliminates commas and spaces at the start of the string
      while (copy.charAt(0) == ' ' || copy.charAt(0) == ',') {
        copy = copy.slice(1);
      }
    }
  }

  clearPhrases() {
    this.phraseList = [];
    this.newPhrase.nativeElement.value = '';
  }

}
