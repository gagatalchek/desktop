import { Link } from "react-router-dom";
import FrameAndTradeInvest from "../../Components/FrameAndTradeInvest";
import InputEmail from "../../Components/InputEmail";
import Button from "../../Components/Button";

const Forgot_password = () => {
  return (
    <FrameAndTradeInvest>
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
      <div className="flex flex-col gap-[24px]">
        <InputEmail />

        <Button>Reset password</Button>

        <Link
          to={"#"}
          className="flex justify-center items-center px-[24px] py-[12px] text-[14px] font-[500] leading-[150%] text-[#1F6FEB] "
        >
          Back to login
        </Link>
      </div>
    </FrameAndTradeInvest>
  );
};

export default Forgot_password;
