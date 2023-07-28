import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
const NAVIGATION_ITEMS = [
  {
    title: "Twiter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "BookMarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

export default function LeftSitebar() {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <Link
              className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-4 text-2xl"
              href={`/${item.title?.toLocaleLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              {item.title !== "Twiter" && <div className="">{item.title}</div>}
            </Link>
          );
        })}
        <button className="rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 m-4">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className=" text-left text-sm">
            <div className="font-semibold">Club of Coders</div>
            <div className="text-xs">@cubofcoderscom</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
}
