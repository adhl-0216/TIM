import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JobListComponent } from './job-list/job-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, JobListComponent, SignUpComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [SignInComponent, JobListComponent, SignUpComponent],
})
export class AppModule {

}
