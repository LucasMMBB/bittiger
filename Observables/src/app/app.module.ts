import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ObservableComponent } from './components/observable/observable.component';
import { InstanceComponent } from './components/src/app/components/instance/instance.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ObservableComponent,
    InstanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
