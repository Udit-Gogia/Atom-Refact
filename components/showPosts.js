import { useEffect, useState } from "react";
import callApi from "./callApi";
import { PostCard, checkPresence } from "./cards";

export default function ShowPosts({ feedType }) {
  const [post, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  let pageNumber = 1;

  const loadPosts = async () => {
    const { response, result } = await callApi(
      "GET",
      `public/read-post/${pageNumber}?feed_type=${feedType}`
    );

    console.log(result);

    if (response?.body === "no data" && result?.length < 10) {
      setHasMore(false);
    } else {
      console.log("result is not no data ", result);

      result && setPosts((prevPosts) => [...prevPosts, ...result]);
      pageNumber++;
      setHasMore(true);
    }
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("at the bottom of the page ", pageNumber);
      loadPosts();
    }
  };

  useEffect(() => {
    console.log("hasMore is ", hasMore);
    loadPosts();
    hasMore && window.addEventListener("scroll", handleScroll);
  }, [feedType]);

  return (
    <div className="w-full">
      {post.map((post, index) => {
        return (
          <div key={index} className="flex p-4 pt-0 flex-1 text-center ">
            <PostCard
              key={index}
              postId={post?.["id"]}
              createdById={post?.["created_by_id"]}
              createdByUsername={post?.["created_by_username"]}
              createdByProfilePicUrl={post?.["created_by_profile_pic_url"]}
              createdByRating={post?.["created_by_rating"]}
              postTitle={post?.["title"]}
              postDescription={post?.["description"]}
              postMediaUrl={post?.["media_url"]}
              postLinkUrl={post?.["link_url"]}
              postTags={post?.["tag"]}
              postLikeCount={post?.["like_count"]}
              postCommentCount={post?.["comment_count"]}
              postCreatedAt={post?.["created_at"]}
              createdByEmail={post?.["email"]}
              createdByMobile={post?.["mobile"]}
              createdByWhatsapp={post?.["whatsapp"]}
              city={post?.["city"]}
              state={post?.["state"]}
              country={post?.["country"]}
            />
          </div>
        );
      })}
    </div>
  );
}
