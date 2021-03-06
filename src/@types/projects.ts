export type projectsType =
  | 'company-website'
  | 'news-grid'
  | 'gym-system'
  | 'iot-esp32'

export type goodsType = 'eslint' | 'prettier'

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
