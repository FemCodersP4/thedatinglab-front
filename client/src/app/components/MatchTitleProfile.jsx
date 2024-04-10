import Image from "next/image";

export default function MatchTitleProfile(){
    return(
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-20 items-center justify-end pb-10">
                <h2 className="text-3xl font-black lg:text-6xl text-red-orange">
                    Usuario
                </h2>
            <div className=" relative z-1 m-auto w-[12.5rem] lg:mb-4 h-[12.5rem] rounded-full overflow-hidden lg:m-0 lg:w-[14rem]  lg:h-[14rem]">
                <Image
                    src={`http://127.0.0.1:8000/storage/$`}
                    width={200}
                    height={200}
                    alt={` photo`}
                    className="object-cover w-full h-full blur-sm"
                />
            </div>
        </div>
    );
}