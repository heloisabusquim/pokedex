import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  @Input() myName: string;
  @Input() randomNumber: number;
  @Input() generateId(a: number, b: number){
    return this.randomNumber;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
