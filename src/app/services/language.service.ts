import {  Injectable  } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { profile, navigation, basicData, basicDataLang, navigationLang,whatIdo, whatIdoLang, education, experience, educationLang, experienceLang,resumeDataLang, resumeData, knowledgesLang, contactMe, contactMeLang} from '../models/profile.module';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage = new BehaviorSubject<string>('ES'); // Idioma por defecto
  language$ = this.currentLanguage.asObservable(); // Observable para observar cambios en el idioma

  // Datos basicos

  basicDataTrads: basicDataLang = {
    ES: {
      profession:'Desarrollador FullStack',
      aboutme: 'Ingeniero en Sistemas especializado en desarrollo de software, con más de 5 años de experiencia en el desarrollo web con tecnologías como AngularJS, HTML, JavaScript, Python, APIs RESTful y frameworks CSS como Tailwind y Bootstrap. Enfocado en la generación de código limpio y mantenible.',
      phone: 'Teléfono',
      location: 'Ubicación',
      email: 'Correo electronico',
      birthday: 'Nacimiento',
    },
    EN: {
      profession:'FullStack Developer',
      aboutme: 'Computer engineer specialized in software development, with more than 5 years of experience in web development with technologies such as AngularJS, HTML, JavaScript, Python, RESTful APIs and CSS frameworks such as Tailwind and Bootstrap. Focused on generating clean and maintainable code.',
      phone: 'Phone',
      location: 'Location',
      email: 'Email',
      birthday: 'Birthday',
    }
  };

  //Navegacion 

  navigationTrads: navigationLang = {
    ES: {
      home: 'Inicio',
      resume: 'Resumen',
      projets: 'Proyectos',
      contact: 'Contacto',
      about: 'Acerca de Mi'
  },
    EN: {
      home: 'Home',
      resume: 'Resume',
      projets: 'Projects',
      contact: 'Contact',
      about: 'About Me'
    }
  }; 
  

// Default page 



whatIdoTrads: whatIdoLang = {
  ES: [ {
    icon:'code2.svg',
    title: 'Desarrollo Web',
    description: 'Utilizando tecnologías como HTML, CSS, Javascript, Angular e implementación de Tailwind CSS y Bootstrap CSS',
  },
  {
    icon:'development.svg',
    title: 'Desarrollo Back-End',
    description: 'Utilizando una variedad de lenguajes como Python, Node.js, PHP y ASP Classic, garantizando un rendimiento óptimo y una arquitectura robusta',
  },
  {
    icon:'tools.svg',
    title: 'Gestion de servidores',
    description: 'Capacidad en la gestión de servidores tanto en entornos Windows como Linux, con experiencia en plataformas en la nube como AWS y Google Cloud',
  },
  {
    icon:'database.svg',
    title: 'Bases de datos',
    description: 'Habilidad en la administración de bases de datos relacionales: PostgreSQL, SQL Server y MySQL',
  },
  {
    icon:'IA.svg',
    title: 'Inteligencia artificial',
    description: 'Conocimientos en técnicas de inteligencia artificial, incluyendo clasificación, PLN, transformers y fine-tuning, con experiencia en la implementación de soluciones innovadoras',
  },
],

  EN: [{
    icon:'code2.svg',
    title: 'Web Development',
    description: 'Using technologies such as HTML, CSS, Javascript, Angular and implementation of Tailwind CSS and Bootstrap CSS',
  },
  {
    icon:'development.svg',
    title: 'Back-End Development',
    description: 'Using a variety of languages such as Python, Node.js, PHP and ASP Classic, ensuring optimal performance and robust architecture',
  },
  {
    icon:'tools.svg',
    title: 'Server Management',
    description: 'Ability to manage servers in both Windows and Linux environments, with experience in cloud platforms such as AWS and Google Cloud',
  },
  {
    icon:'database.svg',
    title: 'Databases',
    description: 'Skill in relational database administration: PostgreSQL, SQL Server and MySQL',
  },
  {
    icon:'IA.svg',
    title: 'Artificial intelligence',
    description: 'Expertise in artificial intelligence techniques, including classification, PLN, transformers and fine-tuning, with experience in implementing innovative solutions',
  },
]
};

//Resume page

//Experiences

experiencesLang: experienceLang = {
  ES: [ {
    inicio: '2023',
    fin: '2024',
    description: 'Desarrollador FullStack - Estudiante investigador ',
    company: 'Universidad Carlos III de Madrid',
  },
  {
    inicio: '2023',
    fin: '2023',
    description: 'Desarrollador FullStack',
    company: 'Elevated S.A.S.',
  },
  {
    inicio: '2014',
    fin: '2023',
    description: 'Desarrollador FullStack & Analista de tecnología',
    company: 'Clinica Medico Quirurgica S.A.S.',
  },
],

  EN: [{
    inicio: '2023',
    fin: '2024',
    description: 'FullStack Developer - Research Student ',
    company: 'University Carlos III of Madrid',
  },
  {
    inicio: '2023',
    fin: '2023',
    description: 'FullStack Developer',
    company: 'Elevated S.A.S.',
  },
  {
    inicio: '2014',
    fin: '2023',
    description: 'FullStack Developer & It Analyst',
    company: 'Clinica Medico Quirurgica S.A.S.',
  },
]
};


