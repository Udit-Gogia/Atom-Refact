import { IconAdd } from "../assets/images";
import { useState, useRef } from "react";
import Image from "next/image";
import { alertUser } from "./Modals";
import callApi from "./callApi";
import { handleFileInput } from "./fileFunctions";
import { checkPresence } from "./cards";

export const InputComponent = ({ label, Name, value, stateMng, type }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={Name} className="font-semibold my-2">
        {label}
      </label>
      <input
        type={type}
        name={Name}
        value={value}
        onChange={(e) => stateMng(e.target.value)}
        required
        className="border-2 rounded-md p-2 my-2 focus:outline-[#191919]"
      ></input>
    </div>
  );
};

export const TextAreaComponent = ({
  label = null,
  Name,
  value,
  stateMng,
  placeholder = null,
  rows = 7,
}) => {
  return (
    <div className="flex flex-col">
      {checkPresence(label) && (
        <label htmlFor={Name} className="font-semibold my-2">
          {label}
        </label>
      )}
      <textarea
        name={Name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        className="p-2 w-full rounded-lg border-2 resize-none focus:outline-primaryBlack"
        onChange={(e) => stateMng(e.target.value)}
      />
    </div>
  );
};

export const FileComponent = ({ file, setFile, accept }) => {
  const inputRef = useRef(null);

  const initiateFileInput = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <section className="flex flex-col">
        <button
          onClick={initiateFileInput}
          className="border-2 p-8 rounded-md hover:border-primaryBlack transition-all items-center"
        >
          <Image
            src={file}
            alt="add-file-icon"
            width={file === IconAdd ? "30" : "250"}
            height={file === IconAdd ? "30" : "200"}
            className="mx-auto"
            style={{ width: "auto" }}
          />
        </button>
        <button
          className={`mt-4 border-2 rounded-lg py-2 `}
          onClick={() => setFile(IconAdd)}
        >
          remove image{" "}
        </button>
      </section>
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        accept={accept}
        onChange={(e) => handleFileInput(e, setFile)}
        name="file-input"
      />
    </div>
  );
};
