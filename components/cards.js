import Image from "next/image";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  IconUser,
  IconStar,
  IconPdf,
  IconMenu,
  IconLike,
  IconComment,
  IconChat,
} from "../assets/images";

export function checkPresence(ele) {
  return ele != "undefinedundefined" &&
    ele != [] &&
    ele != "nullnull" &&
    ele != "string" &&
    ele &&
    ele != undefined &&
    ele != null &&
    ele != ""
    ? true
    : false;
}

export function CompanyCard({ title, description, media, link, tags }) {
  return (
    <div className="flex flex-col gap-6 min-w-fit md:mx-auto w-1/2 my-4 p-6 border-2 rounded-md bg-white">
      {checkPresence(title) && (
        <p className="text-3xl font-semibold tracking-wide capitalize">
          {title}
        </p>
      )}

      {checkPresence(description) && (
        <p className="text-md capitalize">{description}</p>
      )}

      {checkPresence(media) && (
        <Image
          src={`${media}`}
          alt={`image-${title}`}
          width="350"
          height="300"
          className="rounded-md object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
          priority={true}
        />
      )}

      {checkPresence(link) && (
        <p className="">
          Link{" "}
          <Link
            className="mx-1 text-blue-500 "
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </Link>
        </p>
      )}

      {checkPresence(tags) && (
        <div className="flex gap-3">
          {tags?.map((tag, index) => {
            return (
              <p
                key={index}
                className="bg-neutral-200 text-lg tracking-wide w-fit px-2 py-1 rounded-lg"
              >
                {tag}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function SidebarCard({
  sidebarSection,
  index,
  isActiveIndex,
  setActiveOption,
}) {
  return (
    <Link
      href={sidebarSection.href}
      className={`flex items-center py-4 px-8 w-full rounded-md hover:underline  ${
        index == isActiveIndex ? "bg-white" : "bg-neutral-100"
      }`}
      onClick={() => setActiveOption(index)}
    >
      <Image
        src={sidebarSection.src}
        alt={sidebarSection.alt}
        width="26"
        height="26"
        className="mx-2"
      />
      <p className="mx-2 roboto-reg ">{sidebarSection.display}</p>
    </Link>
  );
}

export const DropDown = () => {
  const links = [
    { href: "/account-settings", label: "bookmark post" },
    { href: "/support", label: "rate user" },
    { href: "/license", label: "block user" },
    { href: "/sign-out", label: "repost post" },
    { href: "/sign-out", label: "repost user" },
  ];
  return (
    <Menu>
      <Menu.Button>
        <Image src={IconMenu} width={"25"} alt="icon-menu" />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="focus:outline-none absolute origin-top-left lg:w-56 divide-y divide-neutral-100 rounded-md bg-white shadow-lg border-2">
          <div className="p-1">
            {links.map((item, idx) => (
              <Menu.Item disabled={item.disabled} key={idx}>
                {({ active }) => (
                  <button
                    className={`${
                      active && "bg-neutral-100 underline"
                    } w-full rounded-md p-2 m-1 `}
                    href="/account-settings"
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export function PostCard({
  postId,
  createdById,
  createdByProfilePicUrl,
  createdByUsername,
  createdByRating,
  postTitle,
  postDescription,
  postMediaUrl,
  postLinkUrl,
  postTags,
  city,
  state,
  country,
  createdByEmail,
  createdByMobile,
  createdByWhatsapp,
  postCreatedAt,
  postLikeCount,
  postCommentCount,
}) {
  var date1 = new Date(postCreatedAt?.substring(0, 10));
  var date2 = new Date();
  var dayDiff = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
  dayDiff = `${dayDiff} d`;

  return (
    <>
      {checkPresence(postId) && (
        <div className="flex flex-col w-full p-8 m-4 mt-2 bg-white border-2 rounded-xl border-primaryBlack gap-4">
          <section className="flex gap-2 justify-between items-center">
            <div className="flex gap-4 ">
              {checkPresence(createdByProfilePicUrl) ? (
                <Image
                  src={createdByProfilePicUrl}
                  alt={createdByUsername || "icon"}
                  className="rounded-full "
                  width="60"
                  height="60"
                />
              ) : (
                <Image
                  src={IconUser}
                  alt={createdByUsername}
                  className="rounded-full "
                  width="60"
                  height="60"
                />
              )}

              <div className="grid grid-cols-1 gap-2">
                {checkPresence(createdByUsername) && (
                  <p className="text-xl">{createdByUsername}</p>
                )}

                {checkPresence(toString(createdByRating)) && (
                  <p className="flex">
                    <Image src={IconStar} alt="icon-rating" width={"25"} />
                    <span className="mx-2 text-lg">{createdByRating}</span>
                  </p>
                )}
              </div>
            </div>

            <DropDown />
          </section>

          {checkPresence(postTitle) && (
            <p className="text-left text-xl font-semibold">{postTitle}</p>
          )}

          {checkPresence(postDescription) && (
            <p className="text-left text-lg">{postDescription}</p>
          )}
          {checkPresence(postMediaUrl) &&
            (postMediaUrl.substring(postMediaUrl.length - 3) != "pdf" ? (
              <Image
                className={`w-2/3 rounded-md mx-auto`}
                src={postMediaUrl}
                alt={createdByUsername || "icon"}
                width="600"
                height="400"
              />
            ) : (
              checkPresence(postId) && (
                <div className="w-full flex justify-evenly items-center border-2 p-2 rounded-md">
                  <Image
                    className={` rounded-md`}
                    src={IconPdf}
                    alt="icon-pdf"
                    width={"40"}
                    height={"40"}
                  />
                  <a
                    href={postMediaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold roboto-reg"
                  >
                    View
                  </a>
                </div>
              )
            ))}
          {checkPresence(postLinkUrl) && (
            <p className="text-left mt-4">
              Link{" "}
              <a
                href={postLinkUrl}
                className="mx-1 text-blue-500 "
                target="_blank"
                rel="noreferrer"
              >
                {postLinkUrl}
              </a>
            </p>
          )}
          {checkPresence(postTags) && (
            <div className="flex my-4 flex-wrap ">
              {postTags.map((tag, index) => {
                return (
                  <button
                    key={index}
                    className="lg:mr-3 bg-zinc-200 text-md tracking-wide w-fit px-2 py-1 rounded-sm border-l-2 border-[#191919] my-2"
                    type="button"
                    onClick={() => showTagFeed(tag)}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <section className="flex mr-4">
                <button className="hover:bg-neutral-200 px-2 rounded-md">
                  <Image
                    src={IconLike}
                    width={"22"}
                    height={"22"}
                    alt="icon-like"
                  />
                </button>
                <p className="font-semibold text-lg">{postLikeCount}</p>
              </section>
              <button className="hover:bg-neutral-100 px-2 rounded-md mr-4">
                <Image
                  src={IconChat}
                  width={"22"}
                  height={"22"}
                  alt="icon-chat"
                />
              </button>

              <button>
                <Image
                  src={IconComment}
                  width={"22"}
                  height={"22"}
                  alt="icon-comment"
                />
              </button>
              <p className="font-semibold text-lg">{postCommentCount}</p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}
