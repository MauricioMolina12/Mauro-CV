import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  
  name: string = '';

  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe((params)=>{
      this.name = params.get('slug') || '';
      console.log(this.name);
      
    })
  }
}
