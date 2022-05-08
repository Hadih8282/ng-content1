import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  
 
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  @ContentChild('parpar', { static:true }) parpar!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.parpar.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ' + this.parpar.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: ' + this.parpar.nativeElement.textContent);
  }
}
