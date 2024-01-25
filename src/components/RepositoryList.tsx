import { Key } from "react"
import { Repository } from "../interfaces/interfaces"
import RepositoryPreview from "./RepositoryPreview"

export default function RepositoryList({
  repositories,
}: {
  repositories: Repository[]
}) {
  return (
    <div className=" flex flex-col gap-7">
      {repositories.map(
        (
          repository: {
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
          },
          index: Key
        ) => (
          <div className="" key={index}>
            <RepositoryPreview repository={repository} />
          </div>
        )
      )}
    </div>
  )
}
