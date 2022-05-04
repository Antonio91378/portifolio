import { ProjectType } from '@/@types/projects'

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    project: `company-website`,
    title: `company website`,
    description: `Um modelo de site para uma determinada compania`,
    link: `https://company-website-nu.vercel.app/`,
    repository: `https://github.com/Antonio91378/Company_website`,
    langs: [`HTML`, `Javascript`, `CSS`],
    platforms: [`web`, `github`],
    goods: [`prettier`]
  },
  {
    id: 2,
    project: `news-grid`,
    title: `News Grid`,
    description: `Modelo de site de notícias`,
    link: `https://sitedenoticias.netlify.app/`,
    repository: `https://github.com/Antonio91378/Aprendendo-conceitos-de-html-e-css`,
    langs: [`HTML`, `Javascript`, `CSS`, `Sass`],
    platforms: [`web`, `github`],
    goods: [`eslint`, `prettier`]
  },
  {
    id: 3,
    project: `gym-system`,
    title: `Sistema de Academia`,
    description: `modelo de sistema administrativo de academia, usado para cadastro e entrada de usuários`,
    repository: `https://github.com/Antonio91378/Academia_system`,
    link: `https://academia-system.vercel.app/`,
    langs: [`React.js`, `Javascript`, `Typescript`, `Sass`, `Firebase`],
    platforms: [`web`, `github`],
    goods: [`prettier`]
  },
  {
    id: 4,
    project: `iot-esp32`,
    title: `IOT com esp32`,
    repository: `https://github.com/Antonio91378/IOT_esp32_react_firebase`,
    description: `Projeto de Internet das Coisas, envolvendo o microcontrolador esp32`,
    link: `https://iot-esp32-react-firebase.vercel.app/`,
    langs: [`React.js`, `Javascript`, `Sass`, `arduino`, `Firebase`],
    platforms: [`web`, `github`]
  }
]
