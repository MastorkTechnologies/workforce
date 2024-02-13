import Card from "../generalComponent/Card";
import pc from "/images/agent/pc.svg";
import check from "/images/agent/check.svg";
import send from "/images/agent/send.svg";
import vector from "/images/agent/vector.svg";

function Agent() {
  return (
    <div className="flex-col md:flex-row flex xl:flex-row 2xl:flex-row justify-center   gap-0 md:gap-7 2xl:gap-7 xl:gap-7  px-8 py-3 md:px-16 md:py-0 xl:px-16  2xl:py-0 xl:py-0 ">
      <div className="flex-col  p-0 md:p-5 xl:p-5 2xl:p-5    flex gap-6">
        <div className="flex-col flex gap-3">
          <p className="text-[2rem] md:text-[3rem] xl:text-[3rem] font-bold">
            Custom Automated <span className="heading">AI HR Agent</span>
          </p>
          <p className="text-sm font-normal text-[#52525B]  w-[500px] m-2">
            AI HR agent uses machine learning algorithms to analyse resumes,
            identify suitable candidates, conduct initial screenings, and
            facilitate a more efficient hiring process.
          </p>
          <div>
            <a
              href="https://hr.mastork.com/"
              target="_blank"
              rel="noreferrer"
              className="border-0   hover:cursor-pointer rounded-lg text-white px-5 bg-black  w-40 py-2 "
            >
              Explore Now
            </a>
          </div>
        </div>
        <img className="flex justify-center items-center " src={pc} alt="" />
      </div>
      <div className="     ">
        <Card
          image={check}
          title={"AI Resume Shaper"}
          detail={
            "Tool that customises your resume based on the job title and description."
          }
        />
        <Card
          style={{ marginLeft: "4rem" }}
          image={send}
          title={"HR interview Agent"}
          detail={
            "A tool that assess a candidate and conduct the first round of interview through a chat bot."
          }
        />
        <Card
          image={vector}
          title={"AI video interview"}
          detail={
            "A tool that assess a candidate and conduct the video interview through a video chat. "
          }
        />
      </div>
    </div>
  );
}

export default Agent;
