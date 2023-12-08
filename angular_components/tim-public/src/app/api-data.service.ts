import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Job } from './job-list/job-list.component';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  private apiBaseUrl: string = 'https://tim-2k4a.onrender.com/api';

  public getJobs(): Promise<Job[]> {
    const url: string = this.apiBaseUrl + '/jobs';

    return this.http
      .get(url)
      .toPromise()
      .then((res) => res as Job[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
