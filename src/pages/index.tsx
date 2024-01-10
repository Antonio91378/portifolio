/* eslint-disable consistent-return */
import { GoodSkillsData, MainSkillsData, OtherSkillsData } from '@/data/skills'
import { ProjectsData } from '@/data/projects'

import { useRef, useState } from 'react'
import Lottie from 'react-lottie'

import {
  ContentSection,
  Content,
  ContentContainer,
  ProfileAside,
  ProfileBio,
  ProfileBioContainer,
  ProfileContainer,
  ProfileName,
  ProfileProfession,
  ProfileSeparator,
  Screen
} from '@/styles/Home'

import Menu from '@/components/menu'
import User from '@/components/user'
import Skills from '@/components/skills'
import ProjectsGrid from '@/components/ProjectsGrid'
import FormationGrid from '@/components/FormationGrid'
import ContactGrid from '@/components/ContactGrid'

import DownAnim from '@/assets/animations/down.json'
import { AgeCalculator } from '@/utils/AgeCalculator'

type sections = 'skills' | 'projects' | 'experience' | 'objectives' | 'contact'

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null)
  const experienceRef = useRef<HTMLHeadingElement>(null)
  const objectivesRef = useRef<HTMLHeadingElement>(null)
  const contactRef = useRef<HTMLHeadingElement>(null)

  var myAge = AgeCalculator('2000/07/10')

  const [activeSection, setActiveSection] = useState<sections>(`skills`)

  const getActualSection = (scrollPosition: number): void => {
    if (
      !contactRef.current ||
      !objectivesRef.current ||
      !experienceRef.current ||
      !projectsRef.current
    )
      return

    if (scrollPosition >= contactRef.current?.offsetTop - 200)
      return setActiveSection(`contact`)
    if (scrollPosition >= objectivesRef.current?.offsetTop - 200)
      return setActiveSection(`objectives`)
    if (scrollPosition >= experienceRef.current?.offsetTop - 200)
      return setActiveSection(`experience`)
    if (scrollPosition >= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`projects`)
    if (scrollPosition <= projectsRef.current?.offsetTop - 200)
      return setActiveSection(`skills`)
  }

  return (
    <Screen className="screen">
      <ProfileAside>
        <ProfileContainer>
          <User />
          <ProfileName>Antônio Víctor</ProfileName>
          <ProfileProfession>Desenvolvedor Full-Stack jr.</ProfileProfession>
        </ProfileContainer>
        <ProfileSeparator />
        <ProfileBioContainer>
          <ProfileBio>
            Sou mineiro, tenho {myAge} anos e trabalho como 
            {` `}<span className="empashis">desenvolvedor back-end C#</span>{` `}
            desde 2022
            <br /> <br />
             Fiz o ensino médio no 
            {` `}<span className="empashis"> Instituto Federal do Norte de Minas Gerais </span>{` `}
             com curso técnico integrado e a partir daí, prossegui minha carreira acadêmica na engenharia pela instituição
             {` `}<span className="empashis">CEFET-MG</span>{` `}
            <br /> <br />
             Sou
             {` `}<strong className="empashis">apaixonado </strong>
            por programação, seja atuando como front, seja atuando como back,
            contudo ultimamente tenho trabalhado com 
            {` `}<span className="tech">.NET</span>{` `}
            em conjunto com o
            {` `}<span className="tech">SQL Server</span>
            . Como objetivo, quero ficar cada vez mais especializado nas principais tecnologias do mercado
             e seguir acreditando que a chave de todo o sucesso é "correr atrás".
          </ProfileBio>
        </ProfileBioContainer>
        <a href="#content" className="downArrow">
          <Lottie
            options={{
              animationData: DownAnim
            }}
            height="3rem"
          />
        </a>
      </ProfileAside>
      <ContentSection id="content">
        <Menu active={activeSection} />
        <Content onScroll={e => getActualSection(e.currentTarget.scrollTop)}>
          <ContentContainer>
            <h1 id="skills">Habilidades principais</h1>
            <Skills skills={MainSkillsData} />
            <h1>Boas práticas</h1>
            <Skills skills={GoodSkillsData} />
            <h1>Outras</h1>
            <Skills skills={OtherSkillsData} />
            <h1 ref={projectsRef} id="projects">
              Projetos
            </h1>
            <ProjectsGrid projects={ProjectsData} />
            <h1>Formação</h1>
            <FormationGrid />
            <h1 ref={objectivesRef} id="objectives">
              Objetivos
            </h1>
            <p>
              Tenho o objetivo de crescer na área de{` `}
              <span className="tech">Desenvolvimento web e mobile</span>,
              utilizando como linguagem principal o{` `}
              <span className="lang">Javascript</span> (e{` `}
              <span className="lang">Typescript</span>), pois são linguagens que
              tenho muita vontade de{` `}
              <strong className="empashis">dominar</strong>, principalmente
              quando aplicada a frameworks como o{` `}
              <span className="tech">React</span> e o{` `}
              <span className="tech">Next</span>. Apesar de gostar de
              desenvolver aplicações web também gosto de fazer{` `}
              <span className="go">aplicações IOT</span>, utilizando{` `}
              <span className="tech">micro-controladores</span> que utilzam o
              {` `}
              {` `}
              <span className="go">arduino</span> como IDE principal, gosto
              também de fazer {` `}
              <span className="go">modelos 3D</span>, utilizando{` `}
              <span className="tech">solid works e o blender</span> como
              ferramentas principais de modelagem.
              <br />
              <br />
              Após dominar o front-end pretendo me tornar um{` `}
              <strong className="empashis">desenvolvedor full-stack</strong>,
              utilizando o <span className="tech">node.js</span> como tecnologia
              principal, por conta da sua{` `}
              <span className="go">versatilidade</span> e{` `}
              <span className="go">eficiência</span>, além de que o node também
              utiliza{` `}
              <span className="lang">javascript</span> em sua estrutura de{` `}
              <span className="empashis">desenvolvimento</span>.
            </p>
            <h1 ref={contactRef} id="contact">
              Contatos
            </h1>
            <ContactGrid />
          </ContentContainer>
        </Content>
      </ContentSection>
    </Screen>
  )
}

export default Home
