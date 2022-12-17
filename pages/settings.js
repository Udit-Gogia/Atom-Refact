import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import {
  IconInfo,
  IconPolicy,
  IconContactUs,
  IconSuggestAFeature,
  IconRating,
  IconLogout,
  IconDelete,
} from "../assets/images";

export default function Settings() {
  const pageList = [
    {
      icon: IconInfo,
      label: "about atom",
      redirect: "/about",
    },
    {
      icon: IconPolicy,
      label: "policy",
      redirect: "/policy",
    },
    {
      icon: IconContactUs,
      label: "contact us ",
      redirect: "/contact-us",
    },
    {
      icon: IconSuggestAFeature,
      label: "suggest a feature",
      redirect: "/suggest-a-feature",
    },
    {
      icon: IconRating,
      label: "rate atom",
      redirect: "/rate-atom",
    },
    {
      icon: IconLogout,
      label: "signout",
      redirect: "/signout",
    },
    {
      icon: IconDelete,
      label: "delete my account",
      redirect: "/delete-my-account",
    },
  ];

  return (
    <div className="flex bg-neutral-100 w-full h-screen ">
      <Sidebar selectedOption={4} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full p-8 pl-0 ">
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
