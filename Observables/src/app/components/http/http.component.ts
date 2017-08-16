import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit():void {
  	this.getUser('LucasMMBB')
  		.subscribe(
  				e => console.log(e)
  			);
  }

  getUser(username){
  	return this.http.get('https://api.github.com/users/' + username);
  }

}
