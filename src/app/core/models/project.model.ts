export type ProjectType = 'web' | 'mobile' | 'design';

export interface Tech {
  icon: string;
  name: string;
}

/** Enlace del proyecto (sitio, repo, módulo...). Permite mostrar
 *  varios enlaces cuando un proyecto tiene más de un módulo/repositorio. */
export interface ProjectLink {
  label: string;
  url: string;
  /** 'primary' = botón sólido, 'ghost' = botón contorneado. */
  kind?: 'primary' | 'ghost';
}

/**
 * Narrativa del caso: solo los proyectos que tienen `story`
 * cuentan con vista de detalle. El resto (p. ej. diseños sueltos)
 * viven únicamente como card en el portafolio.
 */
export interface ProjectStory {
  year: string;
  role: string;
  client?: string;
  /** Imagen grande para el encabezado del detalle. */
  cover: string;
  /** El punto de partida. */
  context: string;
  /** El reto a resolver. */
  challenge: string;
  /** La solución / enfoque aplicado. */
  solution: string;
  /** Qué se construyó, en viñetas. */
  features: string[];
  /** Capturas del proceso o resultado. */
  gallery: string[];
  /** Impacto, métricas o aprendizajes (opcional). */
  results?: string[];
  /** Enlaces del hero. Si se define, reemplaza a demo/repo en el detalle
   *  (útil para proyectos con varios módulos/repositorios). */
  links?: ProjectLink[];
}

export interface Project {
  title: string;
  slug: string;
  type: ProjectType;
  /** Resumen corto para la card. */
  description: string;
  /** Imagen de portada de la card. */
  image: string;
  techs: Tech[];
  demo?: string;
  repo?: string;
  /** Si existe, la card enlaza a la vista de detalle. */
  story?: ProjectStory;
  devMode?: boolean;
}
