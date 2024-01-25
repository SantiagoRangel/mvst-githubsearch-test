import React from "react"

export default function SearchInput({
  getValue,
}: {
  getValue: (value: string) => void
}) {
  /**
   * Passes value from input to the callback function when user presses enter key
   * @param e KeyboardEvent
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      getValueFromInput()
    }
  }

  /**
   * Passes value from input to the callback function when user clicks the search icon
   */
  const getValueFromInput = (): void => {
    const input = document.querySelector(".searchInput") as HTMLInputElement
    const value = input?.value
    getValue(value)
  }

  return (
    <div className=" w-full h-9 flex">
      <input
        type="search"
        placeholder="Search for a Github user..."
        className="searchInput cursor:text h-9 w-full pl-3 border-solid border-[1px] bg-white border-slate-400 rounded focus:outline-none focus:border-sky-300 focus:border-1 placeholder:text-gray-400 placeholder:font-extralight font-[300]"
        onKeyDown={handleKeyPress}
      />
      <div
        className="flex w-0 items-center -translate-x-8 cursor-pointer"
        onClick={getValueFromInput}
      >
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </div>
    </div>
  )
}
