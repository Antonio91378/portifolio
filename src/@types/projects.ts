export type projectsType =
  | 'landing-page'
  | 'e-commerce'
  | 'gym-system'
  | 'iot-esp32'

export type goodsType = 'eslint' | 'prettier' | 'SOLID' | 'TDD' | 'DDD'

export type platformsType = 'desktop' | 'web' | 'github' | 'mobile'

export type ProjectType = {
  id: number
  project: projectsType
  title?: string
  description: string
  repository?: string

  link?: string
  langs: string[]
  platforms: platformsType[]
  goods?: goodsType[]
}
