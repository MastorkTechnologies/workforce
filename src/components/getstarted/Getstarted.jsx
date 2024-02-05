import arrow from "/images/getstarted/arrow.svg"
import bottom from "/images/getstarted/bottom.svg"
import top from "/images/getstarted/top.png"
function Getstarted() {
  return (
    <div className=" px-8 py-3 md:px-16 md:py-4 xl:px-16  2xl:py-4 xl:py-4  items-center  flex-wrap flex justify-center ">
    <div className="flex h-[17rem] bg-black justify-between max-w-[90rem]   w-[90%] px-4 xl:px-12 md:px-12 2xl:px-12 rounded-xl  ">
        <div className="flex flex-col gap-6 justify-center xl:w-[35rem] 2xl:w-[35rem]  md:w-[35rem] w-auto">
            <p className="text-[1.2rem] xl:text-[1.5rem] md:text-[1.5rem] 2xl:text-[1.5rem] font-[500] getstarted text-white">So are you ready to transform your Workforce Automated with Mastork today? ⚡</p>
            <button className="px-10 py-3 flex w-[14rem] items-center gap-4 text-center bg-[#34B7F1] text-[white] rounded-lg font-medium">Get in touch <img src={arrow} alt="" /></button>
        </div>
        <div className=" hidden   xl:flex md:flex 2xl:flex justify-end  flex-col">
            <img src={top} className=" relative top-28  z-10" alt="" />
            <img src={bottom} className="relative " alt="" />
        </div>
    </div>
    </div>
  )
}

export default Getstarted