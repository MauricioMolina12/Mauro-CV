import { Project, Tech } from '../models/project.model';

/** Catálogo de tecnologías reutilizable (icono + nombre legible). */
export const TECHS: Record<string, Tech> = {
  next: { icon: 'assets/tech/next.svg', name: 'Next.js' },
  sanity: { icon: 'assets/tech/sanity.svg', name: 'Sanity' },
  angular: { icon: 'assets/tech/angular.svg', name: 'Angular' },
  ionic: { icon: 'assets/tech/ionic.svg', name: 'Ionic' },
  nodejs: { icon: 'assets/tech/nodejs.svg', name: 'Node.js' },
  html5: { icon: 'assets/tech/html5.svg', name: 'HTML5' },
  css3: { icon: 'assets/tech/css3.svg', name: 'CSS3' },
  javascript: { icon: 'assets/tech/javascript.svg', name: 'JavaScript' },
  vue: { icon: 'assets/tech/vue.svg', name: 'Vue' },
  flutter: { icon: 'assets/tech/flutter.svg', name: 'Flutter' },
  figma: { icon: 'assets/tech/figma.svg', name: 'Figma' },
  typescript: { icon: 'assets/tech/typescript.svg', name: 'TypeScript' },
  rxjs: { icon: 'assets/tech/rxjs.svg', name: 'RxJS' },
  ngrx: { icon: 'assets/tech/ngrx.svg', name: 'NgRx' },
  sass: { icon: 'assets/tech/sass.svg', name: 'SCSS' },
  git: { icon: 'assets/tech/git.svg', name: 'Git' },
  graphql: { icon: 'assets/tech/graphql.svg', name: 'GraphQL' },
  aws: { icon: 'assets/tech/aws.svg', name: 'AWS' },
};

