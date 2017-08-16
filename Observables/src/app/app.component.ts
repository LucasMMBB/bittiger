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

		let stream = new Observable(observer => {
			console.log('observable execution');
			observer.next(1);
			observer.next(2);
			let timeout = setTimeout(()=>{
				observer.next('observer next value');
			}, 2000);
			observer.next(3);
		
			return function unsubscribe(){
				clearTimeout(timeout);
			}
		});

		let subscription = stream.subscribe(value => {
			console.log(value);
		});

		setTimeout(()=>{
			subscription.unsubscribe();
		}, 1000);
	}// ngOnInit ends

}
