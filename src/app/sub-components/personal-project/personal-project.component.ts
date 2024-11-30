import { Component, Input } from '@angular/core';
import { PersonalProject } from '../../interfaces/personal-project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-project',
  imports: [CommonModule],
  templateUrl: './personal-project.component.html',
  styleUrl: './personal-project.component.scss'
})
export class PersonalProjectComponent {

  @Input() personalProject: PersonalProject[] = [];

}
