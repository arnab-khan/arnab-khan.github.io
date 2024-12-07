import { afterNextRender, Component, effect, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { BannerComponent } from '../../sub-components/banner/banner.component';
import { DataTransferService } from '../../services/data-transfer.service';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../sub-components/about-me/about-me.component';
import { SkillsComponent } from '../../sub-components/skills/skills.component';
import { ApisService } from '../../services/apis.service';
import { Skill } from '../../interfaces/skill';
import { WorkExperienceComponent } from '../../sub-components/work-experience/work-experience.component';
import { PersonalProject } from '../../interfaces/personal-project';
import { forkJoin } from 'rxjs';
import { PersonalProjectComponent } from '../../sub-components/personal-project/personal-project.component';

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

  @ViewChild('scrollAnimationWrapper') scrollAnimationWrapper!: ElementRef;

  dataTransferService = inject(DataTransferService);
  apisService = inject(ApisService);

  scrollAnimationWrapperElement: HTMLElement | undefined;
  totalScrollHeight = 0;
  scrollInPersentage = 0;
  headerHeight = 0;
  windowInnerHeight = 0;
  skills: Skill[] = [];
  personalProject: PersonalProject[] = [];

  constructor() {
    effect(() => {
      this.headerHeight = this.dataTransferService.header()?.height || 0;
    })

    afterNextRender({
      write: () => { },
      read: () => {
        setTimeout(() => {
          this.scrollAnimationWrapperElement = this.scrollAnimationWrapper.nativeElement;
          this.getScrollPersentage();
          this.totalScrollHeight = (this.scrollAnimationWrapperElement?.offsetHeight || 0) - this.windowInnerHeight;
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
    const totalScrollHeight = (this.scrollAnimationWrapperElement?.offsetHeight || 0) - this.windowInnerHeight + this.headerHeight;
    const scrollPosition = window.scrollY;
    this.scrollInPersentage = (scrollPosition / totalScrollHeight) * 100;
    // console.log('scrollInPersentage', this.scrollInPersentage);
  }

  @HostListener('window:resize', [])
  onResize() {
    this.windowInnerHeight = window.innerHeight;
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
        // console.log('home data', response);
        this.skills = response.skillApi;
        this.personalProject = response.personalProjectApi;
        setTimeout(() => {
          this.windowInnerHeight = window.innerHeight;
        }, 0);
      },
      error: error => {
        console.error('error', error);
      }
    })
  }
}
