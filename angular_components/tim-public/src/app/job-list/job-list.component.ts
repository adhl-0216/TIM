import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

export class Job {
  _id!: string;
  title!: string;
  address!: string;
  description!: string;
  hourlyRate!: Number;
  weeklyHours!: Number;
  schedule!: string[];
  tags!: string[];
  dateCreated!: Date;
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  providers: [ApiDataService]
})
export class JobListComponent implements OnInit {
  constructor(private apiDataService: ApiDataService) {}
  header = 'All Jobs';
  jobs: Job[] = [];

  private getJobs(): void {
    this.apiDataService.getJobs().then((data) => {
      this.jobs = data;
    });
  }

  ngOnInit(): void {
    this.getJobs();
  }
}
