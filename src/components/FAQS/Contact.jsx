import avtar from "/images/faq/avtar.svg"

const Contact = () => {
  return (
    <div className=" px-8 py-3 md:px-16 md:py-10 xl:px-16 flex justify-center  2xl:py-10 xl:py-10">
        <div className="flex-col flex border-2 rounded-xl shadow-xl p-9 w-[90%] max-w-[90rem] gap-4 justify-center items-center">
        <div><img src={avtar} alt="" /></div>
        <div className="text-center">
            <p className="text-[#101828] text-[1.1rem] font-semibold">Still have questions?</p>
            <p className="text-[#667085] font-medium text-[1rem]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <div>
            <button className="px-10 py-3 text-center bg-black text-[white] rounded-lg font-medium">Get in touch</button>
        </div>
        </div>
    </div>
  )
}

export default Contact