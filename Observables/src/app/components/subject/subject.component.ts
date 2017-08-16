import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx'; //multicast observable

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	console.log('here is subject component');
  	let subject = new Subject();// one subject

  	// first observer
  	subject.subscribe(
  			value => console.log('observerA' + value),
  			err => console.log(err),
  			() => console.log('subject complete!')
  		);
  	// second observer
  	subject.subscribe(
  			value => console.log('observerB' + value),
  			err => console.log(err),
  			() => console.log('subject complete!')
  		);
  	subject.next(1);
  	subject.next(2);

  	// third subject
  	subject.subscribe(
   			value => console.log('observerC' + value),
  			err => console.log(err),
  			() => console.log('subject complete!')
  		);
  	subject.next(3);

  	// observable is unicast
  	let observable = new Observable(observer => {
  		observer.next(1);
  		observer.next(2);
  	});

  	observable.subscribe(
  			v => console.log('obAnew ' + v)
  		);
  	observable.subscribe(
  			v => console.log('obBnew ' + v)
  		);
  	// obAnew1, obAnew2, obBnew1, obBnew2
  }// ngOnInit ends

}
