import { SidebarCard } from "./cards";
import { IconFeed } from "../assets/images";
import { useState } from "react";

export default function Sidebar({ selectedOption = 0 }) {
  const sidebarContent = [
    {
      src: IconFeed,
      alt: "icon-feed.png",
      display: "home",
      href: "/",
    },
    {
      src: IconFeed,
      alt: "icon-feed.png",
      display: "trending tags",
      href: "/tags",
    },
    {
      src: IconFeed,
      alt: "icon-feed.png",
      display: "create post",
      href: "/create",
    },
    {
      src: IconFeed,
      alt: "icon-feed.png",
      display: "my",
      href: "/my",
    },
    {
      src: IconFeed,
      alt: "icon-feed.png",
      display: "settings",
      href: "/settings",
    },
  ];
  const [activeOption, setActiveOption] = useState(selectedOption);
  return (
    <div className="flex flex-col gap-2 md:ml-12 py-8 md:mx-8 px-4 min-w-fit">
      {sidebarContent.map((option, index) => {
        option;
        return (
          <SidebarCard
            sidebarSection={option}
            key={index}
            index={index}
            isActiveIndex={activeOption}
            setActiveOption={setActiveOption}
          />
        );
      })}
    </div>
  );
}
