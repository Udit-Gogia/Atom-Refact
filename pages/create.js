import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function createPost() {
  const createPostDetails = [
    {
      label: "Share your random thoughts",
      redirect: "/create-post",
    },
    {
      label: "Share a meme",
      redirect: "/create-post-meme",
    },
    {
      label: "Looking for a job?",
      redirect: "/create-post-workseeker",
    },
    {
      label: "Looking to hire?",
      redirect: "/create-post-workgiver",
    },
    {
      label: "List your service ",
      redirect: "/create-post-service",
    },
    {
      label: "*name suggestion required for create lead*",
      redirect: "/create-lead",
    },
  ];

  return (
    <div className="flex bg-neutral-100 w-screen h-screen">
      <Sidebar selectedOption={2} />

      <div className="grid grid-cols-3 gap-8 w-full p-8 h-1/2">
        {createPostDetails.map((createPost, index) => {
          return (
            <Link
              href={createPost.redirect}
              className="flex flex-col  bg-white p-4 rounded-md border-t-8 hover:border-primaryBlack items-center justify-center hover:shadow-xl font-semibold tracking-wide text-xl text-center"
            >
              {createPost.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
