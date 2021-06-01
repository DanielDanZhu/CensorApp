import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent {
  @ViewChild('newDocument') newDocument;
  @ViewChild('newPhrase') newPhrase;
  currDoc: string;
  phraseList: String[] = [];

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

    //Temporary list that is added to phraseList after
    let tempList = [];
    let copy = text;
    while (copy.length != 0) {
      //Removes spaces at end
      while (copy.lastIndexOf(" ") == copy.length - 2) {
        copy = copy.slice(0, -1);
      }

      //Case: phrase in quotes/double quotes
      if (copy.indexOf('\'') == 0 || copy.indexOf('"') == 0) {
        let quote = copy.charAt(0);
        copy = copy.slice(1);

        //error: quotes don't close
        if (copy.indexOf(quote) == -1) {
          alert("Invalid input string")
          return
        }
        tempList.push(copy.substring(0, copy.indexOf(quote)))
        copy = copy.substring(copy.indexOf(quote) + 2);
      }
      //Case: singular keyword
      else {
        //Special case for the last word
        if (copy.indexOf(" ") == -1) {
          tempList.push(copy);
          break
        }
        tempList.push(copy.substring(0, Math.min(copy.indexOf(' '))).replace(",", " "));
        copy = copy.substring(copy.indexOf(" ") + 1);
      }
      //Eliminates commas and spaces at the start of the string
      while (copy.indexOf(' ') == 0 || copy.indexOf(',') == 0 ) {
        copy = copy.slice(1, copy.length);
      }
    }

    this.phraseList = this.phraseList.concat(tempList);
  }

  //Clears current phrase list and input
  clearPhrases() {
    this.phraseList = [];
    this.newPhrase.nativeElement.value = '';
  }

}
