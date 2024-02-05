import pfp from "/images/testimonial/pfp.svg"
import x from "/images/testimonial/x.svg"
function Testimonial() {
    return (
        <div className="flex flex-col  gradient   px-8 pb-3 md:px-16 md:pb-[4rem] xl:px-16    w-[100%]  justify-center items-center  2xl:pb-[4rem] xl:pb-[4rem]  gap-8    " >
            <p className="text-[#252B42]  font-bold text-center   text-[3rem]  md:text-center xl:text-center 2xl:text-center ">What Do Others Think About Us</p>
            <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row 2xl:flex-row w-[100%] max-w-[100rem]  gap-3      justify-center ">
                <div className=" ">
                    <div className=" shadow-lg rounded-3xl px-8 md:w-[15rem] xl:w-[15rem]  2xl:w-[15rem] lg:w-[15rem] w-auto  py-10   p-9 flex justify-between  flex-col gap-7  ">
                        <div className=" flex gap-4  justify-between">
                            <p className="text-[1rem] text-[#111827]  font-medium" >“This is awesome”</p>
                            <img className="   " src={x} alt="" />
                        </div>
                        <div className="flex  gap-4 ">
                            <img className="" src={pfp} alt="" />
                            <div className="flex  flex-col gap-[2px]">
                                <p className="text-[#111827] font-bold text-sm">Jacob Andreou</p>
                                <p className="text-[#4B5563] font-medium text-sm">SVP @Snap</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[100%]  flex-col gap-4 ">

                    <div className="border-2 shadow-lg     rounded-3xl justify-between    flex flex-col gap-7  ">
                        <div className="flex justify-between gap-4 px-6 py-8 ">
                            <p className="text-[1rem] text-[#111827]      font-bold " >I recently discovered this website, and I must say, it&apos;s been a game-changer! The user-friendly interface, informative content, and responsive customer support have made my online experience exceptional. I highly recommend it!</p>
                            <img className="  flex  h-[1rem] " src={x} alt="" />
                        </div>
                        <div className="flex  py-6 px-8 border-2 shadow-lg border-l-0 rounded-b-3xl border-b-0  border-r-0 gap-4">
                            <img className="" src={pfp} alt="" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[#111827] font-bold text-sm">Jacob Andreou</p>
                                <p className="text-[#4B5563] font-medium text-sm">SVP @Snap</p>
                            </div>
                        </div>
                    </div>

                    <div className="gap-2 flex  flex-col md:flex-row xl:flex-row lg:flex-row 2xl:flex-row     ">

                        <div className="border-2 shadow-lg rounded-3xl  w-[100%]  px-8  py-10 flex flex-col justify-between  gap-7   ">
                            <div className=" flex justify-between gap-1">
                                <p className="text-[1rem] text-[#111827]  font-medium" >“It consistently delivers top-notch information and services.”</p>
                                <img className="  h-[1rem]    " src={x} alt="" />
                            </div>
                            <div className="flex gap-2">
                                <img className="" src={pfp} alt="" />
                                <div className="flex flex-col gap-[2px]">
                                    <p className="text-[#111827] font-bold text-sm">Jacob Andreou</p>
                                    <p className="text-[#4B5563] font-medium text-sm">SVP @Snap</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 shadow-lg rounded-3xl  w-[100%]  px-8 py-10 flex flex-col  justify-between gap-7   ">
                            <div className=" flex justify-between gap-1">
                                <p className="text-[1rem] text-[#111827]   font-medium" >“This is awesome, thanks for building
                                    it!”</p>
                                <img className=" h-[1rem]   " src={x} alt="" />
                            </div>
                            <div className="flex gap-2">
                                <img className="" src={pfp} alt="" />
                                <div className="flex flex-col gap-[2px]">
                                    <p className="text-[#111827] font-bold text-sm">Jacob Andreou</p>
                                    <p className="text-[#4B5563] font-medium text-sm">SVP @Snap</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className="border-2 shadow-lg rounded-3xl md:w-[15rem] xl:w-[15rem] 2xl:w-[15rem] lg:w-[15rem] w-auto   px-8 py-10 flex justify-between  flex-col gap-7   ">
                        <div className=" flex justify-between gap-4">
                            <p className="text-[1rem] text-[#111827] font-medium" >“This is awesome”</p>
                            <img className="  " src={x} alt="" />
                        </div>
                        <div className="flex  gap-4">
                            <img className="" src={pfp} alt="" />
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[#111827] font-bold text-sm">Jacob Andreou</p>
                                <p className="text-[#4B5563] font-medium text-sm">SVP @Snap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial