import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// create observables from UI events
 	  const btn = document.querySelector('#btnn');
	  const btnStream$ = Observable.fromEvent(btn, 'click');
	  const input = document.querySelector('input');
	  const inputStream$ = Observable.fromEvent(input, 'keyup');

	  btnStream$.subscribe(
		  e => console.log(e),
		  err => console.error(err),
		  () => console.log('complete')
	  );

	  inputStream$.subscribe(
	  	  (e:any) => console.log(e.target.value)
	  	);
  }

}