export const PROJECTS: Project[] = [
  {
    title: 'Holnex',
    slug: 'holnex',
    type: 'web',
    devMode: true,
    description: 'Mi propia plataforma de e-commerce, construida desde cero con Angular y pensada como un ecosistema modular. Incluye un servicio de autenticación independiente que centraliza el acceso a toda la plataforma, con foco en escalabilidad, arquitectura limpia y buenas prácticas.',
    image: 'assets/projects/holnex/mockup.webp',
    demo: 'https://holnex.com',
    repo: 'https://github.com/MauricioMolina12/holnex',
    techs: [TECHS['angular']],
    story: {
      year: '2026',
      role: 'Fundador · Desarrollador Frontend · Diseñador UI/UX',
      client: 'Proyecto propio',
      cover: 'assets/projects/holnex/mockup.webp',
      context: 'Holnex nace como un proyecto personal con una visión de largo plazo: construir mi propia plataforma de e-commerce, no como un ejercicio puntual, sino como un producto real capaz de crecer y sostener nuevos servicios con el tiempo. Es un espacio donde aplico, con total libertad y rigor, las decisiones técnicas y de arquitectura que considero correctas.',
      challenge: 'El principal reto no era mostrar productos en una pantalla, sino diseñar una base sólida y escalable desde el primer día. La autenticación es una responsabilidad transversal a todo el ecosistema, así que necesitaba resolverla de una forma que no acoplara el e-commerce a un único módulo y que permitiera, en el futuro, sumar nuevas aplicaciones bajo el mismo sistema de acceso.',
      solution: 'Tomé la decisión deliberada de separar la plataforma en proyectos independientes. Por un lado, el core del e-commerce (catálogo, detalle de producto, carrito). Por otro, un servicio de autenticación aparte (Holnex Auth) que centraliza el acceso a todo el ecosistema Holnex. Esta modularización desacopla responsabilidades, permite desplegar y evolucionar cada parte por separado, y prepara el terreno para escalar hacia una arquitectura de múltiples aplicaciones que comparten identidad. Cada pieza está desarrollada con Angular, cuidando la estructura del proyecto, la reutilización de componentes y la consistencia de la interfaz.',
      features: [
        'Landing con animación de lanzamiento mientras la plataforma sale a la luz.',
        'Catálogo y vista de detalle de producto con una interfaz cuidada.',
        'Carrito de compras como parte del flujo del e-commerce.',
        'Servicio de autenticación independiente (Holnex Auth) para todo el ecosistema.',
        'Arquitectura modular y desacoplada, pensada para escalar a nuevas aplicaciones.',
      ],
      gallery: [
        'assets/projects/holnex/product-detail.webp',
        'assets/projects/holnex/product-detail-2.webp',
        'assets/projects/holnex/shopcart.webp',
        'assets/projects/holnex/auth.webp',
      ],
      links: [
        {
          label: 'Holnex · Sitio',
          url: 'https://holnex.com',
          kind: 'primary',
        },
        {
          label: 'Holnex · Código',
          url: 'https://github.com/MauricioMolina12/holnex',
          kind: 'ghost',
        },
        {
          label: 'Auth · Demo',
          url: 'https://devauth.holnex.com',
          kind: 'ghost',
        },
        {
          label: 'Auth · Código',
          url: 'https://github.com/MauricioMolina12/holnex-auth',
          kind: 'ghost',
        },
      ],
    },
  },
  {
    title: 'Star Grow Studio',
    slug: 'star-grow-studio',
    type: 'web',
    description:
      'Diseño y desarrollo de un sitio web corporativo para una empresa de desarrollo de software, diseño y asesoría empresarial, con un enfoque en transmitir profesionalismo, destacar sus servicios y fortalecer su presencia digital.',
    image: 'assets/projects/stargrowstudio/stargrowstudio.webp',
    demo: 'https://stargrowstudio.com',
    techs: [TECHS['next'], TECHS['sanity']],
    story: {
      year: '2025',
      role: 'Frontend Developer & UI Designer',
      client: 'Star Grow Studio',
      cover: 'assets/projects/stargrowstudio/stargrowstudio.webp',
      context:
        'Star Grow Studio es una empresa de desarrollo de software, diseño y asesoría empresarial fundada con el objetivo de impulsar la transformación digital de otras organizaciones. Durante sus primeros meses no contaba con una presencia digital que reflejara su propuesta de valor ni permitiera generar oportunidades comerciales.',

      challenge:
        'El reto consistía en desarrollar un sitio web moderno, optimizado para buscadores y con la flexibilidad suficiente para que el equipo de marketing pudiera administrar el contenido sin depender del área de desarrollo, permitiendo además escalar la estrategia de contenido a largo plazo.',

      solution:
        'Diseñé y desarrollé el sitio web utilizando Next.js, priorizando el rendimiento, la accesibilidad y el SEO. Integré Sanity como CMS headless para ofrecer una interfaz intuitiva de gestión de contenido y desarrollé un blog orientado a fortalecer la estrategia de posicionamiento orgánico, facilitando la publicación de contenido por parte del equipo de marketing sin necesidad de realizar cambios en el código.',

      features: [
        'Desarrollo del sitio web corporativo con Next.js.',
        'Integración de Sanity CMS para la gestión autónoma de contenido.',
        'Implementación de un blog optimizado para SEO.',
        'Arquitectura escalable para la incorporación de nuevas secciones y servicios.',
        'Diseño responsive con enfoque en rendimiento y experiencia de usuario.',
      ],
      gallery: [
        'assets/projects/stargrowstudio/contact_form.webp',
        'assets/projects/stargrowstudio/section.webp',
      ],
      results: [
        'Presencia digital alineada con el posicionamiento premium de la marca.',
        'Autonomía total del cliente para actualizar contenidos.',
        'Base técnica escalable para futuras secciones y campañas.',
      ],
    },
  },
  {
    title: 'Opera',
    slug: 'opera-website',
    type: 'web',
    description:
      'Desarrollo integral de identidad digital para una empresa multiservicios, incluyendo branding, diseño de propuesta comercial y desarrollo de un sitio web corporativo moderno y orientado a la captación de clientes.',
    image: 'assets/projects/opera/opera.webp',
    demo: 'https://operasas.com',
    techs: [TECHS['next']],
    story: {
      year: '2026',
      role: 'Frontend Developer & UI Designer',
      client: 'OPERA SAS',
      cover: 'assets/projects/opera/opera.webp',
      context:
        'OPERA S.A.S. es una empresa multiservicios que necesitaba construir una identidad de marca sólida y una presencia digital capaz de transmitir profesionalismo, confianza y la diversidad de sus servicios. El proyecto abarcó desde la definición de la marca hasta el desarrollo de su ecosistema digital.',

      challenge:
        'El desafío consistía en crear una identidad visual coherente que diferenciara a la empresa en el mercado, desarrollar una propuesta comercial alineada con esa identidad y construir un sitio web que comunicara eficazmente sus servicios y fortaleciera su posicionamiento frente a clientes potenciales.',

      solution:
        'Diseñé la identidad de marca de OPERA, incluyendo la creación del logotipo, la paleta de colores, la tipografía y los lineamientos visuales. Posteriormente desarrollé una propuesta comercial con una comunicación alineada a la nueva identidad y diseñé e implementé un sitio web corporativo moderno, responsive y enfocado en ofrecer una experiencia de usuario clara, reforzar la credibilidad de la empresa y potenciar su presencia digital.',

      features: [
        'Diseño de identidad de marca (logotipo, paleta de colores, tipografía y lineamientos visuales).',
        'Diseño de propuesta comercial corporativa.',
        'Diseño UI/UX y desarrollo del sitio web corporativo.',
        'Arquitectura de contenido orientada a la presentación de servicios.',
        'Diseño responsive optimizado para escritorio y dispositivos móviles.',
      ],

      gallery: [
        'assets/projects/opera/services.webp',
        'assets/projects/opera/table.webp',
        'assets/projects/opera/logo.webp',
        'assets/projects/opera/mockup.webp',
      ],

      results: [
        'Construcción de una identidad de marca consistente en todos los canales.',
        'Material comercial alineado con la imagen corporativa.',
        'Presencia digital profesional para fortalecer la captación de clientes.',
      ],
    },
  },
  
  {
    title: 'Edutin Business',
    slug: 'edutin-business',
    type: 'web',
    description:
      'Plataforma corporativa de capacitación empresarial desarrollada con microfrontends en Angular, integrando autenticación centralizada, catálogo de cursos, gestión de grupos y reportes analíticos sobre AWS.',
    image: 'assets/projects/edutin_b/edutin_b.webp',
    techs: [
      TECHS['angular'],
      TECHS['typescript'],
      TECHS['rxjs'],
      TECHS['ngrx'],
      TECHS['sass'],
      TECHS['aws'],
      TECHS['git'],
    ],
    demo: 'https://business.edutin.com',
    ownership: 'professional',
    story: {
      year: '2025 — 2026',
      role: 'Frontend Developer',
      client: 'Edutin Academy',
      cover: 'assets/projects/edutin_b/edutin_b.webp',
      context:
        'Edutin Academy es una plataforma educativa con miles de estudiantes activos. Como parte de su evolución, la compañía identificó la necesidad de una solución independiente para el segmento corporativo: un producto que permitiera a empresas e instituciones gestionar programas de capacitación para sus equipos. El proyecto comenzó como un MVP y, durante mi participación, creció hasta convertirse en un módulo de producto con arquitectura propia dentro del ecosistema de Edutin.',
      challenge:
        'El reto técnico principal era construir una plataforma empresarial desde cero sobre una base que ya operaba con alta disponibilidad. Necesitábamos convivir con el ecosistema existente sin comprometer su estabilidad, manteniendo la autonomía del nuevo producto. Además, la plataforma requería un sistema de autenticación robusto, consumo de datos a través de GraphQL, una interfaz responsiva para distintos perfiles de usuario (administradores, instructores, estudiantes) y la capacidad de integrar reportes analíticos en tiempo real.',
      solution:
        'Implementé la solución utilizando Angular con una arquitectura de microfrontends basada en Module Federation, lo que permitió que Edutin Business evolucionara como un módulo independiente pero conectado al shell principal de Edutin. Diseñé y desarrollé los módulos de catálogo de cursos, gestión de usuarios y grupos, sistema de roles y permisos, reportes analíticos con visualización de datos desde GraphQL y una interfaz responsiva adaptada a los flujos corporativos. La autenticación se integró con AWS Cognito, el almacenamiento multimedia con S3, y la capa de datos se consumió desde AWS AppSync. Para el estado global de la aplicación utilicé NgRx, garantizando consistencia en los flujos de datos entre microfrontends.',
      features: [
        'Microfrontends con Module Federation para convivir con el shell principal de Edutin.',
        'Catálogo de cursos corporativos con búsqueda, filtros y asignación masiva.',
        'Gestión de usuarios, grupos empresariales y roles con permisos granularizados.',
        'Sistema de autenticación y autorización integrado con AWS Cognito.',
        'Consumo de datos en tiempo real mediante GraphQL y AWS AppSync.',
        'Dashboard analítico con visualización de progreso, completitud y rendimiento.',
        'Almacenamiento y distribución de contenido multimedia con AWS S3 + CloudFront.',
        'Estado global centralizado con NgRx para consistencia entre microfrontends.',
        'Interfaz responsiva diseñada para escritorio y tablet en entornos corporativos.',
        'Componentes reutilizables con Angular CDK como base del Design System interno.',
      ],
      gallery: [
        'assets/projects/edutin_b/edutin_b.webp',
        'assets/projects/edutin_b/catalog.webp',
        'assets/projects/edutin_b/groups.webp',
        'assets/projects/edutin_b/users.webp',
        'assets/projects/edutin_b/reports.webp',
      ],
      results: [
        'Arquitectura modular que permitió al equipo escalar el producto sin reescribir el shell principal.',
        'Reducción del tiempo de carga inicial gracias a lazy loading y estrategias de caché en GraphQL.',
        'Autenticación unificada entre Edutin Academy y Edutin Business mediante AWS Cognito.',
        'Componentes reutilizables adoptados por otros equipos como base del Design System interno.',
        'Interfaz responsiva validada con administradores corporativos en sesiones de testing.',
      ],
    },
  },
  {
    title: 'Edutin Affiliate',
    slug: 'edutin-affiliate',
    type: 'web',
    description:
      'Sistema de afiliación para Edutin Academy que permite a usuarios promocionar cursos, gestionar comisiones y acceder a métricas de rendimiento en tiempo real mediante una arquitectura Angular con microfrontends.',
    image: 'assets/projects/edutin_a/edutin_a.webp',
    techs: [
      TECHS['angular'],
      TECHS['typescript'],
      TECHS['rxjs'],
      TECHS['ngrx'],
      TECHS['sass'],
      TECHS['aws'],
      TECHS['git'],
    ],
    demo: 'https://affiliate.edutin.com',
    ownership: 'professional',
    story: {
      year: '2025 — 2026',
      role: 'Frontend Developer',
      client: 'Edutin Academy',
      cover: 'assets/projects/edutin_a/edutin_a.webp',
      context:
        'Edutin Academy necesitaba un canal de crecimiento orientado a afiliados: personas que promocionan cursos a cambio de comisiones por cada inscripción generada. El producto exigía una plataforma autónoma con panel de control, estadísticas en tiempo real y gestión de pagos, todo integrado al ecosistema principal de Edutin sin afectar su operación. Me incorporé al equipo para desarrollar los módulos core del frontend desde las primeras etapas del proyecto.',
      challenge:
        'El principal desafío era construir una experiencia de dashboard rica en datos, que incluyera gráficas interactivas, filtros dinámicos, búsqueda optimizada y actualización en tiempo real de métricas de comisiones, manteniendo un rendimiento fluido incluso con volúmenes crecientes de datos. Además, la plataforma debía compartir la identidad visual y el sistema de autenticación de Edutin Academy, pero operar como un microfrontend independiente con su propio ciclo de despliegue y mantenimiento.',
      solution:
        'Desarrollé la plataforma con Angular, implementando microfrontends mediante Module Federation para mantener la independencia del módulo de afiliados dentro del shell de Edutin. Diseñé y programé los módulos de dashboard ejecutivo con gráficas de rendimiento, sistema de búsqueda y filtros con debounce y caché local, gestión de comisiones con historial y desglose por periodo, panel de analytics con métricas de clics, conversiones e ingresos, y un sistema de rutas con lazy loading para optimizar la carga inicial. El estado global se manejó con NgRx, garantizando predictibilidad en los flujos de datos, y el consumo de APIs se realizó mediante GraphQL con AWS AppSync, implementando estrategias de caché y normalización para minimizar las consultas repetitivas.',
      features: [
        'Dashboard ejecutivo con gráficas de rendimiento, conversiones e ingresos en tiempo real.',
        'Sistema de búsqueda y filtros con debounce, paginación y caché local para listados de gran volumen.',
        'Gestión de comisiones con historial completo, desglose por periodo y exportación de datos.',
        'Panel de analytics con métricas de clics, conversiones, ingresos generados y TOP cursos.',
        'Microfrontend independiente con Module Federation, lazy loading y despliegue autónomo.',
        'Navegación con Angular Router, lazy loading de módulos y precarga estratégica.',
        'Estado global centralizado con NgRx para consistencia entre microfrontends.',
        'Componentes reutilizables de tabla, gráfica, tarjeta de métrica y formulario de filtros.',
        'Autenticación integrada con AWS Cognito compartiendo sesión con el shell principal.',
        'Optimización de rendimiento con ChangeDetectionStrategy OnPush y trackBy en listados.',
      ],
      gallery: [
        'assets/projects/edutin_a/edutin_a.webp',
        'assets/projects/edutin_a/metrics.webp',
        'assets/projects/edutin_a/request.webp',
        'assets/projects/edutin_a/resources.webp',
      ],
      results: [
        'Plataforma autónoma de afiliados operando como microfrontend sin afectar el shell principal de Edutin.',
        'Dashboard con tiempos de carga reducidos gracias a lazy loading, caché GraphQL y ChangeDetection OnPush.',
        'Componentes reutilizables (tablas, gráficas, tarjetas de métrica) que aceleraron el desarrollo de nuevos features.',
        'Autenticación unificada con AWS Cognito que permitió a los afiliados usar su cuenta existente de Edutin.',
        'Arquitectura preparada para escalar horizontalmente con nuevos módulos sin reestructurar el código base.',
      ],
    },
  },
  // {
  //   title: 'App Edutin Academy',
  //   slug: 'app-edutin-academy',
  //   type: 'mobile',
  //   description:
  //     'Aplicación móvil de Edutin Academy desarrollada con Angular e Ionic. Trabajé en interfaces intuitivas y responsivas, alineadas con la experiencia web de la plataforma.',
  //   image: 'assets/projects/appedutin.webp',
  //   demo: 'https://play.google.com/store/apps/details?id=com.edutin.app&hl=es_CO',
  //   techs: [TECHS['ionic']],
  // },
  {
    title: 'Mercadatos',
    slug: 'mercadatos',
    type: 'web',
    description:
      'Desarrollo de un sitio web corporativo durante mi etapa de prácticas profesionales, enfocado en fortalecer la presencia digital de la empresa. El proyecto incluyó el diseño y desarrollo de una plataforma moderna, optimizada para presentar sus servicios, mejorar la experiencia de navegación y proyectar una imagen profesional de la marca.',
    image: 'assets/projects/mercadatos.webp',
    repo: 'https://github.com/MauricioMolina12/mercadatos',
    techs: [TECHS['angular']],
    demo: 'https://mercadatos.vercel.app/'
  },
  {
    title: 'Renta GO',
    slug: 'renta-go',
    type: 'web',
    description:
      'Proyecto universitario: sistema de renta de autos donde cada vehículo cuenta con sus propias características y disponibilidad.',
    image: 'assets/projects/rentago.webp',
    repo: 'https://github.com/Samue2408/Reserva_Vehiculos',
    techs: [TECHS['angular'], TECHS['nodejs']],
  },
  {
    title: 'Unilibre',
    slug: 'unilibre',
    type: 'web',
    description:
      'Plataforma universitaria para la gestión de las actividades de los profesores, con control de tareas, horarios y responsabilidades.',
    image: 'assets/projects/unilibre.webp',
    repo: 'https://github.com/MauricioMolina12/ClassroomProject',
    techs: [TECHS['html5'], TECHS['css3'], TECHS['javascript']],
  },
  {
    title: 'Software método simplex',
    slug: 'pl-software',
    type: 'web',
    description:
      'Software que implementa el método simplex para resolver problemas de programación lineal, mostrando paso a paso la solución óptima.',
    image: 'assets/projects/PL-software.webp',
    repo: 'https://github.com/MauricioMolina12/metodo-simplex',
    techs: [TECHS['vue']],
  },
  // {
  //   title: 'My Security',
  //   slug: 'my-security',
  //   type: 'mobile',
  //   description:
  //     'App móvil para mejorar la seguridad en Barranquilla, con alertas en tiempo real y seguimiento de ubicación para proteger a los usuarios.',
  //   image: 'assets/projects/mysecurity.jpg',
  //   repo: 'https://github.com/Blaskevorsz/FPD-Jhoan',
  //   techs: [TECHS['flutter']],
  // },
  // {
  //   title: 'M&M Cake Shop',
  //   slug: 'mm-cake-shop',
  //   type: 'design',
  //   description: 'Diseño UI/UX de una tienda de repostería, creado en Figma.',
  //   image: 'assets/projects/m&m.webp',
  //   techs: [TECHS['figma']],
  // },
  // {
  //   title: 'Vehicle care',
  //   slug: 'vehicle-care',
  //   type: 'design',
  //   description:
  //     'Concepto de app para el cuidado y mantenimiento de vehículos, diseñado en Figma.',
  //   image: 'assets/projects/vehicleCare.webp',
  //   techs: [TECHS['figma']],
  // },
  // {
  //   title: 'Food app',
  //   slug: 'food-app',
  //   type: 'design',
  //   description:
  //     'Diseño de una app de comida a domicilio, prototipado en Figma.',
  //   image: 'assets/projects/food.webp',
  //   techs: [TECHS['figma']],
  // },
];