//Estudies

studiesLang: educationLang = {
  ES: [  {
    inicio: '2023',
    fin: '2024',
    description: 'Master en ciencia y tecnologia informatica',
    institution: 'Universidad Carlos III de madrid, España',
    link: 'https://www.uc3m.es'
  },
  
  {
    inicio: '2019',
    fin: '2023',
    description: 'Ingenieria en sistemas',
    institution: 'Universidad Simón Bolivar, Colombia',
    link: 'https://www.unisimon.edu.co/'
  },
  {
    inicio: '2016',
    fin: '2018',
    description: 'Tecnologia en analisis y desarrollo de sistemas',
    institution: 'SENA, Colombia',
    link: 'https://www.sena.edu.co'
  },
],

  EN: [{
    inicio: '2023',
    fin: '2024',
    description: 'Master in computer science and technology',
    institution: 'University Carlos III of Madrid, España',
    link: 'https://www.uc3m.es'
  },
  
  {
    inicio: '2019',
    fin: '2023',
    description: 'Computer engineering',
    institution: 'Simon Bolivar University, Colombia',
    link: 'https://www.unisimon.edu.co/'
  },
  {
    inicio: '2016',
    fin: '2018',
    description: 'Technology in systems analysis and development',
    institution: 'SENA, Colombia',
    link: 'https://www.sena.edu.co'
  },
]
};

//Resume data

resumeDataLang: resumeDataLang = {
  ES: {
    education: 'Educacion',
    experience: "Experiencia",
    workingSkills: "Habilidades",
    knowledges: "Conocimientos",
  },
  EN: {
    education: "Education",
    experience: "Experience",
    workingSkills: "Working Skills",
    knowledges: "Knowledges",
  }
};

knowledgesLang: knowledgesLang = {
  ES: [
    { name: 'Inteligencia artificial' },
    { name: 'Desarrollo web' },
    { name: 'Diseño web' },
    { name: 'Desarrollo Backend' },
    { name: 'Rest API' },
    { name: 'Servidores' },
    { name: 'Linux' },
    { name: 'Windows' },
    { name: 'Bases de datos relacionales' },
    { name: 'PostgreSql' },
    { name: 'Sql Server' },
    { name: 'MySQL' },
    { name: 'Diseño UI' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'DevOps' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Testing' },
    { name: 'Arquitectura de Software' }
  ],
  EN: [
    { name: "Artificial Intelligence" },
    { name: 'Web Development' },
    { name: 'Web Design' },
    { name: 'Backend Development' },
    { name: 'Rest API' },
    { name: 'Servers' },
    { name: 'Linux' },
    { name: 'Windows' },
    { name: 'Relational Databases' },
    { name: 'PostgreSQL' },
    { name: 'SQL Server' },
    { name: 'MySQL' },
    { name: 'UI Design' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'DevOps' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Testing' },
    { name: 'Software Architecture' }
  ]
};

// Concta Me

contactMeTrads: contactMeLang = {
  ES: {
    title:"Contáctame",
    description: "Estoy disponible para nuevas oportunidades y colaboraciones. Envíame un mensaje y te responderé a la brevedad.",
    email: "Correo",
    subject: "Asunto",
    placeholderSubject: "Escribe el asunto...",
    Msg: "Mensaje",
    placeholderMsg: "Escribe tu mensaje...",
  },
  EN: {
    title: "Contact Me",
    description: "I am available for new opportunities and collaborations. Send me a message, and I will get back to you promptly.",
    email: "Email",
    subject: "Subject",
    placeholderSubject: "Enter the subject...",
    Msg: "Message",
    placeholderMsg: "Enter your message..."
  }
};



 setLanguage(lang: string) {
    this.currentLanguage.next(lang); // Cambia el idioma y notifica a los suscriptores
  }

  getTranslationData(): any {
    const lang = this.currentLanguage.getValue(); // Obtener el idioma actual
    return {
      basicDataTrad: this.basicDataTrads[lang],
      navigationTrad: this.navigationTrads[lang],
      whatIdoTrad: this.whatIdoTrads[lang],
      studiesTrad: this.studiesLang[lang],
      experiencesTrad: this.experiencesLang[lang],
      resumeDataTrad: this.resumeDataLang[lang],
      knowledgesTrad: this.knowledgesLang[lang],
      contactMeTrad: this.contactMeTrads[lang],
      // Incluir otros objetos de traducción según sea necesario
    }; // Devolver las traducciones correspondientes
  }
  constructor() { }
}
