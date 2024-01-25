import React from "react"

export default function LanguageSelect({
  getValue,
  languages,
}: {
  getValue: (value: string) => void
  languages: string[]
}) {
  /**
   * Passes value from select to callback when user selects an option
   * @param e ChangeEvent
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    getValue(e.target.value)
  }
  return (
    <div className="flex">
      <select
        className="border-md rounded-md cursor-pointer w-40  bg-[#fbf9f9] border-[#DADCDE] border-[1px] pl-2"
        onChange={handleChange}
      >
        <option value="">Language</option>
        <option value="">No Filter</option>
        {languages.map((language: string, index: number) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      <i className="fa-solid fa-arrow-down text-xs -translate-x-5 translate-y-[11px]"></i>
    </div>
  )
}
