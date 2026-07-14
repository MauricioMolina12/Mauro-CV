import { Injectable } from '@angular/core';
import { Project, ProjectType } from '../models/project.model';
import { PROJECTS } from '../data/projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  /** Todos los proyectos. */
  getAll(): Project[] {
    return PROJECTS;
  }

  getByType(type: ProjectType | string): Project[] {
    return PROJECTS.filter((project) => project.type === type);
  }

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
  }

  getStories(): Project[] {
    return PROJECTS.filter((project) => !!project.story);
  }

  getAdjacent(slug: string): { prev?: Project; next?: Project } {
    const stories = this.getStories();
    const index = stories.findIndex((project) => project.slug === slug);
    if (index === -1) return {};
    return {
      prev: index > 0 ? stories[index - 1] : undefined,
      next: index < stories.length - 1 ? stories[index + 1] : undefined,
    };
  }
}
