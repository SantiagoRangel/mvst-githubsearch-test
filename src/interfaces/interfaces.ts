export interface Repository {
  id: string
  description?: string
  name: string
  isPrivate: boolean
  forkCount: number
  primaryLanguage?: {
    name: string
    color: string
  }
  updatedAt: string
  url: string
}

export interface UserData {
  id: string
  avatarUrl: string
  bio: string
  followers: {
    totalCount: number
  }
  following: {
    totalCount: number
  }
  login: string
  name?: string
  organizations: {
    nodes: {
      avatarUrl: string
      name: string
    }[]
  }
  repositories: {
    nodes: Repository[]
  }
}
