import { Link } from "react-router-dom";
import FrameAndTradeInvest from "../../components/sign-up-paper";

const PasswordMail = () => {
  return (
    <FrameAndTradeInvest>
      <div>
        <div className="mb-[24px] tablet:mb-[32px]">
          <h2 className=" flex mb-[12px] text-[#F0F6FC] text-[20px] tablet:text-[32px] font-[700px] leading-[150%] tablet:leading-[120%] justify-center items-center">
            Forgot Password?
          </h2>
          <div className="flex flex-col justify-center items-center">
            <span className=" text-[#8B949E] text-[12px] tablet:text-[16px] font-[500px] leading-[133%] tablet:leading-[150%]">
              We’ve gone ahead and sent an email to{" "}
            </span>
            <div className="">
              <span>
                <span className="text-[#F0F6FC] text-[12px] tablet:text-[16px] font-[500px] leading-[133%] tablet:leading-[150%] mr-[1px]">
                  testmail@gmail.com{" "}
                </span>
                <span className="text-[#8B949E] text-[12px] tablet:text-[16px] font-[500px] leading-[133%] tablet:leading-[150%] mr-[1px]">
                  .
                </span>{" "}
                <span className="text-[#8B949E] text-[12px] tablet:text-[16px] font-[500px] leading-[133%] tablet:leading-[150%]">
                  Please check your inbox and
                </span>
              </span>
            </div>
            <span className="text-[#8B949E] text-[12px] tablet:text-[16px] font-[500px] leading-[133%] tablet:leading-[150%]">
              follow instructions to reset your passsword.
            </span>
          </div>
        </div>
        <div>
          <p className="text-[#8B949E] text-[12px] tablet:text-[16px] font-[500px] tablet:font-[700px] leading-[133%] tablet:leading-[150%] mb-[16px] flex justify-center items-center">
            Didn’t recieve an email?
          </p>
          <button className="px-[24px] py-[12px] w-[435px] h-[44px]  flex justify-center items-center text-[14px] font-[500px] leading-[150%] text-[#1F6FEB]">
            Send again
          </button>
        </div>
      </div>
    </FrameAndTradeInvest>
  );
};

export default PasswordMail;
