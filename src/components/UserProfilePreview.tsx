import { Key } from "react"
import { UserData } from "../interfaces/interfaces"

export default function UserProfilePreview({
  userData,
}: {
  userData: UserData
}) {
  return (
    <div className="px-2 md:px-6">
      <img
        src={userData.avatarUrl}
        alt="user picture"
        className="w-28 md:w-56 rounded-full border-solid border-2 border-gray-200"
      />
      <p className="font-semibold text-2xl mt-2 leading-5">{userData.name}</p>
      <p className="font-extralight text-xl translate-y-[2px] ">
        {userData.login}
      </p>
      <p className="leading-4 mt-2"> {userData.bio}</p>
      <div className="flex mt-3">
        <p className="text-sm text-gray-500">
          <span className="font-bold text-black">
            {userData.followers.totalCount}&nbsp;
          </span>
          followers&nbsp;
        </p>
        <p className="-translate-y-[3px]"> ·&nbsp;</p>
        <p className="text-sm text-gray-500">
          <span className="font-bold text-black">
            {userData.following.totalCount}&nbsp;
          </span>
          following&nbsp;
        </p>
      </div>
      <hr className="my-4 border-gray-200" />
      <p className="font-semibold">Organizations</p>
      <div className="flex flex-r mt-3 flex-wrap">
        {userData.organizations.nodes.map(
          (organization: { avatarUrl: string; name: string }, index: Key) => (
            <div className="shrink-0" key={index}>
              <img
                src={organization.avatarUrl}
                alt={`${organization.name} avatar image`}
                className="rounded-full w-12 h-auto"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
