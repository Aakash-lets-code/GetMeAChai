import Image from "next/image";

export default function Home() {
    return (
        <>

            <div className="text-white flex flex-col gap-3 justify-center items-center h-[47vh] ">
                <div className=" flex items-center gap-3 justify-center font-bold text-5xl ">
                    Buy Me a chai
                    <span>
                        <img className="invert" src="tea.svg" width={52} alt="chai" />
                    </span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque unde asperiores tempora cumque eveniet tenetur nostrum delectus.
                </p>
                <div>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
                </div>
            </div>

            <div className="bg-red-50 opacity-5 h-1"> </div>

            <div className=" text-white container mx-auto py-5">
                <h2 className="text-center text-3xl font-bold  my-10" >Your fans can buy you a Chai</h2>
                <div className="flex gap-5 justify-around">
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 " src="/man.png" alt="man" width={80} />
                        <p className="font-bold mt-1">Fund Yourself</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 invert " src="/bitcoin.gif" alt="bitcoin" width={80} />
                        <p className="font-bold mt-1">Fund Yourself</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                    <div className="item flex items-center justify-center flex-col space-y-3">
                        <img className=" bg-slate-600 rounded-full p-1 " src="/group.png" alt="group" width={80} />
                        <p className="font-bold mt-1">Your fans want to help</p>
                        <p className="w-3/4 text-center">Your fans are avaiable to help you</p>
                    </div>
                </div>
            </div>

            <div className="bg-red-50 opacity-5 h-1 mt-10" > </div>

            <div className=" text-white container mx-auto py-5">
                <h2 className="text-center text-3xl font-bold  my-10" >Learn more about us</h2>
                <div className="flex items-center justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/E3doEXM3w54?si=OqHOBfiNK0Quj5QR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}
