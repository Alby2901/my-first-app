import { AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() { 
    console.log('Contructor Called!')
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChange Called!');
  console.log(changes);
}

  ngOnInit(): void {
    console.log('ngOnInit Called!')
    console.log('Text content1: ' + this.header.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Called!')    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called!')     
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked Called!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called!')
    console.log('Text content2: ' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterViewChecked Called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called!')     
  }


}
