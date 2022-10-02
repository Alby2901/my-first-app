import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() countState: string;
  @Input() count: number;
  @ContentChild('paragraphOdd', { static: true }) paragrapho: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
