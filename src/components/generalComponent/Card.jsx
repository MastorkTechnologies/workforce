/* eslint-disable react/prop-types */

function Card({image,title,detail,style}) {
  return (
    <div style={style} >
        <div className="relative top-8 -left-5"><img src={image} alt="" /></div>
        <div className="border-2 md:w-[30rem] xl:md:w-[30rem] 2xl:md:w-[30rem] w-auto shadow-2xl  px-6 py-8 rounded-xl">
            <div className="flex flex-col gap-2 ">
                <p className="text-[1.3rem] font-bold text-[#252B42] ">{title}</p>
                <p className="text-[1rem]  text-[#737373]">{detail}</p>
            </div>
        </div>
    </div>
  )
}

export default Card