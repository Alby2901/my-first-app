import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-counts',
  templateUrl: './list-counts.component.html',
  styleUrls: ['./list-counts.component.css']
})
export class ListCountsComponent implements OnInit {
  @Input() count1: number;
  @Input() countState1: string;

  constructor() { }

  ngOnInit(): void {
  }

}
