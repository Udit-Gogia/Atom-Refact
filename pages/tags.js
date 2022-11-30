import Sidebar from "../components/Sidebar";
import callApi from "../components/callApi";
import { checkPresence } from "../components/cards";
import parseTag from "../components/parseTag";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Tags() {
  const router = useRouter();
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    async function getTags() {
      const { result } = await callApi("GET", "public/read-post-tag/1");
      setTagList(result);
    }
    getTags();
  }, []);

  return (
    <div className="flex bg-neutral-100 w-full">
      <Sidebar selectedOption={1} />

      <div className="grid grid-cols-4 gap-8 w-full p-8 pl-0">
        {tagList?.map((tag, index) => {
          return (
            <button
              key={index}
              className="flex flex-col bg-white p-4 rounded-md hover:border-primaryBlack items-center justify-center hover:shadow-xl border-t-8"
              onClick={() => {
                router.push({
                  pathname: "/",
                  query: { feed_type: "fresh", tag: tag?.tag },
                });
                return parseTag(tag?.tag, "tagclick");
              }}
            >
              {checkPresence(tag?.["media_url"]) && (
                <Image
                  src={tag?.["media_url"]}
                  alt="tag-icon"
                  width={"35"}
                  height={"35"}
                />
              )}
              <p className="text-lg tracking-wide font-semibold">{tag?.tag}</p>
              <p>({tag?.count})</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
