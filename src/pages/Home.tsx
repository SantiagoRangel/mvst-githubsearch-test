import SearchInput from "../components/SearchInput"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  const handleInput = (value: string): void => {
    const navigateToUrl = `/${value}/repositories`
    navigate(navigateToUrl)
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex items-center flex-col md:w-[32rem] max-w-[32rem] w-full px-10 -translate-y-32">
        <img
          src="/images/herologo.png"
          alt="github logo"
          className="w-40 h-auto -translate-x-2"
        />
        <SearchInput getValue={handleInput} />
      </div>
    </div>
  )
}
