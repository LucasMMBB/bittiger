import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ObservableComponent } from './components/observable/observable.component';
import { InstanceComponent } from './components/instance/instance.component';
import { ArraysComponent } from './components/arrays/arrays.component';
import { HttpComponent } from './components/http/http.component';
import { OperatorComponent } from './components/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ObservableComponent,
    InstanceComponent,
    ArraysComponent,
    HttpComponent,
    OperatorComponent
  ],
  imports: [
	  BrowserModule,
	  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
