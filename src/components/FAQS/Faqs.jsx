import { useState } from "react";
import FAQsData from "./data.json";
import minus from "/images/faq/minus.svg"
import plus from "/images/faq/plus.svg"

function Faqs() {
    const [showAns, setShowAns] = useState(Array(FAQsData.length).fill(false));

    const toggleShowAns = (index) => {
      const updatedShowAns = [...showAns];
      updatedShowAns[index] = !updatedShowAns[index];
      setShowAns(updatedShowAns);
    };
  return (
     <div id="faq" className="  px-8 py-3 md:px-16 md:py-3 xl:px-16  2xl:py-3 xl:py-3   w-[100%] justify-center  flex flex-col items-center ">
    <p className=" px-1 md:px-0 xl:px-0 2xl:px-0text-[#252B42]  font-bold text-center   text-[3rem]  md:text-center xl:text-center 2xl:text-center">
    Frequently asked questions
    </p>
    <p className="font-medium text-center text-[#667085] text-[1rem] ">
    Everything you need to know about the product.
    </p>
    <div className="h-auto max-w-[100rem] w-[100%]  ">
      {FAQsData.map((data, i) => (
        <div
          className=" my-5 md:my-7 border-black border-2 border-l-0 border-t-0 border-r-0 text-md md:text-xl font-medium"
          key={i}
        >
          <div className="flex justify-between items-center px-4 py-3 md:px-5 lg:py-5 lg:px-6">
            <p className="w-[84%] text-justify">{data.Q}</p>
            <p
              className="font-bold cursor-pointer text-xl"
              onClick={() => toggleShowAns(i)}
            >
              {showAns[i] ?  <img src={minus} alt="" /> : <img src={plus} alt="" /> }
            </p>
          </div>

          <div
            className={`${
              showAns[i]
                ? "h-auto py-3 lg:py-5 border-t-2"
                : "h-[0px] border-t-1"
            } w-full border-black overflow-hidden px-4 lg:px-6 bg-white rounded-b-xl
          transition-all ease-in-out duration-300`}
          >
            <p className="text-justify">{data.A}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Faqs