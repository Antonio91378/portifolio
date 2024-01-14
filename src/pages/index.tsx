/* eslint-disable consistent-return */
import {
  GoodSkillsData,
  MainSkillsData,
  OtherSkillsData,
  StudySkills
} from '@/data/skills'
import { ProjectsData } from '@/data/projects'

import { useRef, useState } from 'react'

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
import ProfileData from '@/components/Data/ProfileData'
import ObjectivesData from '@/components/Data/ObjectivesData'
import CompanyCard from '@/components/CompanyCard'

type sections = 'skills' | 'projects' | 'experience' | 'objectives' | 'contact'

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLHeadingElement>(null)
  const experienceRef = useRef<HTMLHeadingElement>(null)
  const objectivesRef = useRef<HTMLHeadingElement>(null)
  const contactRef = useRef<HTMLHeadingElement>(null)

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
          <ProfileProfession>Desenvolvedor Full-Stack.</ProfileProfession>
        </ProfileContainer>
        <ProfileSeparator />
        <ProfileData />
      </ProfileAside>
      <ContentSection id="content">
        <Menu active={activeSection} />
        <Content onScroll={e => getActualSection(e.currentTarget.scrollTop)}>
          <ContentContainer>
            <h1 id="skills">Habilidades principais</h1>
            <Skills skills={MainSkillsData} />
            <h1>Estudos</h1>
            <Skills skills={StudySkills} />
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
            <h1 ref={experienceRef} id="experience">
              Experiência
            </h1>
            <div
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(auto-fill, minmax(22rem, 1fr))`,
                gridGap: `1rem 2rem`
              }}
            >
              <CompanyCard />
            </div>
            <h1 ref={objectivesRef} id="objectives">
              Objetivos
            </h1>
            <ObjectivesData />
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
