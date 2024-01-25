export default function FilterInput({
  getValue,
}: {
  getValue: (value: string) => void
}) {
  /**
   * Passes value from input to the callback function when user types on the input field
   * @param e ChangeEvent
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    getValue(e.target.value)
  }
  return (
    <div className=" w-full h-9 flex">
      <input
        type="search"
        placeholder="Find a repository..."
        className="cursor-text h-9 w-full pl-3 border-solid border-[1px] bg-white border-slate-400 rounded focus:outline-none focus:border-sky-500 focus:border-1 placeholder:text-gray-400 placeholder:font-extralight font-[300]"
        onChange={handleOnChange}
      />
    </div>
  )
}
