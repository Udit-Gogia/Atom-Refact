import { IconAdd } from "../assets/images";
import { useState, useRef } from "react";
import Image from "next/image";

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
      <label htmlFor={Name} className="font-semibold my-2">
        {label}
      </label>
      <textarea
        name={Name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        className="p-2 my-2 w-full rounded-lg border-2 resize-none focus:outline-primaryBlack"
        onChange={(e) => stateMng(e.target.value)}
      />
    </div>
  );
};

// export const FileComponent = ({  stateMng , accept , image }) => {

//     const inputRef = useRef(null);

//     const handleClick = () => {
// 		inputRef.current.click();
// 	};

//     const uploadFile = async (token, file) => {
//         console.log('inside uploadFile ' , file);
//         if (file?.size > 5e6) {
//             return alert("Please upload an image smaller than 5mb");
//         } else {
//             if (!file) {
//                 return;
//             }
//             const image = await fileUpload(token, fileObj);

//             return image;
//         }
//     }

//     const handleFileChange = async (event) => {
//         console.log('inside handleFileChange ' , event)
// 		const file = event.target.files && event.target.files[0];
//         const { token } = JSON.parse(localStorage.getItem('userData'))

//         console.log(file , token)
// 		// const imageResult = await uploadFile(
// 		// 	token,
// 		// 	file
// 		// );
// 		// stateMng(imageResult);
// 	};

// 	const removeImg = () => {
// 		return stateMng(IconAdd);
// 	}

//     return (
//             <div>
// 				<input
// 					style={{ display: "none" }}
// 					ref={inputRef}
// 					type="file"
// 					onChange={(e) => handleFileChange(e)}
// 					name="profilePicture"
// 					accept={accept}
// 				/>

// 				<div
// 					className={`flex flex-col w-1/3 `}
// 				>
// 					<button
// 						className={`rounded-lg roboto-reg mt-4 hover:border-[#191919] ${
// 							image === IconAdd ? "py-12 border-2 " : "p-2 pb-1"
// 						} `}
// 						onClick={(e)=>{
//                             console.log('button click')
//                             e.preventDefault();
//                             handleClick()
//                         }}
// 					>
// 						<Image
// 							src={image}
// 							alt="icon-user"
// 							width={image === IconAdd ? "30" : "250"}
// 							height={image === IconAdd ? "30" : "200"}
// 							className="rounded-lg"
// 						/>
// 					</button>
// 					<button
// 						className={`mt-2 border-2 rounded-lg py-2`}
// 						onClick={removeImg}
// 					>
// 						remove image{" "}
// 					</button>
// 				</div>
//             </div>
//     )

// }
