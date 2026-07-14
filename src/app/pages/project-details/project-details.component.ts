import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Project } from '../../core/models/project.model';
import { ProjectsService } from '../../core/services/projects.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  /** Recibido desde la ruta /project/:slug vía withComponentInputBinding(). */
  @Input() slug = '';

  project?: Project;
  prev?: Project;
  next?: Project;

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.project = this.projectsService.getBySlug(this.slug);

    if (!this.project?.story) {
      this.router.navigate(['/']);
      return;
    }

    const adjacent = this.projectsService.getAdjacent(this.slug);
    this.prev = adjacent.prev;
    this.next = adjacent.next;

    this.setSeo(this.project);
  }

  private setSeo(project: Project): void {
    this.title.setTitle(`${project.title} · Mauricio Molina`);
    this.meta.updateTag({
      name: 'description',
      content: project.description,
    });
  }
}
