import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

export default function MainComponent () {
    return (
        <main className="ml-[275px] mx-2 flex max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
        <h1 className="text-xl font-bold p-6 backdrop-blur bg-white/10 sticky top-0">
          Home
        </h1>
        <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative flex items-stretch space-x-2 py-4 px-4">
          <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
          <div className="flex flex-col w-full h-full">
            <input
              type="text"
              className="w-full h-full bg-transparent p-4 outline-none border-none border-b-[0.5px] border-gray-600 placeholder:text-2xl placeholder:text-gray-600"
              placeholder="What's Happening"
            />
            <div className="w-full justify-between items-center flex">
              <div></div>
              <div className="w-full max-w-[100px]">
                <button className="rounded-full bg-primary px-4 py-2 w-full text-2xl text-center hover:bg-opacity-70 transition duration-200 text-2xl">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-2 border-b-[0.5px] border-gray-600  flex space-x-4"
            >
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between space-x-1 w-full">
                  <div className="flex">
                    <div className="font-bold">Club of Coders</div>
                    <div className="text-gray-500">@clubofcoderscom</div>
                    <div className="text-gray-500">
                      <BsDot />
                    </div>
                    <div className="text-gray-500">1 hour ago</div>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-white text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iure asperiores sed, quod odio aspernatur explicabo
                  molestias quam nulla velit? Fuga impedit quasi asperiores?
                  Ex qui doloremque laborum expedita eius non tempore a
                  beatae, harum cumque, vero nam quibusdam assumenda ad nulla
                  totam veritatis voluptatem similique! Repudiandae ducimus
                  fugit repellendus, non quis ipsam explicabo laboriosam
                  dolorem ut nisi reiciendis cupiditate veritatis ipsum iusto
                  et. Nostrum a magnam amet libero neque fuga eaque, quis
                  consequuntur, dolores dignissimos rerum maiores iure quia
                  mollitia error ad nesciunt incidunt tempora unde laborum
                  accusamus impedit. Repellat nihil illo similique atque? Amet
                  rem nemo accusamus vero quo.
                </div>
                <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                <div className="flex items-center justify-start space-x-20 mt-2 space-x-2 w-full">
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineHeart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <IoStatsChart />
                  </div>
                  <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    )
}