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
      title: 'Contacto',
      icon: '/icons/incoming-call.png',
      alt: 'incoming-call',
      navbar: 'contact',
    }
  ],
  about: {
    title: 'Sobre mí',
    text: `Soy Ingeniero de Sistemas con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles. Con un sólido conocimiento en javascript 
        y algunos frameworks modernos, así como en la gestión de bases de datos, me destaco por mi capacidad para diseñar, 
        implementar y mantener soluciones tecnológicas eficientes y escalables. Además de mis habilidades técnicas, poseo una fuerte capacidad 
        trabajo en equipo y resolución de problemas. Apasionado por enseñar programación a principiantes y estudiantes, disfruto compartir mi 
        conocimiento y ver el crecimiento de otros profesionales. Soy proactivo, adaptable y comprometido con la mejora continua y la innovación tecnológica, 
        buscando siempre nuevas oportunidades para aprender y contribuir en proyectos desafiantes.`,
    info: [
      'Edad: 28',
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
          bussines: 'Marabunta',
          dates: 'Febrero 2023 - Actualmente',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Es una agencia publicidad de Cali, dedicada a la producción de eventos, creación de estrategias, desarrollo a la medida, comunicación y prensa`
          },
          functions: {
            text: `Diseñador web<br/>
            Administración de servidores linux<br/>
            Tecnologias: Figma, Illustrator, React, Next, Node js, Nest js, Strapi, Tailwind css, Ubuntu server`
          }
        },
        {
          title: "Empresa",
          bussines: 'Indra',
          dates: 'Mayo 2023 - Noviembre 2023',
          cargo: 'Lider técnico',
          description: {
            text: `INDRA es una multinacional de información tecnológica líder en España y una de las principales empresas de Europa y Latinoamérica.`
          },
          functions: {
            text: `Desarrollador full stack<br/>
            Desarrollador Azure<br/>
            Desarrollador GCP<br/>
            Desarrollador Mysql<br/>
            Tecnologias: Azure devops, Nest js, Next js, Sass, CI/CD, GCP storage, Mysql`
          }
        },
        {
          title: "Empresa",
          bussines: 'Indra',
          dates: 'Diciembre 2021 - Abril 2023',
          cargo: 'Desarrollador full stack',
          description: {
            text: `INDRA es una multinacional de información tecnológica líder en España y una de las principales empresas de Europa y Latinoamérica.`
          },
          functions: {
            text: `Desarrollador .Net<br/>
            Desarrollador React<br/>
            Desarrollador Javascript<br/>
            Tecnologias: Vtex, React, .Net, Javascrit, Jquery, Sass, Gulp`
          }
        },
        {
          title: "Empresa",
          bussines: 'Praxis',
          dates: 'Mayo 2021 - Diciembre 2021',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Praxis es una multinacional de información tecnológica con presencia en más de 10 países`
          },
          functions: {
            text: `Desarrollador React<br/>
            Desarrollador spring boot<br/>
            Desarrollador Oracle<br/>
            Tecnologias: React, Sass, Spring boot, Oracle`
          }
        },
        {
          title: "Empresa",
          bussines: 'Mg group',
          dates: 'Febrero 2021 - Abril 2021',
          cargo: 'Desarrollador frontend',
          description: {
            text: `Mg group en una empresa colombiana de información tecnológica`
          },
          functions: {
            text: `Desarrollador React<br/>
            Tecnologias: React, Sass`
          }
        },
        {
          title: "Empresa",
          bussines: 'Frenlance',
          dates: 'Mayo 2019 - Diciembre 2021',
          cargo: 'Desarrollador full stack',
          description: {
            text: `Mis inicios en el desarrollo con proyecto para fundaciones, artistas, agencias turisticas y colegios`
          },
          functions: {
            text: `Desarrollador React<br/>
            Desarrollador Angular<br/>
            Desarrollador React<br/>
            Desarrollador Firebase<br/>
            Administración de CPanel<br/>
            Desarrollador Java<br/>
            Desarrollador Mysql<br/>
            Desarrollador Posgresql<br/>
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
      title: 'Contact',
      icon: '/icons/incoming-call.png',
      alt: 'incoming-call',
      navbar: 'contact',
    }
  ],
  about: {
    title: 'About me',
    text: `I am a Systems Engineer with more than 5 years of experience in the development of web and mobile applications. With solid knowledge of javascript 
        and some modern frameworks, as well as in database management, I stand out for my ability to design, 
        implement and maintain efficient and scalable technological solutions. In addition to my technical skills, I have a strong ability 
        teamwork and problem solving. Passionate about teaching programming to beginners, students and advanced, I enjoy sharing my 
        knowledge and see the growth of other professionals. I am proactive, adaptable and committed to continuous improvement and technological innovation, 
        always looking for new opportunities to learn and contribute to challenging projects.`,
    info: [
      'Age: 28',
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
      admirable person. He integrated well into the team, showing a positive attitude and unbeatable disposition. He was proactive in 
      solve problems and seek improvements, and their ability to collaborate and communicate efficiently was key to the success of the 
      project. He is highly recommended for any position or project as his professionalism and attitude would be valuable. 
      for any team.`,
      link: 'https://www.linkedin.com/in/william-andr%C3%A9s-arias-cardona-6152861b6/'
    },
    {
      name: 'Jorge Rengifo - Estratega',
      img: '/images/opinions/jorge.jpg',
      text: `He is a dedicated professional committed to meeting the objectives set for his position. Is aware of the 
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
          bussines: 'Marabunta',
          dates: 'February 2023 - Currently',
          cargo: 'Full stack developer',
          description: {
            text: `It is an advertising agency located in Cali, dedicated to the production of events, creation of strategies, custom development, communication and press.`
          },
          functions: {
            text: `Web designer<br/>
            Linux server administration<br/>
            Technologies: Figma, Illustrator, React, Next, Node js, Nest js, Strapi, Tailwind css, Ubuntu server`
          }
        },
        {
          title: "Company",
          bussines: 'Indra',
          dates: 'May 2023 - November 2023',
          cargo: 'Technical leader',
          description: {
            text: `INDRA is a leading multinational information technology company in Spain and one of the main companies in Europe and Latin America.`
          },
          functions: {
            text: `Full stack developer<br/>
            Developer Azure<br/>
            Developer GCP<br/>
            Developer Mysql<br/>
            Technologies: Azure devops, Nest js, Next js, Sass, CI/CD, GCP storage, Mysql`
          }
        },
        {
          title: "Company",
          bussines: 'Indra',
          dates: 'December 2021 - April 2023',
          cargo: 'Full stack developer',
          description: {
            text: `INDRA is a leading multinational information technology company in Spain and one of the main companies in Europe and Latin America.`
          },
          functions: {
            text: `Developer .Net<br/>
            Developer React<br/>
            Developer Javascript<br/>
            Technologies: Vtex, React, .Net, Javascrit, Jquery, Sass, Gulp`
          }
        },
        {
          title: "Company",
          bussines: 'Praxis',
          dates: 'May 2021 - December 2021',
          cargo: 'Full stack developer',
          description: {
            text: `Praxis is a multinational information technology company with presence in more than 10 countries.`
          },
          functions: {
            text: `Developer React<br/>
            Developer spring boot<br/>
            Developer Oracle<br/>
            Technologies: React, Sass, Spring boot, Oracle`
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
            text: `Developer React<br/>
            Technologies: React, Sass`
          }
        },
        {
          title: "Company",
          bussines: 'Frenlance',
          dates: 'Mayo 2019 - Diciembre 2021',
          cargo: 'Full stack developer',
          description: {
            text: `My beginnings in development with a project for foundations, artists, tourist agencies and schools`
          },
          functions: {
            text: `Desarrollador React<br/>
            Developer Angular<br/>
            Desarrollador React<br/>
            Developer Firebase<br/>
            CPanel Administration<br/>
            Developer Java<br/>
            Developer Mysql<br/>
            Developer Posgresql<br/>
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

export type navbarOptionTypes = "about" | "resume" | "skill" | "contact"

export type navbarType = {
  title: string,
  icon: string,
  alt: string,
  navbar: navbarOptionTypes,
}