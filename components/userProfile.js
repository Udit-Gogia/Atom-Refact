import { checkPresence } from "./cards";
import { getUserDataFromApi } from "./authFunctions";
import { useEffect, useState } from "react";
import { IconUser } from "../assets/images";
import Image from "next/image";
import { TextDisplay } from "./inputs";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function getUserInfo() {
      const result = await getUserDataFromApi();
      setUserInfo(result);
    }
    getUserInfo();
  }, []);

  const userDetails = [
    {
      heading: "Username",
      content: userInfo?.["username"],
    },
    {
      heading: "Name",
      content: userInfo?.["name"],
    },

    {
      heading: "Mobile",
      content: userInfo?.["mobile"],
    },
    {
      heading: "Whatsapp",
      content: userInfo?.["whatsapp"],
    },
    {
      heading: "Phone",
      content: userInfo?.["phone"],
    },
    {
      heading: "City",
      content: userInfo?.["city"],
    },
    {
      heading: "State",
      content: userInfo?.["state"],
    },
    {
      heading: "Country",
      content: userInfo?.["country"],
    },
    {
      heading: "Address",
      content: userInfo?.["address"],
    },
    {
      heading: "Pincode",
      content: userInfo?.["pincode"],
    },
    {
      heading: "Gender",
      content: userInfo?.["gender"],
    },
    {
      heading: "Year of Birth",
      content: userInfo?.["year_of_birth"],
    },
    {
      heading: "Description",
      content: userInfo?.["description"],
    },
  ];

  return (
    <div className="flex flex-col gap-8 mx-2">
      {checkPresence(userInfo?.["profile_pic_url"]) ? (
        <Image
          src={userInfo?.["profile_pic_url"]}
          alt="icon-user"
          width="60"
          height="60"
          className="rounded-full mx-auto"
        />
      ) : (
        <Image
          src={IconUser}
          alt="icon-user"
          width="50"
          height="50"
          className="rounded-full mx-auto"
        />
      )}

      {userDetails.map((userDetail, index) => {
        return (
          <TextDisplay
            key={index}
            heading={userDetail.heading}
            content={userDetail.content}
          />
        );
      })}
    </div>
  );
}
