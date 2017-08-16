import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	
	ngOnInit(): void {
		let promise = new Promise(resolve => {
			console.log('promise execution');
			setTimeout(()=>{
				resolve('promise resolved');
			}, 2000);
		});

		promise.then(value => {
			console.log(value);
		});


		let stream$ = new Observable(function subscribe(observer){
			console.log('observable execution!!');
			observer.next(1);
			observer.next(2);
			let timeout = setTimeout(()=>{
				observer.next('observer next value!');
			}, 1000);
			observer.next(3);

			return function unsubscribe(){
				clearTimeout(timeout);
			}
		});

		let observer = {
			// observer is an object
			next: value => console.log(value),
			error: err => console.error(err),
			complete:() => console.log('completed!')
		}

		let subscription = stream$.subscribe(observer);
		setTimeout(()=>{
			subscription.unsubscribe();
		}, 500);
	}// ngOnInit ends

}
