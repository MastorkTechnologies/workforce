
import insta from "/images/footer/insta.svg"
import ln from "/images/footer/ln.svg"
function Footer() {
  return (
    <div className="flex border-2 border-l-0 border-b-0 border-r-0  justify-center items-center   shadow-2xl shadow-black flex-col  ">
        <div className="  flex-wrap  w-[100%] max-w-[100rem]  px-8 py-10 md:px-16 md:py-14 xl:px-16  2xl:py-14 xl:py-14 footer justify-between gap-8 border-black h-[auto] flex">
            <div className="flex     flex-col gap-5">
                <div className="flex gap-5  flex-col">
                    <p className="text-[2rem] font-semibold   text-[#252B42]">Get In Touch</p>
                    <p className="text-[1rem] text-[#737373] font-medium w-[12rem]">the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex gap-4">
                  
                    <img src={insta} alt="" />
                    <img src={ln} alt="" />
                   
                </div>
            </div>
            <div className="flex justify-center     flex-col md:flex-row xl:flex-row 2xl:flex-row   gap-12">
                <div className="flex-col gap-5 flex">
                    <div className="text-[2rem] font-semibold   text-[#252B42]">Company info</div>
                    <div className=" text-[14px] font-bold text-[#737373] gap-3 flex flex-col">
                    <a href="/">About Us</a>
                    <a href="/">Carrer</a>
                    <a href="/">We are hiring</a>
                    <a href="/">Blog</a>
                    </div>
                </div>
                <div  className="flex-col gap-5 flex">
                    <div className="text-[2rem] font-semibold   text-[#252B42]">Features</div>
                    <div className=" text-[14px] font-bold text-[#737373] gap-3 flex flex-col">
                    <a href="/">Business Marketing</a>
                    <a href="/">User Analytic</a>
                    <a href="/">Live Chat</a>
                    <a href="/">Unlimited Support</a>
                    </div>
                </div>
            </div>
        </div>
        <div className=" py-4 text-center w-[100%] bg-[#E1F4FF]">
            <p className=" text-xl  font-bold text-[#737373]">© 2024 Mastork Technologies Pvt. Ltd.</p>
        </div>
    </div>
  )
}

export default Footer