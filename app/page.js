import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>

            <div className="text-white flex flex-col gap-3 justify-center items-center h-[47vh] px-5 md:px-0 text-xs md:text-base">
                <div className=" flex items-center gap-3 justify-center font-bold md:text-5xl text-3xl ">
                    Buy Me a chai
                    <span>
                        <img className="invert" src="tea.svg" width={52} alt="chai" />
                    </span>
                </div>
                <p classname="text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque unde asperiores tempora cumque eveniet tenetur nostrum delectus.
                </p>
                <p classname="text-center md:text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas earum dolorum molestiae unde, labore delectus dignissimos sit inventore veniam. Beatae quaerat eaque corporis.
                </p>
                <div>
                    <Link href={"/login"}>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
                    </Link>
                    <Link href="/about">
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
                    </Link>
                </div>
            </div>

            <div className="bg-red-50 opacity-5 h-1"> </div>

            <div className=" text-white container mx-auto py-5 px-10">
                <h2 className="text-center text-3xl font-bold  my-10" >Your fans can buy you a Chai</h2>
                <div className="flex gap-5 justify-around">
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 " src="/man.png" alt="man" width={80} />
                        <p className="font-bold mt-1 text-center ">Fund Yourself</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 invert " src="/bitcoin.gif" alt="bitcoin" width={80} />
                        <p className="font-bold mt-1 text-center ">Fund Yourself</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 " src="/group.png" alt="group" width={80} />
                        <p className="font-bold mt-1 text-center ">Your fans want to help</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 opacity-5 h-1 md:mt-10" > </div>

            <div className=" text-white container mx-auto py-5 px-10 flex flex-col items-center justify-center ">
                <h2 className="text-center text-3xl font-bold  my-10" >Learn more about us</h2>
                {/* can replace this link of youtube video with yours or any other video  */}
                <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh] " >
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/E3doEXM3w54?si=OqHOBfiNK0Quj5QR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}
