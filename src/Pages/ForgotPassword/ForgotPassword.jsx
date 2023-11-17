import { Link } from "react-router-dom";

const Forgot_password = () => {
  return (
    <div className=" flex  flex-col m-auto">
      <div className=" absolute top-[-64px] h-[16px] w-[594px] flex justify-center items-center m-auto mb-[64px]">
        <h2 className="flex items-center justify-center w-[594px] h-[16px] text-[white]">
          TRADE INVEST Backoffice
        </h2>
      </div>
      <div className="p-[36px] flex w-[594px] flex-col justify-center items-center rounded-[24px] border-solid border-[1px] border-[#30363D] bg-[#161B22] ">
        <h2 className=" flex mb-[12px] text-[#F0F6FC] text-[32px] font-[700px] leading-[120%] justify-center items-center">
          Forgot Password?
        </h2>
        <div className="mb-[32px]">
          <p className="flex text-[16px] font-[500px] leading-[150%] text-center text-[#8B949E] items-center justify-center">
            Enter the email address you used to create your TRADE
          </p>
          <p className="flex text-[16px] font-[500px] leading-[150%] text-center text-[#8B949E] items-center justify-center">
            INVEST account. We'll sent a password reset email.
          </p>
        </div>
        <div className="flex flex-col self-stretch mb-[24px] w-[522px] h-[73px]">
          <p className=" text-[14px] font-[400px] mb-[8px] leading-[150%] text-[#8B949E]">
            Email address
          </p>
          <div className="px-[10] rounded-[6px] border-[1px] border-solid border-[#484F58] bg-[#21262D]">
            <input
              placeholder="mail@mail.com"
              className="px-[10px] h-[44px] w-[522px] bg-[transparent] text-white outline-none"
            />
          </div>
        </div>
        <button className="flex px-[24px] py-[12px] mb-[24px] h-[44px] items-center justify-center rounded-[6px] bg-[#1F6FEB] self-stretch text-[#F0F6FC] text-[14px] font-[500] leading-[150%]">
          Reset password
        </button>
        <Link
          to={"#"}
          className="px-[24px] py-[12px] text-[14px] font-[500] leading-[150%] text-[#1F6FEB] "
        >
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default Forgot_password;
