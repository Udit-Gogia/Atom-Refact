import Image from "next/image";
import Link from "next/link";

export function checkPresence(ele){
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

export function CompanyCard({title , description , media , link , tags}) {

    return (
        <div className="flex flex-col gap-6 min-w-fit md:mx-auto w-1/2 my-4 p-6 border-2 rounded-md bg-white">
            {checkPresence(title) && (
                <p className="text-3xl font-semibold tracking-wide capitalize">{title}</p>
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
                style={{width: 'auto', height: 'auto'}}
                priority={true}
            ></Image>
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

            {checkPresence(tags) && 
                (<div className="flex gap-3">

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
    )

}