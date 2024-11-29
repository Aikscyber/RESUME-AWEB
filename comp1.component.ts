import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  objective: string = 'I aim to apply my technical knowledge and problem-solving skills to contribute to innovative technology solutions. I aim to deepen my understanding of web development while gaining practical experience through collaborative projects. I aim to leverage my passion for technology to create efficient and scalable solutions.';
  
  education: string = 'Education';
  elementary: string = 'ELEMENTARY';
  highschool: string = 'HIGHSCHOOL';
  seniorhighschool: string = 'SENIOR HIGH SCHOOL';
  college: string = 'COLLEGE';
  
  skills: string = 'Skills';
  tSkills: string = 'Technical Skills';
  sSkills: string = 'Soft Skills';
}
