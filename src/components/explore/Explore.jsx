import Card from "../generalComponent/Card"
import check from "/images/explore/check.svg"
import send from "/images/explore/send.svg"
import vector from "/images/explore/vector.svg"
import pc from "/images/explore/pc.svg"

function Explore() {
  return (
    <div id="explore" className=" px-8 py-3 md:px-16 md:py-0 xl:px-16  2xl:py-0 xl:py-0 gap-1   flex justify-center items-center flex-col  ">
        <div className="text-center">
            <p className="text-[3rem] font-bold text-left md:text-center xl:text-center 2xl:text-center text-[#252B42]">Explore Our AI Tools</p>
            <p className="text-[1rem] text-left md:text-center xl:text-center 2xl:text-center font-medium ">Work Smarter, Not Harder. Meet Your AI Colleague.</p>
        </div>

        <div className="flex-col-reverse  md:flex-row flex gap-0 md:gap-7 2xl:gap-7 xl:gap-7">
            <div className="    xl:mt-12 2xl:mt-12  md:mt-12 mt-2 ">
                <Card image={send} title={"Lead Capturing"} detail={"Imagine a super-smart assistant predicting what your customers want before they do."}/>
                <Card style={{marginLeft:"4rem"}} className="ml-0" image={check} title={"Conversion/Closing"} detail={"Picture a game-changer that senses the perfect moment to nudge a lead or sweeten the deal."}/>
                <Card image={vector} title={"Fulfilment/Onboarding"} detail={"Onboarding with AI is like having a personal guide tailor your experience right from the start."}/>
            </div>
            <div className="flex    flex-col     justify-center ">
                <div className="flex-col   p-0 md:p-5 xl:p-5 2xl:p-5 flex gap-2">
                        <div className="flex-col flex gap-3">
                        <p className="text-[2rem] md:text-[3rem] xl:text-[3rem] font-bold "><span className="heading">AI Lead Closer</span> for your Business</p>
                        <p className="text-sm font-normal text-[#52525B]  md:w-[14rem]  xl:w-[14rem] w-auto " >Transform Your Business with our AI-Powered WhatsApp Agent</p>
                        </div>
                    <a href="https://closer.mastork.com/" target="_blank"  rel="noreferrer" className="border-0   hover:cursor-pointer rounded-lg text-white px-5 bg-black  w-40 py-2 ">Explore Now</a>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="  "
                        src={pc}
                      alt=""
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore