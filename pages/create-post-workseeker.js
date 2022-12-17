import {
  IconConsultant,
  IconFullTime,
  IconFreelance,
  IconAdd,
} from "../assets/images";
import callApi from "../components/callApi";
import Image from "next/image";
import { useState } from "react";
import { FileComponent, TagsComponent } from "../components/inputs";

export async function getServerSideProps() {
  const { result: workProfile } = await callApi(
    "GET",
    "public/read-box/1?type=work_profile"
  );

  const { result: serviceType } = await callApi(
    "GET",
    "public/read-box/1?type=service_type"
  );

  return {
    props: {
      serviceType,
      workProfile,
    },
  };
}

const jobRoles = [
  {
    jobName: "full-time",
    jobImage: IconFullTime,
  },
  {
    jobName: "consultant",
    jobImage: IconConsultant,
  },
  {
    jobName: "internship",
    jobImage: IconFreelance,
  },
  {
    jobName: "freelance",
    jobImage: IconFreelance,
  },
];

const experienceOptions = [
  "0-1 year of experience",
  "1-3 years of experience",
  "3-5 years of experience",
  "5-10 years of experience",
  "10-15 years of experience",
  "15-20 years of experience",
  "20-30 years of experience",
  ">30 years of experience",
];

export default function createPostWorkseeker({ serviceType, workProfile }) {
  const [formData, setFormData] = useState({
    work_type: "",
    work_profile: "",
    experience: "",
    city: "",
    media_url: "",
    fileName: "",
    link_url: "",
    email: "",
    mobile: "",
    whatsapp: "",
  });

  const [tagText, setTagText] = useState("");
  const [tag, setTags] = useState([]);

  return (
    <div className="w-full bg-neutral-100 min-h-max">
      <div className="md:w-1/2 flex flex-col gap-6 border-2 rounded-lg p-8 mx-auto bg-white my-4">
        <p className="text-xl tracking-wide font-semibold pb-2  w-full border-b-2">
          looking for a job?
        </p>

        <form
          id="workseeker"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          method="post"
          className="flex flex-col gap-6"
        >
          {/* work_type starts */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {jobRoles?.map((job, index) => {
              return (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      value={job.jobName}
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          work_type: `${e.target.value}`,
                        })
                      }
                      className="opacity-0 basis-1/2 peer"
                      name="job"
                      required
                    />
                    <div className="flex flex-col items-center basis-1/2 mx-auto peer-checked:font-bold w-full border-2 peer-checked:border-[#191919] rounded-md py-2">
                      <Image
                        src={job.jobImage}
                        width="50"
                        height="50"
                        alt={job.jobName}
                      />
                      <p>{job.jobName}</p>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          {/* work_type ends */}

          {/* work_profile starts */}
          <div>
            <h1 className="roboto-reg text-lg mb-1">select work profiles</h1>
            <input
              type="text"
              list="work"
              className="px-4 py-2 border-2 rounded-lg w-full"
              onClick={() => setFormData({ ...formData, work_profile: `` })}
              onChange={(e) =>
                setFormData({ ...formData, work_profile: `${e.target.value}` })
              }
              value={formData.work_profile}
              placeholder="enter work profile.."
              required
            />
            <datalist id="work">
              {Array.isArray(workProfile) &&
                workProfile?.map((work, index) => (
                  <option key={index}>{work.title}</option>
                ))}
            </datalist>
          </div>
          {/* work_profile ends */}

          {/* experience starts */}
          <div>
            <h1 className="roboto-reg text-lg mb-1">select your experience</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {experienceOptions.map((exp, index) => {
                return (
                  <div key={index}>
                    <label className="flex w-full jusitfy-center place-content-center">
                      <input
                        type="radio"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: `${e.target.value}`,
                          })
                        }
                        className="opacity-0 p-2 peer"
                        name="exp"
                        required
                      />
                      <p className="peer-checked:font-semibold mx-auto w-full border-2 peer-checked:border-[#191919] p-2 text-center rounded-md">
                        {exp}
                      </p>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* experience ends */}

          {/* location preference starts */}
          <div>
            <h1 className="text-lg mb-1">select preferred city to work</h1>

            <input
              type="text"
              list="loc"
              className="px-4 py-2 border-2 rounded-lg w-full"
              onClick={() => setFormData({ ...formData, city: "" })}
              onChange={(e) =>
                setFormData({ ...formData, city: `${e.target.value}` })
              }
              value={formData.city}
              required
            />
            <datalist id="loc">
              <option>Remote only</option>
              <option>Can relocate anywhere</option>
            </datalist>
          </div>
          {/* location preference ends */}

          {/* skills section starts */}
          <TagsComponent
            heading={"Enter your major skills"}
            tag={tag}
            tagText={tagText}
            setTagText={setTagText}
            setTags={setTags}
          />
          {/* skills section ends */}

          {/* resume section starts */}
          <div className="md:w-1/3 flex flex-col gap-2">
            <h1 className="text-lg mb-1">upload your resume (optional) </h1>
            <FileComponent accept={".pdf"} file={IconAdd} />
          </div>
          {/* resume section ends */}

          {/* button starts */}
          <div className="flex justify-around items-center gap-6">
            <button className="lg:text-lg sm:text-md tracking-wide basis-1/2  md:px-8 py-2 text-center border-2 border-[#191919] rounded-lg hover:bg-neutral-200 transition px-12 h-fit">
              cancel
            </button>
            <button
              className="lg:text-lg sm:text-md tracking-wide bg-[#191919] md:px-8 py-2 basis-1/2  lg:border-2 border-[#191919] rounded-lg text-center text-white hover:bg-[#404040] "
              onClick={() => console.log(formData)}
            >
              send message
            </button>
          </div>
          {/* button ends */}
        </form>
      </div>
    </div>
  );
}
