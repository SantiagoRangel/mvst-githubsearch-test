import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import GoBackButton from "../components/GoBackButton"
import { useEffect, useState } from "react"
import ProfilePreview from "../components/UserProfilePreview"
import { Repository } from "../interfaces/interfaces"
import RepositoryList from "../components/RepositoryList"
import FilterInput from "../components/FilterInput"
import LanguageSelect from "../components/LanguageSelect"

export default function UserRepositories() {
  let { username } = useParams()
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [languages, setLanguages] = useState<string[]>([])
  const [languageFilter, setLanguageFilter] = useState<string>("")
  const [nameFilter, setNameFilter] = useState<string>("")

  const GET_USERREPOSITORIES = gql`
    query getUser($username: String!, $endCursor: String) {
      user(login: $username) {
        id
        login
        name
        avatarUrl
        bio
        followers {
          totalCount
        }
        following {
          totalCount
        }
        organizations(first: 10) {
          nodes {
            avatarUrl
            name
          }
        }
        repositories(first: 100, after: $endCursor) {
          nodes {
            id
            name
            description
            forkCount
            url
            isPrivate
            primaryLanguage {
              name
              color
            }
            updatedAt
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  `

  const { loading, error, data, fetchMore } = useQuery(GET_USERREPOSITORIES, {
    variables: {
      username,
    },
  })

  const handleFilterInput = (value: string): void => {
    setNameFilter(value)
  }

  const handleSelectFilter = (value: string): void => {
    setLanguageFilter(value)
  }

  useEffect(() => {
    if (!data) {
      return
    }
    const filteredRepositories = data.user.repositories.nodes.filter(
      (repository: Repository) =>
        repository.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
    if (languageFilter === "") {
      setRepositories(filteredRepositories)
    } else {
      setRepositories(
        filteredRepositories.filter(
          (repository: Repository) =>
            repository.primaryLanguage?.name.toLowerCase() ===
            languageFilter.toLowerCase()
        )
      )
    }
  }, [languageFilter, nameFilter])

  useEffect(() => {
    if (data?.user) {
      const languagesArray = data.user.repositories.nodes
        .map((repository: Repository) => repository.primaryLanguage?.name)
        .filter((language: string | undefined) => language !== undefined)
      const uniqueLanguages = languagesArray.filter(
        (language: string, index: number) =>
          languagesArray.indexOf(language) === index
      )
      setLanguages(uniqueLanguages)
      setRepositories(data.user.repositories.nodes)

      if (data.user.repositories.pageInfo.hasNextPage) {
        fetchMore({
          variables: {
            endCursor: data.user.repositories.pageInfo.endCursor,
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return prevResult
            }
            const newData = {
              user: {
                id: prevResult.user.id,
                avatarUrl: prevResult.user.avatarUrl,
                bio: prevResult.user.bio,
                followers: prevResult.user.followers,
                following: prevResult.user.following,
                login: prevResult.user.login,
                name: prevResult.user.name,
                organizations: prevResult.user.organizations,
                repositories: {
                  pageInfo: fetchMoreResult.user.repositories.pageInfo,
                  nodes: [
                    ...prevResult.user.repositories.nodes,
                    ...fetchMoreResult.user.repositories.nodes,
                  ],
                },
              },
            }
            return newData
          },
        })
      }
    }
  }, [data])

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center p-10">
        <img
          className="h-auto w-20 animate-pulse"
          src={"/favicon.png"}
          alt="loader gif"
        />
      </div>
    )
  if (error)
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center p-10">
        <p className="mb-5 font-[300]">Error : {error.message}</p>
        <GoBackButton />
      </div>
    )

  return (
    <div className="w-screen min-h-screen flex py-10 justify-center">
      <div className="flex px-10  w-[70rem] flex-col md:flex-row  gap-10">
        <div className="w-[23rem] flex flex-col ">
          <ProfilePreview userData={data.user} />
          <div className="mt-5 ml-2 md:ml-6">
            <GoBackButton />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:max-w-[40rem]">
          <div className="flex gap-4 ">
            <FilterInput getValue={handleFilterInput} />
            <LanguageSelect
              getValue={handleSelectFilter}
              languages={languages}
            />
          </div>
          {repositories && <RepositoryList repositories={repositories} />}
        </div>
      </div>
    </div>
  )
}
