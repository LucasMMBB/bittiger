import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	const nums:number[] = [1,2,3,4];
  	const nums$ = Observable.from(nums);
  	nums$.subscribe(
  			e => console.log("current number is " + e)	
  		);
  }

}
