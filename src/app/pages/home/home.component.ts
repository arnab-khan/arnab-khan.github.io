import { afterNextRender, Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { BannerComponent } from '../../sub-components/banner/banner.component';
import { DataTransferService } from '../../services/data-transfer.service';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../sub-components/about-me/about-me.component';
import { SkillsComponent } from '../../sub-components/skills/skills.component';
import { ApisService } from '../../services/apis.service';
import { Skill } from '../../interfaces/skills';
import { WorkExperienceComponent } from '../../sub-components/work-experience/work-experience.component';
import { PersonalProjectComponent } from '../../sub-components/personal-project/personal-project.component';
import { PersonalProject } from '../../interfaces/personal-project';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    BannerComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    PersonalProjectComponent
  ],
  providers: [ApisService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataTransferService = inject(DataTransferService);
  apisService = inject(ApisService);

  hostElement: HTMLElement | undefined;
  totalScrollHeight = 0;
  scrollInPersentage = 0;
  headerHeight = 0;
  windowInnerHeight = 0;
  skills: Skill[] = [];
  personalProject: PersonalProject[] = [];

  constructor(elementRef: ElementRef) {
    this.headerHeight = this.dataTransferService.header()?.height || 0;
    this.hostElement = elementRef.nativeElement;
    afterNextRender({
      write: () => { },
      read: () => {
        setTimeout(() => {
          this.getScrollPersentage();
          this.totalScrollHeight = (this.hostElement?.offsetHeight || 0) - this.windowInnerHeight;
        }, 0);
      }
    });
  }
  ngOnInit(): void {
    this.windowInnerHeight = window.innerHeight;
    this.getDataByApi();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.getScrollPersentage();
  }
  getScrollPersentage() {
    this.windowInnerHeight = window.innerHeight;
    const totalScrollHeight = (this.hostElement?.offsetHeight || 0) - this.windowInnerHeight + this.headerHeight;
    const scrollPosition = window.scrollY;
    this.scrollInPersentage = (scrollPosition / totalScrollHeight) * 100;
    console.log('scrollInPersentage', this.scrollInPersentage);
  }

  getDataByApi() {
    const skillApi = this.apisService.getJson<Skill[]>('json/skills');
    const personalProjectApi = this.apisService.getJson<PersonalProject[]>('json/personal-project');
    const mergeApi = forkJoin({
      skillApi: skillApi,
      personalProjectApi: personalProjectApi
    })
    mergeApi.subscribe({
      next: response => {
        console.log('skills', response);
        this.skills = response.skillApi;
        this.personalProject = response.personalProjectApi;
      },
      error: (error: any) => {
        console.error('error', error);
      }
    })
  }
}
