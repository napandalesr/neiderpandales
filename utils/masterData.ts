export const calculateAge = (birthDate: Date = new Date(1996, 0, 2)): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const currentAge = calculateAge();

export const masterDataES: masterData = {
  nav: [
    {
      title: 'Sobre mí',
      icon: '/icons/user-bold.png',
      alt: 'tarjeta-icon',
      navbar: 'about',
    },
    {
      title: 'Resumen',
      icon: '/icons/list-bold.png',
      alt: 'list-bold',
      navbar: 'resume',
    },
    {
      title: 'Skills',
      icon: '/icons/code-file-broken.png',
      alt: 'code-file-broken',
      navbar: 'skill',
    },
    {
      title: 'Librerias',
      icon: '/icons/lib.png',
      alt: 'library',
      navbar: 'library',
    },
    {
      title: 'Contacto',
      icon: '/icons/incoming-call.png',
      alt: 'incoming-call',
      navbar: 'contact',
    }
  ],
  about: {
    title: 'Sobre mí',
    text: `Soy Ingeniero de Sistemas con más de 6 años de experiencia en el desarrollo de aplicaciones web y móviles. Con un sólido conocimiento en javascript 
        y algunos frameworks modernos, así como en la gestión de bases de datos, me destaco por mi capacidad para diseñar, 
        implementar y mantener soluciones tecnológicas eficientes y escalables. Además de mis habilidades técnicas, poseo una fuerte capacidad 
        trabajo en equipo y resolución de problemas. Apasionado por enseñar programación a principiantes y estudiantes, disfruto compartir mi 
        conocimiento y ver el crecimiento de otros profesionales. Soy proactivo, adaptable y comprometido con la mejora continua y la innovación tecnológica, 
        buscando siempre nuevas oportunidades para aprender y contribuir en proyectos desafiantes.`,
    info: [
      `Edad: ${currentAge}`,
      'Ciudad: Cali, Valle del cauca',
      'Dirección: Cra 2b #65a - 11',
      'Hobbies: Fútbol, Ajedrez'
    ]
  },
  recommendations: [
    {
      name: 'Lennin Ibarra - Ingeniero de Software',
      img: '/images/opinions/lenin.jpg',
      text: `Neider se caracteriza por ser un gran profesional con conocimientos sólidos y gran experticia para el 
       web, tuve la oportunidad de trabajar mas de dos años con él y en este periodo aprendí mucho ya que es una persona con 
       habilidades para explicar y con el gusto por enseñar y como persona cuenta con altos valores, lo recomiendo para cualquier 
       equipo de trabajo al cual le aportara con su conocimiento y liderazgo.`,
      link: 'https://www.linkedin.com/in/lennin-geovanny-ibarra/'
    },
    {
      name: 'William Arias - Analista de pruebas',
      img: '/images/opinions/william.jpg',
      text: `Neider trabajó recientemente en un proyecto como desarrollador, donde demostró ser un excelente profesional y una 
      persona admirable. Se integró bien al equipo, mostrando una actitud positiva y disposición inmejorable. Fue proactivo en 
      resolver problemas y buscar mejoras, y su habilidad para colaborar y comunicarse eficientemente fue clave para el éxito del 
      proyecto. Se recomienda sin reservas para cualquier posición o proyecto, ya que su profesionalismo y actitud serían valiosos 
      para cualquier equipo.`,
      link: 'https://www.linkedin.com/in/william-andr%C3%A9s-arias-cardona-6152861b6/'
    },
    {
      name: 'Jorge Rengifo - Estratega',
      img: '/images/opinions/jorge.jpg',
      text: `Es un profesional dedicado y comprometido con el cumplimiento de objetivos trazados para su cargo. Es consiente de los 
      cronogramas previstos dentro de los procesos creados y posee una actitud positiva frente a cada evaluación.`,
      link: 'https://www.linkedin.com/in/jorge-ivan-rengifo-duran/'
    }
  ],
  resume: {
    education: {
      title: 'Educación',
      institute: 'Unipacifico',
      degree: 'Ingeniero de sistemas',
      description: `En esta institución he adquirido conocimientos muy importantes, como es el análisis de sistemas y procesos, cómo usar herramientas tecnológicas e investigaciones 
      como la programación, metodologías de desarrollo, investigación de operaciones, automatización de procesos, entre otros, para solucionar problemas en el ámbito empresarial y personal.`
    },
    experiencie: {
      title: 'Experiencia',
      subtitle: 'Descripción',
      subtitle2: 'Funciones',
      description: [
        {
          title: "Empresa",
          bussines: 'Digital Profit (Federación Nacional de Cafeteros)',
          dates: 'Marzo 2025 - Actualmente',
          cargo: 'Analista de desarrollo',
          description: {
            text: `Consultora de tecnología (digitalprof-it.com), desempeñándome como analista de desarrollo asignado para la Federación Nacional de Cafeteros de Colombia.`
          },
          functions: {
            text: `Analista de desarrollo<br/>
            Desarrollo y modernización de plataformas críticas nacionales: sistema de Elecciones Cafeteras y plataforma para la gestión y censo de 3.000 Fincas cafeteras.<br/>
              Tecnologías: Spring Boot, Java, Maven, Node.js, TypeScript, Oracle Database, Docker, Kubernetes, GitLab, React`
          }
        },
        {
          title: "Empresa",
          bussines: 'OlSoftware (Comfandi)',
          dates: 'Abril 2024 - Actualmente',
          cargo: 'Desarrollador full stack (Freelance ocasional)',
          description: {
            text: `Empresa de tecnología en Cali donde he liderado el desarrollo de soluciones digitales estratégicas para la Caja de Compensación Familiar Comfandi en sectores de salud, movilidad y empleabilidad.`
          },
          functions: {
            text: `Desarrollo y mantenimiento de la app móvil "Mi Comfandi" y migración hacia una arquitectura multiplataforma.<br/>
Desarrollo de plataforma web de convenios médicos para que profesionales independientes (médicos, psicólogos, odontólogos con aval EPS) gestionen solicitudes y disponibilidad de horarios.<br/>
Desarrollo de la sucursal virtual de empleabilidad para que psicólogos brinden acompañamiento personalizado a buscadores de empleo, agendamiento de capacitaciones y seguimiento post-empleo.<br/>
Tecnologías: React, React Native, Next.js, Node.js, Nest.js, Tailwind CSS, Docker, Figma`
          }
        },
        {
          title: "Empresa",
          bussines: 'Marabunta',
          dates: 'Marzo 2024 - Diciembre 2024',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Es una agencia de publicidad ubicada en Cali, dedicada a la producción de eventos, la creación de estrategias, el desarrollo a medida, la comunicación y la prensa.`
          },
          functions: {
            text: `Desarrollador full stack <br/>
Diseñador web <br/>
Administración de servidores linux <br/>
Tecnologias: Figma, Illustrator, React, Next, Node js, Nest js, Strapi, Tailwind css, Docker, CI / CD, Ubuntu server`
          }
        },
        {
          title: "Empresa",
          bussines: 'Indra (Terpel)',
          dates: 'Mayo 2023 - Noviembre 2023',
          cargo: 'Líder técnico & Desarrollador full stack',
          description: {
            text: `Líder Técnico en la modernización de la plataforma web de Terpel para la caracterización y censo sociodemográfico del personal operativo de estaciones de servicio a nivel nacional.`
          },
          functions: {
            text: `Liderazgo técnico del equipo, diseño de arquitectura cloud y gobierno de calidad de código.<br/>
Modernización de la plataforma web de Terpel para el censo y caracterización del personal en cada estación de gasolina (métricas de género, composición familiar, hijos, etc.).<br/>
Tecnologías: Next.js, Nest.js, Azure DevOps, CI/CD, GCP Storage, MySQL, Sass`
          }
        },
        {
          title: "Empresa",
          bussines: 'Indra (Tigo & Ecopetrol)',
          dates: 'Diciembre 2021 - Abril 2023',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Desarrollo en el e-commerce nacional del operador de telecomunicaciones Tigo y plataformas interactivas para Ecopetrol.`
          },
          functions: {
            text: `Desarrollo en el e-commerce de Tigo: venta digital de planes móviles, módulos para televentas (call center), equipos en combo y artículos tecnológicos.<br/>
Publicación y despliegue de campañas digitales de alto impacto: lanzamiento nacional de la eSIM (SIM electrónica) y nuevos teléfonos inteligentes.<br/>
Desarrollo de plataforma web interactiva de minijuegos (ahorcado, sopa de letras, crucigrama) para la conmemoración de los 50 años de Ecopetrol.<br/>
Tecnologías: VTEX, React, .NET, JavaScript, jQuery, Sass, Gulp`
          }
        },
        {
          title: "Empresa",
          bussines: 'Praxis (Federación Nacional de Cafeteros)',
          dates: 'Mayo 2021 - Diciembre 2021',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Consultora de tecnología donde estuve asignado para la Federación Nacional de Cafeteros de Colombia, desarrollando soluciones críticas web y móviles para el sector cafetero.`
          },
          functions: {
            text: `Desarrollador Full Stack (React, Spring Boot, Oracle)<br/>
Desarrollo y soporte en la app móvil "El App del Café"<br/>
Desarrollo en la plataforma web de Regulación Cafetera<br/>
Desarrollo en la plataforma FEPC (Fondo de Estabilización de Precios del Café)<br/>
Tecnologías: React, Spring Boot, Java, Oracle Database, Sass`
          }
        },
        {
          title: "Empresa",
          bussines: 'Mg group',
          dates: 'Febrero 2021 - Abril 2021',
          cargo: 'Desarrollador frontend',
          description: {
            text: `Mg group es una empresa colombiana de información tecnológica`
          },
          functions: {
            text: `Desarrollador React <br/>
        Tecnologias: React, Sass`
          }
        },
        {
          title: "Empresa",
          bussines: 'Freelance',
          dates: 'Mayo 2019 - Diciembre 2021',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Mis inicios en el desarrollo con proyecto para fundaciones, artistas, agencias turisticas y colegios`
          },
          functions: {
            text: `Desarrollador React <br/>
        Desarrollador Angular <br/>
        Desarrollador React <br/>
        Desarrollador Firebase <br/>
        Administración de CPanel <br/>
        Desarrollador Java <br/>
        Desarrollador Mysql <br/>
        Desarrollador Posgresql <br/>
        Tecnologias: React, Angular, Firebase, Java, Mysql, Posgresql`
          }
        }
      ]
    }
  }
}

