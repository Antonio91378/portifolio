export type skillsType =
  | 'javascript'
  | 'Typescript'
  | 'Reactjs'
  | 'react-native'
  | 'HTML'
  | 'CSS'
  | 'Nextjs'
  | 'sass'
  | 'styled-components'
  | 'redux'
  | 'jest'
  | 'git'
  | 'eslint'
  | 'Prettier'
  | 'jQuery'
  | 'firebase'
  | 'arduino'
  | 'Csharp'
  | 'DotNet'
  | 'SqlServer'
  | 'Mongo'
  | 'Angular'
  | 'SOLID'
  | 'Swagger'
  | 'Postman'


export type skillType = {
  id: number
  skill: skillsType
  background?: string
}
