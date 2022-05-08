import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngcontent';

  @ViewChild('parpar') parpar!: ElementRef;

  public onContentChange() {
    this.parpar.nativeElement.textContent = '123232';
  }

}
