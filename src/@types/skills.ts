export type skillsType =
  | 'javascript'
  | 'typescript'
  | 'reactjs'
  | 'react-native'
  | 'HTML'
  | 'CSS'
  | 'nextjs'
  | 'sass'
  | 'styled-components'
  | 'redux'
  | 'jest'
  | 'git'
  | 'eslint'
  | 'prettier'
  | 'jQuery'
  | 'firebase'
  | 'arduino'
  | 'c#'
  | '.NET'
  | 'SqlServer'
  | 'Mongo'
  | 'Angular'

export type skillType = {
  id: number
  skill: skillsType
  background?: string
}