export const masterDataEN: masterData = {
  nav: [
    {
      title: 'About me',
      icon: '/icons/user-bold.png',
      alt: 'user-bold',
      navbar: 'about',
    },
    {
      title: 'Resume',
      icon: '/icons/list-bold.png',
      alt: 'list-bold',
      navbar: 'resume',
    },
    {
      title: 'Skills',
      icon: '/icons/code-file-broken.png',
      alt: 'code-file-broken',
      navbar: 'skill',
    },
    {
      title: 'Libraries',
      icon: '/icons/lib.png',
      alt: 'library',
      navbar: 'library',
    },
    {
      title: 'Contact',
      icon: '/icons/incoming-call.png',
      alt: 'incoming-call',
      navbar: 'contact',
    }
  ],
  about: {
    title: 'About me',
    text: `I am a Systems Engineer with more than 6 years of experience in the development of web and mobile applications.With solid knowledge of javascript 
        and some modern frameworks, as well as in database management, I stand out for my ability to design,
      implement and maintain efficient and scalable technological solutions.In addition to my technical skills, I have a strong ability 
        teamwork and problem solving.Passionate about teaching programming to beginners, students and advanced, I enjoy sharing my 
        knowledge and see the growth of other professionals.I am proactive, adaptable and committed to continuous improvement and technological innovation,
      always looking for new opportunities to learn and contribute to challenging projects.`,
      info: [
        `Age: ${ currentAge }`,
        'City: Cali, Valle del cauca',
        'Address: Cra 2b #65a - 11',
        'Hobbies: Soccer, Chess'
      ]
    },
    recommendations: [
      {
        name: 'Lennin Ibarra - Ingeniero de Software',
        img: '/images/opinions/lenin.jpg',
        text: `Neider is characterized by being a great professional with solid knowledge and great expertise for the 
       web, I had the opportunity to work with him for more than two years and in this period I learned a lot since he is a person with 
       skills to explain and with the pleasure of teaching and as a person he has high values, I recommend him for any 
       work team to which he will contribute his knowledge and leadership.`,
        link: 'https://www.linkedin.com/in/lennin-geovanny-ibarra/'
      },
      {
        name: 'William Arias - Analista de pruebas',
        img: '/images/opinions/william.jpg',
        text: `Neider recently worked on a project as a developer, where he proved to be an excellent professional and a 
      admirable person.He integrated well into the team, showing a positive attitude and unbeatable disposition.He was proactive in
  solve problems and seek improvements, and their ability to collaborate and communicate efficiently was key to the success of the
project.He is highly recommended for any position or project as his professionalism and attitude would be valuable.
for any team.`,
        link: 'https://www.linkedin.com/in/william-andr%C3%A9s-arias-cardona-6152861b6/'
      },
      {
        name: 'Jorge Rengifo - Estratega',
        img: '/images/opinions/jorge.jpg',
        text: `He is a dedicated professional committed to meeting the objectives set for his position.Is aware of the 
      planned schedules within the created processes and has a positive attitude towards each evaluation.`,
        link: 'https://www.linkedin.com/in/jorge-ivan-rengifo-duran/'
      }
    ],
    resume: {
      education: {
        title: 'Education',
        institute: 'Unipacifico',
        degree: 'Systems Engineer',
        description: `In this institution I have acquired very important knowledge, such as the analysis of systems and processes, how to use technological tools and research.
such as programming, development methodologies, operations research, process automation, among others, to solve problems in the business and personal sphere.`
      },
      experiencie: {
        title: 'Experience',
        subtitle: 'Description',
        subtitle2: 'Functions',
        description: [
          {
            title: "Company",
            bussines: 'Digital Profit (National Federation of Coffee Growers)',
            dates: 'March 2025 - Currently',
            cargo: 'Development Analyst',
            description: {
              text: `Technology consulting firm(digitalprof - it.com), serving as a development analyst assigned to the National Federation of Coffee Growers of Colombia(FNC).`
            },
            functions: {
              text: `Development Analyst <br/>
            Development of nationwide enterprise platforms: Coffee Elections (Elecciones Cafeteras) system and the 3,000 Coffee Farms management and census platform.<br/>
            Technologies: Spring Boot, Java, Maven, Node.js, TypeScript, Oracle Database, Docker, Kubernetes, GitLab, React`
            }
          },
{
  title: "Company",
  bussines: 'OlSoftware (Comfandi)',
  dates: 'April 2024 - Currently',
  cargo: 'Full stack developer (Occasional Freelance)',
  description: {
    text: `Technology company in Cali where I have led the development of strategic digital solutions for Comfandi (Family Compensation Fund) across healthcare, mobility, and employability.`
  },
  functions: {
    text: `Development and maintenance of "Mi Comfandi" mobile application and migration to cross-platform architecture.<br/>
Development of a medical agreement web portal for private healthcare providers (doctors, psychologists, dentists with EPS endorsement) to manage schedules and availability.<br/>
Development of the employability virtual branch for psychologists to provide job-seeking guidance, schedule training, and post-employment monitoring.<br/>
Technologies: React, React Native, Next.js, Node.js, Nest.js, Tailwind CSS, Docker, Figma`
  }
},
{
  title: "Company",
  bussines: 'Marabunta',
  dates: 'May 2024 - December 2024',
  cargo: 'Full stack developer',
  description: {
    text: `It is an advertising agency located in Cali, dedicated to the production of events, creation of strategies, custom development, communication and press.`
  },
  functions: {
    text: `Web designer <br/>
          Linux server administration <br/>
          Technologies: Figma, Illustrator, React, Next, Node js, Nest js, Strapi, Tailwind css, Ubuntu server`
  }
},
{
  title: "Company",
  bussines: 'Indra (Terpel)',
  dates: 'May 2023 - November 2023',
  cargo: 'Technical leader & Full stack developer',
  description: {
    text: `Global IT consultancy where I served as Technical Leader overseeing the modernization of Terpel's nationwide sociodemographic survey and workforce characterization platform across gas stations.`
  },
  functions: {
    text: `Team technical leadership, cloud architecture design, and code quality governance.<br/>
Modernization of Terpel's web platform for workforce census and demographic profiling per gas station (gender metrics, family composition, children, etc.).<br/>
Technologies: Next.js, Nest.js, Azure DevOps, CI/CD, GCP Storage, MySQL, Sass`
  }
},
{
  title: "Company",
  bussines: 'Indra (Tigo & Ecopetrol)',
  dates: 'December 2021 - April 2023',
  cargo: 'Full stack developer',
  description: {
    text: `Developed high-volume e-commerce platforms for major telecommunications operator Tigo and corporate interactive web platforms for Ecopetrol.`
  },
  functions: {
    text: `Development of Tigo's nationwide e-commerce: online sale of mobile phone plans, telesales modules (call center agents), bundled phones, and tech accessories.<br/>
Deployment and launch of high-traffic digital campaigns: rollout of eSIM technology and new flagship smartphone releases.<br/>
Development of an interactive web games platform (hangman, word search, crossword) for Ecopetrol's 50th-anniversary celebration.<br/>
Technologies: VTEX, React, .NET, JavaScript, jQuery, Sass, Gulp`
  }
},
{
  title: "Company",
    bussines: 'Praxis (National Federation of Coffee Growers)',
      dates: 'May 2021 - December 2021',
        cargo: 'Full stack developer',
          description: {
    text: `Technology consulting firm assigned to the National Federation of Coffee Growers of Colombia (FNC), building critical web and mobile solutions for the coffee industry.`
  },
  functions: {
    text: `Full Stack Developer (React, Spring Boot, Oracle)<br/>
Development and support for "El App del Café" mobile application<br/>
Development of the Coffee Regulation web portal<br/>
Development on the FEPC (Coffee Price Stabilization Fund) platform<br/>
Technologies: React, Spring Boot, Java, Oracle Database, Sass`
  }
},
{
  title: "Company",
    bussines: 'Mg group',
      dates: 'February 2021 - April 2021',
        cargo: 'Developer frontend',
          description: {
    text: `Mg group in a Colombian information technology company`
  },
  functions: {
    text: `Developer React <br/>
  Technologies: React, Sass`
  }
},
{
  title: "Company",
    bussines: 'Freelance',
      dates: 'Mayo 2019 - Diciembre 2021',
        cargo: 'Full stack developer',
          description: {
    text: `My beginnings in development with a project for foundations, artists, tourist agencies and schools`
  },
  functions: {
    text: `Desarrollador React <br/>
  Developer Angular <br/>
    Desarrollador React <br/>
      Developer Firebase <br/>
        CPanel Administration <br/>
          Developer Java <br/>
            Developer Mysql <br/>
              Developer Posgresql <br/>
                Technologies: React, Angular, Firebase, Java, Mysql, Posgresql`
  }
}
      ]
    }
  }
}

export type aboutType = {
  title: string;
  text: string;
  info: string[];
}

export type recommendationsType = {
  name: string;
  img: string;
  text: string;
  link: string;
}

type education = {
  title: string;
  institute: string;
  degree: string;
  description: string;
}

type experiencie = {
  title: string;
  subtitle: string;
  subtitle2: string;
  description: {
    title: string,
    bussines: string,
    dates: string,
    cargo: string,
    description: {
      text: string
    },
    functions: {
      text: string
    }
  }[]
}

export type resumeType = {
  education: education
  experiencie: experiencie
}

export type masterData = {
  nav: navbarType[];
  about: aboutType;
  recommendations: recommendationsType[]
  resume: resumeType;
}

export type navbarOptionTypes = "about" | "resume" | "skill" | "contact" | "library"

export type navbarType = {
  title: string,
  icon: string,
  alt: string,
  navbar: navbarOptionTypes,
}
