import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JobListComponent } from './job-list/job-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [JobListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [JobListComponent],
})
export class AppModule {}
