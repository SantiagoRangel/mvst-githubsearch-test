import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { trimDate } from "../utils/formatting"
import { Repository } from "../interfaces/interfaces"

export default function RepositoryPreview({
  repository,
}: {
  repository: Repository
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLAnchorElement>(null)
  const spanRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (_context, contextSafe) => {
      const onHoverEffect = contextSafe!(() => {
        gsap.fromTo(
          spanRef.current,
          { height: "1px", width: "0" },
          { width: "100%" }
        )
      })
      const onLeaveEffeect = contextSafe!(() => {
        gsap.to(spanRef.current, { width: "0" })
      })

      nameRef.current?.addEventListener("mouseenter", onHoverEffect)
      nameRef.current?.addEventListener("mouseleave", onLeaveEffeect)

      return () => {
        nameRef.current?.removeEventListener("mouseenter", onHoverEffect)
        nameRef.current?.removeEventListener("mouseleave", onLeaveEffeect)
      }
    },
    { scope: divRef }
  )
  return (
    <div
      className="border-b-[1px] border-solid border-gray-200 pb-3"
      ref={divRef}
    >
      <div className="flex">
        <a href={repository.url} target="__blank" ref={nameRef}>
          <h3 className="font-semibold text-xl text-blue-600 cursor-pointer">
            {repository.name}
          </h3>
          <div className="h-1 w-full">
            <div className=" bg-blue-600 -translate-y-1 " ref={spanRef}></div>
          </div>
        </a>
        <div className="border-solid border-gray-300 border-[1px] rounded-full h-5 px-2 pt-[2px] ml-2 translate-y-1 text-[0.7rem] text-gray-500 font-semibold">
          <p className="-translate-y-[1px]">
            {repository.isPrivate ? "Private" : "Public"}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-2">{repository.description}</p>
      <div className="flex mt-3 gap-6">
        {repository.primaryLanguage && (
          <div className="flex">
            <div
              className="rounded-full translate-y-[2px] mr-1 w-3 h-3 "
              style={{ backgroundColor: `${repository.primaryLanguage.color}` }}
            ></div>
            <p className="text-xs text-gray-500">
              {repository.primaryLanguage.name}
            </p>
          </div>
        )}
        <div className="flex ">
          <img
            src="/images/fork.png"
            alt="fork icon"
            className="w-3 h-3 translate-y-[2px]"
          />
          <p className="text-xs text-gray-500 ml-1">{repository.forkCount}</p>
        </div>
        <p className="text-xs text-gray-500">
          Updated at: {trimDate(repository.updatedAt)}
        </p>
      </div>
    </div>
  )
}
