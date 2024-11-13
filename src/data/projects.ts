import { ProjectType } from '@/@types/projects'

export const ProjectsData: ProjectType[] = [
  {
    id: 1,
    project: `landing-page`,
    title: `GTEC-IRON`,
    description: `Página de apresentação criada para a empresa GTEC-IRON`,
    link: `https://www.gteciron.com/`,
    repository: `https://github.com/Antonio91378/GTEC-Iron-landing-page`,
    langs: [`HTML`, `Javascript`, `CSS`, `Next.js`],
    platforms: [`web`, `github`],
    goods: [`prettier`]
  },
  {
    id: 2,
    project: `e-commerce`,
    title: `COOPERAFLEX`,
    description: `E-commerce de seguros que ajudei a desenvolver como dev back-end terceirizado da ICATU SEGUROS S.A.`,
    link: `https://vida-cooperaflex-venda.icatuseguros.com.br/`,
    repository: `NA`,
    langs: [
      `HTML`,
      `Javascript`,
      `CSS`,
      `Angular.js`,
      `.NET`,
      `SQL Server`,
      `Azure`,
      `MongoDB`
    ],
    platforms: [`web`],
    goods: [`SOLID`, `TDD`, `DDD`]
  },
  {
    id: 3,
    project: `gym-system`,
    title: `Sistema de Academia (Em andamento)`,
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
