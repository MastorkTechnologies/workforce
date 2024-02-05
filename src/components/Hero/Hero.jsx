import Navbar from "./Navbar"
import AI from "/images/hero/Polygon.svg"
import watch from "/images/hero/icon.svg"

function Hero() {
  return (
    <div className="home  flex justify-center items-center flex-col px-8 md:px-16 xl:px-16 2xl:px-16  py-4 ">
       <div  className=" w-[100%] max-w-[90rem] "> <Navbar/></div>
    <div className="flex     justify-between w-[100%] max-w-[85rem]">
        <div className="  py-9  gap-8 flex flex-wrap flex-col  justify-center  ">
            <div className="text-[3rem]  font-bold ">
                <p className=" w-[auto] md:w-[24rem] ">The Future of Work is Here. </p>
                <p>Are You Ready?</p>
            </div>
            <div className="flex flex-col gap-4" >
                <p className="text-md font-semibold ">Your New AI Partner/Employee/Intern</p>
                <p className=" text-sm w-[auto] md:w-[28rem] xl:w-[28rem] 2xl:w-[28rem] text-[#737373]">Embrace life&apos;s vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
            </div>
            <div className="flex   gap-6">
             
                <a href="#explore" className=" text-white px-5 py-2 rounded-lg bg-[#31A0FE]">Get Started Now</a>
                <div className="flex  gap-3 items-center">
                    <img src={watch} alt="" />
                    <p>Watch Demo video</p>
                </div>
            </div>
        </div>
        <div className=" hidden md:flex justify-items-end xl:flex 2xl:flex" >
            <img  className="   h-[30rem]" src={AI} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero