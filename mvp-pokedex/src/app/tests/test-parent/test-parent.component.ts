import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
  
  myName: string = "Helo";
  randomNumber: number = 0;

  generateId(a, b) {
    var result = Math.floor(Math.random() * (b - a + 1)) + a;
    this.randomNumber = result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
