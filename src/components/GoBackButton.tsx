import { useNavigate } from "react-router-dom"

export default function GoBackButton() {
  const navigate = useNavigate()

  const goToHome = (): void => {
    navigate("/")
  }

  return (
    <button
      className="borrder-solid border-[1px] w-[3.5rem] md:w-[5rem] text-sm md:text-md rounded-md py-1  md:px-3 md:py-2  border-slate-200  bg-slate-100  font-[300] cursor-pointer hover:bg-slate-200"
      onClick={goToHome}
    >
      Home
    </button>
  )
}
