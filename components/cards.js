import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import parseTag from "./parseTag";
import { likePost, verifyLikedPosts } from "./postFunctions";
import { useRouter } from "next/router";
import { alertUser } from "./Modals";
import DropDown from "./Dropdown";
import {
  IconUser,
  IconStar,
  IconPdf,
  IconMenu,
  IconLike,
  IconComment,
  IconChat,
  IconLiked,
} from "../assets/images";

export function checkPresence(ele) {
  return ele != "undefinedundefined" &&
    ele != [] &&
    ele != "nullnull" &&
    ele != "string" &&
    ele &&
    ele != undefined &&
    ele != null &&
    ele != "no data" &&
    ele != ["no data"] &&
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
      className={`flex items-center py-4 px-4 md:px-8 w-full rounded-md hover:underline  ${
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
        style={{ width: "auto" }}
      />
      <p className="mx-2">{sidebarSection.display}</p>
    </Link>
  );
}

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
  const router = useRouter();
  const [likedStatus, setLikedStatus] = useState(verifyLikedPosts(postId));
  const [likeCount, setLikeCount] = useState(postLikeCount);
  var date1 = new Date(postCreatedAt?.substring(0, 10));
  var date2 = new Date();
  var dayDiff = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
  dayDiff = `${dayDiff} d`;

  function showTagFeed(tagName) {
    router.push(
      {
        query: { feed_type: router.query.feed_type, tag: tagName },
      },
      undefined,
      { shallow: true }
    );
    window.scrollTo(0, 0);

    return parseTag(tagName, "tagClick");
  }

  async function likeThisPost() {
    const token = JSON.parse(localStorage.getItem("userData"))?.token;

    if (!verifyLikedPosts(postId) && token) {
      await likePost(postId, token);
      setLikedStatus(true);
      setLikeCount((count) => count + 1);
    }
  }
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
                  style={{ width: "auto", height: "auto" }}
                />
              ) : (
                <Image
                  src={IconUser}
                  alt={createdByUsername}
                  className="rounded-full"
                  style={{ width: "auto", height: "auto" }}
                  width="60"
                  height="60"
                />
              )}

              <div className="grid grid-cols-1">
                {checkPresence(createdByUsername) && (
                  <p className="text-xl">{createdByUsername}</p>
                )}

                {checkPresence(toString(createdByRating)) && (
                  <p className="flex">
                    <Image
                      src={IconStar}
                      alt="icon-rating"
                      width={"20"}
                      style={{ width: "auto" }}
                    />
                    <span className="mx-2 text-lg">{createdByRating}</span>
                  </p>
                )}
              </div>
            </div>
            {/* <p>{postId}</p> */}
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
                className={` rounded-md mx-auto`}
                src={postMediaUrl}
                style={{ width: "auto" }}
                alt={createdByUsername || "icon"}
                width="200"
                height="250"
              />
            ) : (
              checkPresence(postId) && (
                <div className="w-full flex justify-evenly items-center border-2 p-2 rounded-md">
                  <Image
                    className={`rounded-md`}
                    src={IconPdf}
                    style={{ width: "auto" }}
                    alt="icon-pdf"
                    width={"40"}
                    height={"40"}
                  />
                  <a
                    href={postMediaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold "
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
                <button
                  className="hover:bg-neutral-200 px-2 rounded-md"
                  onClick={likeThisPost}
                  disabled={verifyLikedPosts(postId)}
                >
                  <Image
                    src={likedStatus ? IconLiked : IconLike}
                    width={"22"}
                    height={"22"}
                    alt="icon-like"
                  />
                </button>
                <p className="font-semibold text-lg">{likeCount}</p>
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
            <div>{dayDiff}</div>
          </div>
        </div>
      )}
    </>
  );
}
