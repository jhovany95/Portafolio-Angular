export interface profile {
    name: string,
    description: string,
    movil: string,
    location: string,
    mail: string,
    birthday: string,
    github: string,
    linkedin: string
}


export interface navigation {
    home: string,
    resume: string,
    projets: string,
    contact: string,
    about: string
}

export interface basicData {
    profession:string,
    aboutme: string,
    phone: string,
    location: string,
    email: string,
    birthday: string,
}

export interface whatIdo{
    icon: string,
    title: string,
    description: string
}

export interface education{
    inicio: string,
    fin: string,
    description: string,
    institution: string,
    link:string
}

export interface experience{
    inicio: string,
    fin: string,
    description: string,
    company: string,
}

export interface resumeData{
    education: string,
    experience: string,
    workingSkills: string,
    knowledges: string,
}

export interface workingSkills{
    name: string,
    porcentaje: string,
}
export interface knowledges{
    name: string,
}

export interface contactMe {
    title:string,
    description: string,
    email: string,
    subject: string,
    placeholderSubject: string,
    Msg: string,
    placeholderMsg: string,
}
//Traduccion

export interface contactMeLang {
    [lang: string]: contactMe;
  }

export interface basicDataLang {
    [lang: string]: basicData;
  }  

export interface navigationLang {
    [lang: string]: navigation;
  }

export interface knowledgesLang {
    [lang: string]: knowledges[];
  }

export interface resumeDataLang {
    [lang: string]: resumeData;
  }

export interface educationLang {
    [lang: string]:education[];
}

export interface experienceLang {
    [lang: string]:experience[];
}

export interface whatIdoLang {
    [lang: string]:whatIdo[];
}
