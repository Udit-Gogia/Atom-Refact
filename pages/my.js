import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { IconMyProfile, IconLogin, IconFeed } from "../assets/images";

export default function My() {
  const pageList = [
    {
      icon: IconMyProfile,
      label: "my profile",
      redirect: "/my-profile",
    },
    {
      icon: IconLogin,
      label: "my login info",
      redirect: "/my-login-info",
    },
    {
      icon: IconFeed,
      label: "my post",
      redirect: "/my-post",
    },
    {
      icon: IconFeed,
      label: "my bookmark",
      redirect: "/my-bookmark",
    },
  ];

  return (
    <div className="flex bg-neutral-100 w-full h-screen">
      <Sidebar selectedOption={3} />
      <div className="grid grid-cols-2 gap-8 w-full p-8 pl-0 ">
        {pageList?.map((page, index) => {
          return (
            <Link
              key={index}
              href={page.redirect}
              className="flex flex-col bg-white p-4 gap-4 rounded-md hover:border-primaryBlack items-center justify-center hover:shadow-xl border-t-8 "
            >
              <Image
                src={page?.icon}
                alt="page-icon"
                width={"35"}
                height={"35"}
                style={{ width: "auto" }}
              />
              <p className="text-xl tracking-wide font-semibold">
                {page.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
