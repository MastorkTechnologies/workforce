/* eslint-disable react/prop-types */
function Card({ image, detail, title }) {
    
    return (
      <div className="border-2 rounded-lg text-center text-[#252B42]  shadow-xl w-auto  p-9 flex flex-col justify-center items-center gap-6">
        <img className="h-[5rem] w-[5rem]" src={image} alt="" />
        <p className="text-[1.3rem] font-bold">{title}</p>
        <p className="text-[1rem] leading-4 font-normal">{detail}</p>
      </div>
    );
  }
  
  
  export default Card;
  