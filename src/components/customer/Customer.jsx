import Card from "../generalComponent/Card"
import check from "/images/customer/check.svg"
import send from "/images/customer/send.svg"
import vector from "/images/customer/vector.svg"
import pc from "/images/customer/dashboard.png"
function Customer() {
  return (
    <div className="flex-col-reverse md:flex-row flex xl:flex-row 2xl:flex-row justify-center   gap-0 md:gap-7 2xl:gap-7 xl:gap-7   px-8 py-3 md:px-16 md:py-0 xl:px-16  2xl:py-0 xl:py-0">
        <div className="    " >
            <Card image={check} title={"Lorem ipsum"} detail={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"} />
            <Card style={{marginLeft:"4rem"}} image={send} title={"Lorem ipsum"} detail={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"} />
            <Card image={vector} title={"Lorem ipsum"} detail={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum"} />
        </div>
        <div className="flex-col  p-0 md:p-5 xl:p-5 2xl:p-5    flex gap-6">
            <p className="text-[2rem] md:text-[3rem] xl:text-[3rem] font-bold "><span className="heading ">AI Trainer & Researcher </span> for your Business
            <div className="shadow"></div>
            </p>
            <p className="text-sm font-normal  text-[#52525B]" >Transform Your Business with our AI-Powered Agent</p>
            <div>
            <a href="https://www.aichatwithmedia.com/" target="_blank" rel="noreferrer"  className="border-0   hover:cursor-pointer rounded-lg text-white px-5 bg-black  w-40 py-2 ">Explore Now</a>
          </div>
          <div className="flex justify-center items-center">
                    <img
                        className=" w-[25rem]  "
                        src={pc}
                      alt=""
                    />
                </div>
        </div>
    </div>
  )
}

export default Customer