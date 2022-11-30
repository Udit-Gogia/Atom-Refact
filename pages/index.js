import { useState } from "react";
import { Tab } from "@headlessui/react";
import ShowPosts from "../components/showPosts";
import Sidebar from "../components/Sidebar";
import parseTag, { tagName } from "../components/parseTag";
import { checkPresence } from "../components/cards";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [activeOption, setActiveOption] = useState(0);
  return (
    <div className="flex bg-neutral-100 w-full">
      <Sidebar />

      <div className="w-full flex flex-col">
        <Tab.Group>
          <Tab.List>
            <Tab
              className={`p-2 m-4 lg:w-32  text-xl`}
              id={0}
              onClick={() => setActiveOption(0)}
              style={
                0 === activeOption
                  ? { textDecoration: "underline", fontWeight: "600" }
                  : null
              }
            >
              Fresh
            </Tab>
            <Tab
              className="p-2 m-4 lg:w-32 text-xl"
              id={1}
              onClick={() => setActiveOption(1)}
              style={
                1 === activeOption
                  ? { textDecoration: "underline", fontWeight: "600" }
                  : null
              }
            >
              Most Liked
            </Tab>
            <Tab
              className="p-2 m-4 lg:w-32 text-xl"
              id={2}
              onClick={() => setActiveOption(2)}
              style={
                2 === activeOption
                  ? { textDecoration: "underline", fontWeight: "600" }
                  : null
              }
            >
              Trending
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {checkPresence(tagName) && (
                <div className="lg:mr-3 bg-zinc-200 text-md tracking-wide w-fit px-2 py-1 rounded-sm border-l-2 border-[#191919] my-2 flex">
                  <p>{tagName}</p>
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => {
                      parseTag(null);
                      router.reload();
                    }}
                  >
                    X
                  </button>
                </div>
              )}
              <ShowPosts feedType={"fresh"} />
            </Tab.Panel>
            <Tab.Panel>
              {checkPresence(tagName) && (
                <div className="lg:mr-3 bg-zinc-200 text-md tracking-wide w-fit px-2 py-1 rounded-sm border-l-2 border-[#191919] my-2 flex">
                  <p>{tagName}</p>
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => {
                      parseTag(null);
                      router.reload();
                    }}
                  >
                    X
                  </button>
                </div>
              )}
              <ShowPosts feedType={"most_liked"} />
            </Tab.Panel>
            <Tab.Panel>
              {checkPresence(tagName) && (
                <div className="lg:mr-3 bg-zinc-200 text-md tracking-wide w-fit px-2 py-1 rounded-sm border-l-2 border-[#191919] my-2 flex">
                  <p>{tagName}</p>
                  <button
                    type="button"
                    className="ml-2"
                    onClick={() => {
                      parseTag(null);
                      router.reload();
                    }}
                  >
                    X
                  </button>
                </div>
              )}
              <ShowPosts feedType={"trending"} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
