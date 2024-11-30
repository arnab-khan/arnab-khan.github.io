import { Component, inject, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { PersonalProject } from '../../interfaces/personal-project';
import { PersonalProjectComponent } from '../../sub-components/personal-project/personal-project.component';

@Component({
  selector: 'app-work',
  imports: [PersonalProjectComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent implements OnInit {

  apisService = inject(ApisService);
  personalProject: PersonalProject[] = [];

  ngOnInit(): void {
    this.getPersonalProject();
  }

  getPersonalProject() {
    const personalProjectApi = this.apisService.getJson<PersonalProject[]>('json/personal-project');
    personalProjectApi.subscribe({
      next: response => {
        // console.log('personal-project', response);
        this.personalProject = response;
      },
      error: error => {
        console.error('error', error);
      }
    });
  }
}
